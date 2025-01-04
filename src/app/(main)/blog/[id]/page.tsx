"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Doc } from "@/types";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Image from "next/image";
import Container from "@/components/container";

interface ContentNode {
    children?: {
        type: string;
        text?: string;
        children?: {
            type: string;
            text: string;
        }[];
        format?: string;
        direction?: string;
    }[];
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).replace(',', '');
};

const renderContent = (content: ContentNode) => {
    const tableOfContents: string[] = [];

    content.children?.forEach((block) => {
        if (block.type === 'heading') {
            const headingText = block.children?.map(child => child.text).join('');
            if (headingText) {
                tableOfContents.push(headingText);
            }
        }
    });

    return (
        <div className="flex gap-8">
            <div className="w-64 shrink-0">
                <div className="sticky top-8 border rounded-lg p-4 bg-white">
                    <h3 className="font-medium mb-4">Table of Content</h3>
                    {tableOfContents.map((heading, i) => (
                        <a
                            key={i}
                            href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-neutral hover:text-primary mb-2"
                        >
                            {heading}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex-1">
                {content.children?.map((block, i) => {
                    switch (block.type) {
                        case 'paragraph':
                            return <p key={i} className="mb-4 text-neutral">{block.children?.map(child => child.text).join('')}</p>;
                        case 'heading':
                            const headingText = block.children?.map(child => child.text).join('');
                            const id = headingText?.toLowerCase().replace(/\s+/g, '-');
                            return <h2 key={i} id={id} className="text-2xl font-medium my-6 text-black">{headingText}</h2>;
                        default:
                            return block.children?.map((child, j) => <p key={`${i}-${j}`} className="mb-4 text-neutral">{child.text}</p>);
                    }
                })}
            </div>
        </div>
    );
};

export default function BlogPage() {
    const params = useParams();
    const { data: blog, error } = useSWR<Doc>(`/api/blog/${params.id}`, fetcher);

    if (error) return <div>Failed to load</div>;
    if (!blog) return <div>Loading...</div>;

    return (
        <Container className="container space-y-2 py-20">
            <div className="max-w-7xl mx-auto py-8">
                <Link
                    href="/blog"
                    className="text-neutral text-[15px] flex items-center gap-2 w-fit relative z-10"
                >
                    <span>←</span>
                    <span className="text-[#667085]">Back</span>
                </Link>

                <div className="mt-8">
                    <h1 className="text-4xl font-medium text-black">{blog.title}</h1>
                    <div className="flex items-center gap-x-[5.5px] text-gray text-lg mt-2">
                        <p>{blog.author.name}</p>
                        <div className="h-[3px] w-[3px] rounded-full bg-secondary" />
                        <p>{formatDate(blog.createdAt)}</p>
                    </div>
                </div>

                <div className="mt-8 h-[400px] bg-[#f8f8f8] rounded-[22px] relative overflow-hidden">
                    {blog.featuredImage && (
                        <Image
                            src={blog.featuredImage.url}
                            alt={blog.featuredImage.alt || blog.title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                <div className="mt-8">
                    {renderContent(blog.content.root)}
                </div>
            </div>
        </Container>
    );
}