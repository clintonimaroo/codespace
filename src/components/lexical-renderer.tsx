import { Fragment } from 'react';
import Image from 'next/image';
import { SyntaxHighlighter } from './syntax-highlighter';
import Link from 'next/link';

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
    // Additional fields for video embeds
    videoUrl?: string;
    videoType?: 'youtube' | 'vimeo';
    // Additional fields for Payload CMS Lexical format
    fields?: {
        url?: {
            url: string;
            linkType?: string;
        };
        rel?: string;
        target?: string;
        image?: MediaValue;
        video?: {
            url: string;
            type: 'youtube' | 'vimeo';
        };
    };
    relationTo?: string;
    value?: MediaValue;
    language?: string;
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

const ShareableTakeaway = ({ children }: { children: React.ReactNode }) => {
    const shareText = encodeURIComponent(children?.toString() || '');
    const shareUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');

    return (
        <div className="block md:hidden my-12 p-8 bg-[#F8FAFC] rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 9.16667L10 3.33334L4.16667 9.16667M10 4.16667V16.6667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#6B7280] text-sm font-semibold tracking-wide uppercase">Key Takeaway</span>
            </div>
            <div className="text-[#111827] text-xl font-medium leading-relaxed mb-6">
                {children}
            </div>
            <div className="flex flex-col gap-2.5">
                <a
                    href={`whatsapp://send?text=${shareText}%0A%0A${shareUrl}`}
                    className="flex items-center justify-center h-11 bg-[#25D366] text-white text-sm font-medium rounded-lg no-underline hover:opacity-90 transition-all"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Share on WhatsApp
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 bg-[#1DA1F2] text-white text-sm font-medium rounded-lg no-underline hover:opacity-90 transition-all"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Share on Twitter
                </a>
            </div>
        </div>
    );
};

const YouTubeEmbed = ({ url }: { url: string }) => {
    // Extract video ID from YouTube URL
    const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;

    return (
        <div className="relative w-full aspect-video my-8">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

const renderNode = (node: LexicalNode): JSX.Element | string | null => {
    switch (node.type) {
        case 'text': {
            let content: string | JSX.Element = node.text || '';
            const format = node.format || 0;

            if (format & 1) content = <strong key="bold" className="font-semibold">{content}</strong>;
            if (format & 2) content = <em key="italic">{content}</em>;
            if (format & 4) content = <u key="underline">{content}</u>;
            if (format & 8) content = <code key="code" className="bg-gray-100 rounded px-1.5 py-0.5 text-[16px] md:text-base">{content}</code>;
            if (format & 16) content = <del key="strikethrough">{content}</del>;
            return content;
        }

        case 'paragraph':
            const text = node.children?.map(child => child.text).join('') || '';
            if (text.startsWith('TAKEAWAY:')) {
                const takeawayContent = text.replace('TAKEAWAY:', '').trim();
                return (
                    <ShareableTakeaway>
                        {takeawayContent}
                    </ShareableTakeaway>
                );
            }
            return (
                <p className="mb-4 md:mb-6 text-[#4B5563] leading-relaxed text-[18px] md:text-base">
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
                h1: 'text-[28px] md:text-3xl font-bold mb-3 md:mb-4 text-[#111827] mt-6 md:mt-8',
                h2: 'text-[24px] md:text-2xl font-bold mb-3 md:mb-4 text-[#111827] mt-6 md:mt-8',
                h3: 'text-[20px] md:text-xl font-bold mb-2 md:mb-3 text-[#111827] mt-4 md:mt-6',
                h4: 'text-[18px] md:text-lg font-bold mb-2 md:mb-3 text-[#111827] mt-4 md:mt-6',
                h5: 'text-[16px] md:text-base font-bold mb-2 text-[#111827] mt-3 md:mt-4',
                h6: 'text-[16px] md:text-base font-bold mb-2 text-[#111827] mt-3 md:mt-4',
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
                <ListTag className={`mb-4 md:mb-6 pl-5 md:pl-6 ${listClass} text-[#4B5563] space-y-2 text-[18px] md:text-base`}>
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </ListTag>
            );

        case 'listitem':
            return (
                <li className="leading-relaxed">
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </li>
            );

        case 'quote':
            return (
                <blockquote className="border-l-4 border-[#E5E7EB] pl-4 md:pl-5 my-4 md:my-6 text-[#4B5563] italic text-[18px] md:text-base">
                    {node.children?.map((child, i) => (
                        <Fragment key={i}>{renderNode(child)}</Fragment>
                    ))}
                </blockquote>
            );

        case 'code':
            return (
                <div className="my-4">
                    <SyntaxHighlighter language={node.language || 'javascript'}>
                        {node.text || ''}
                    </SyntaxHighlighter>
                </div>
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

        case 'video':
            if (node.fields?.video?.type === 'youtube') {
                return <YouTubeEmbed url={node.fields.video.url} />;
            }
            return null;

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
        <div className="hidden md:block w-full md:w-64 md:shrink-0">
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