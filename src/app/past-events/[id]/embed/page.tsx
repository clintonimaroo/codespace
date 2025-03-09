import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDateWithComma } from "@/lib/utils";
import { PastEvent } from "@/types";

async function getPastEvent(id: string) {
    const APP_URL = process.env.APP_URL || "https://codespaces.org";

    try {
        const response = await fetch(`${APP_URL}/api/past-events/${id}`, {
            next: { revalidate: 0 },
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data as PastEvent;
    } catch (error) {
        console.error("Error fetching past event:", error);
        return null;
    }
}

type Props = {
    params: Promise<{ id: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const event = await getPastEvent(resolvedParams.id);

    if (!event) {
        notFound();
    }

    return (
        <div className="w-full bg-white">
            <div className="relative w-full aspect-[2/1] mb-6">
                <Image
                    src={event.coverImage.url}
                    alt={event.eventTitle}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="p-6">
                <h1 className="text-3xl font-semibold mb-4">{event.eventTitle}</h1>
                <p className="text-lg text-gray-700 mb-6">
                    {event.description}
                </p>
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">{formatDateWithComma(event.date)}</span>
                    </div>
                </div>
                <a
                    href={event.recapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-white h-10 px-8 py-2"
                >
                    {event.callToAction || "Watch the replay!"}
                </a>
            </div>
        </div>
    );
} 