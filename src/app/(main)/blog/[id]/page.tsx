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

const SubscribeCard = () => {
    return (
        <div
            className="mt-12 rounded-[10px] p-12 text-center h-[300px] flex flex-col justify-center font-sora"
            style={{ backgroundImage: 'url(https://i.postimg.cc/htZ2Q45M/subscribe-bg.png)', backgroundSize: 'cover' }}
        >
            <h3 className="text-3xl font-bold text-white mb-4">Looking to Connect with Other Gen-Zs<br /> in Tech?</h3>

            <button className="bg-white text-primary px-6 py-3 rounded-full font-medium mt-4 hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto font-sora">
                Join the Community
                <span>↗</span>
            </button>
        </div>
    );
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
                <div className="sticky top-8  rounded-lg bg-white">
                    <h3 className="font-medium mb-4">On this page</h3>
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

            <div className="font-['Duplicate_Sans','DM_Sans',sans-serif]">
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

    console.log(blog);

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
                    <h1 className="text-4xl font-bold text-black">{blog.title}</h1>
                    <div className="flex items-center gap-x-[5.5px] text-gray text-lg mt-2">
                        <p>{blog.author?.name || 'Unknown Author'}</p>
                        <div className="h-[3px] w-[3px] rounded-full bg-secondary" />
                        <p>{formatDate(blog.createdAt)}</p>
                    </div>
                </div>

                <div className="mt-8 h-[550px] bg-[#f8f8f8] rounded-[22px] relative overflow-hidden">
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

                {/* Share article section */}
                <div className="flex gap-14 mt-12">
                    <div className="w-[232px]">
                        <h4 className="text-[#101828] mt-10 mb-4">Share article</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-primary hover:underline">Twitter ↗</a>
                            <a href="#" className="text-primary hover:underline">LinkedIn ↗</a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <SubscribeCard />
                    </div>
                </div>
            </div>
        </Container>
    );
}