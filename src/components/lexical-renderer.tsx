import { Fragment } from 'react';
import Image from 'next/image';

interface MediaValue {
    id: string;
    url: string;
    alt?: string;
    filename?: string;
}

interface LexicalNode {
    type: string;
    format?: number;
    style?: string;
    text?: string;
    children?: LexicalNode[];
    version?: number;
    url?: string;
    tag?: string;
    listType?: 'number' | 'bullet';
    src?: string;
    altText?: string;
    height?: number;
    width?: number;
    target?: string;
    rel?: string;
    // Additional fields for Payload CMS Lexical format
    fields?: {
        url?: {
            url: string;
            linkType?: string;
        };
        rel?: string;
        target?: string;
        image?: MediaValue;
    };
    relationTo?: string;
    value?: MediaValue;
}

interface LexicalContent {
    root: {
        children: LexicalNode[];
        direction: null | 'ltr' | 'rtl';
        format: string;
        indent: number;
        type: string;
        version: number;
    };
}

interface TableOfContentsItem {
    text: string;
    id: string;
    level: number;
}

const extractTableOfContents = (nodes: LexicalNode[]): TableOfContentsItem[] => {
    const toc: TableOfContentsItem[] = [];

    nodes.forEach((node) => {
        if (node.type === 'heading') {
            const text = node.children?.map(child => child.text).join('') || '';
            const id = text.toLowerCase().replace(/\s+/g, '-');
            const level = parseInt(node.tag || '2');
            toc.push({ text, id, level });
        }
    });

    return toc;
};

const resolveUrl = (url: string) => {
    if (!url || url === '#') return '#';
    if (url.startsWith('/')) return url;
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
};

const renderNode = (node: LexicalNode): JSX.Element | string | null => {
    switch (node.type) {
        case 'text': {
            let content: string | JSX.Element = node.text || '';
            const format = node.format || 0;

            if (format & 1) content = <strong key="bold" className="font-semibold">{content}</strong>;
            if (format & 2) content = <em key="italic">{content}</em>;
            if (format & 4) content = <u key="underline">{content}</u>;
            if (format & 8) content = <code key="code" className="bg-gray-100 rounded px-1 py-0.5 text-sm">{content}</code>;
            if (format & 16) content = <del key="strikethrough">{content}</del>;
            return content;
        }

        case 'paragraph':
            return (
                <p className="mb-6 text-[#4B5563] leading-7 text-base">
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </p>
            );

        case 'heading': {
            const level = node.tag || '2';
            const validHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
            type HeadingTag = typeof validHeadingTags[number];

            const HeadingTag = validHeadingTags.includes((`h${level}` as any))
                ? (`h${level}` as HeadingTag)
                : 'h2';

            const headingClasses: Record<HeadingTag, string> = {
                h1: 'text-3xl font-bold mb-4 text-[#111827] mt-8',
                h2: 'text-2xl font-bold mb-4 text-[#111827] mt-8',
                h3: 'text-xl font-bold mb-3 text-[#111827] mt-6',
                h4: 'text-lg font-bold mb-3 text-[#111827] mt-6',
                h5: 'text-base font-bold mb-2 text-[#111827] mt-4',
                h6: 'text-sm font-bold mb-2 text-[#111827] mt-4',
            };

            const id = node.children
                ?.map(child => child.text)
                .join('')
                ?.toLowerCase()
                .replace(/\s+/g, '-');

            return (
                <HeadingTag id={id} className={headingClasses[HeadingTag]}>
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </HeadingTag>
            );
        }

        case 'link': {
            const rawUrl = node.fields?.url?.url || node.url || '#';
            const url = resolveUrl(rawUrl);
            const target = node.fields?.target || node.target;
            const rel = node.fields?.rel || node.rel;
            const isExternal = url.startsWith('http');

            return (
                <a
                    href={url}
                    className="text-primary no-underline hover:opacity-80 transition-opacity"
                    target={target || (isExternal ? "_blank" : undefined)}
                    rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
                >
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </a>
            );
        }

        case 'list':
            const ListTag = node.listType === 'number' ? 'ol' : 'ul';
            const listClass = node.listType === 'number' ? 'list-decimal' : 'list-disc';
            return (
                <ListTag className={`mb-6 pl-6 ${listClass} text-[#4B5563] space-y-2`}>
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </ListTag>
            );

        case 'listitem':
            return (
                <li className="leading-7">
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </li>
            );

        case 'quote':
            return (
                <blockquote className="border-l-4 border-[#E5E7EB] pl-4 my-6 text-[#4B5563] italic">
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </blockquote>
            );

        case 'upload':
        case 'image': {
            let src = '';
            let alt = '';

            if (node.value) {
                src = node.value.url;
                alt = node.value.alt || node.value.filename || '';
            }
            else if (node.fields?.image) {
                src = node.fields.image.url;
                alt = node.fields.image.alt || node.fields.image.filename || '';
            }
            else if (node.fields?.url) {
                src = node.fields.url.url;
            }
            else if (node.src) {
                src = node.src;
                alt = node.altText || '';
            }

            if (!src) return null;

            return (
                <figure className="my-8">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw"
                        />
                    </div>
                    {alt && (
                        <figcaption className="mt-3 text-center text-sm text-[#6B7280]">
                            {alt}
                        </figcaption>
                    )}
                </figure>
            );
        }

        default:
            if (node.children?.length) {
                return <>{node.children.map((child, i) => (
                    <Fragment key={i}>{renderNode(child)}</Fragment>
                ))}</>;
            }
            return null;
    }
};

const TableOfContents = ({ items }: { items: TableOfContentsItem[] }) => {
    if (items.length === 0) return null;

    return (
        <div className="w-full md:w-64 md:shrink-0">
            <div className="sticky top-8 rounded-lg bg-white">
                <h3 className="font-medium mb-4">On this page</h3>
                <nav className="flex flex-col space-y-2">
                    {items.map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.id}`}
                            className={`text-sm text-neutral hover:text-primary transition-colors ${item.level > 2 ? 'ml-4' : ''
                                }`}
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export const LexicalRenderer = ({ content }: { content: LexicalContent }) => {
    if (!content?.root?.children) {
        return null;
    }

    const tableOfContents = extractTableOfContents(content.root.children);

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <TableOfContents items={tableOfContents} />
            <div className="flex-1 prose prose-lg max-w-none">
                {content.root.children.map((node, i) => (
                    <Fragment key={i}>{renderNode(node)}</Fragment>
                ))}
            </div>
        </div>
    );
}; 