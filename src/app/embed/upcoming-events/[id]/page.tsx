import { notFound } from "next/navigation";
import Image from "next/image";
import { UpcomingEvent } from "@/types";
import { Button } from "@/components/ui/button";
import classNames from "classnames";

// Format date function to match the one in events page
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    const daySuffix = (day: number) => {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return `${day}${daySuffix(day)} ${month}, ${year}`;
};

async function getUpcomingEvent(id: string) {
    const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

    try {
        const response = await fetch(`${APP_URL}/api/upcoming-events/${id}`, {
            next: { revalidate: 0 },
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data as UpcomingEvent;
    } catch (error) {
        console.error("Error fetching upcoming event:", error);
        return null;
    }
}

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const event = await getUpcomingEvent(resolvedParams.id);

    if (!event) {
        notFound();
    }

    return (
        <div className="w-full p-6 bg-white">
            <div className="w-full flex md:flex-row flex-col gap-10">
                <div className="w-full md:max-w-sm max-w-full lg:max-h-full mx-auto flex-shrink-0 shadow-[0_0_20px_0_rgba(34,34,34,0.05)] aspect-square bg-white p-3 md:max-h-[440px] object-cover">
                    <div className="w-full h-full relative">
                        <Image
                            src={event.coverImage.url}
                            alt={event.eventTitle}
                            fill
                            className="object-cover h-full w-auto"
                        />
                    </div>
                </div>
                <div className="py-5 flex flex-col space-y-2 justify-around">
                    <h2 className="text-2xl font-normal">{event.eventTitle}</h2>
                    <p className="text-lg text-gray-700 font-light">{event.description}</p>
                    <p className="text-lg">
                        Date{" "}
                        <span className="text-gray-600 ml-2">{formatDate(event.date)}</span>
                    </p>
                    <p className="text-lg">
                        Location <span className="text-gray-600 ml-2">{event.location}</span>
                    </p>
                    {event.stats && (
                        <div className="w-full max-w-xs flex flex-row items-center divide-x">
                            {event.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={classNames("flex-grow", {
                                        "flex flex-col items-center justify-center": i !== 0,
                                    })}
                                >
                                    <div>
                                        <h4 className="text-xl font-semibold">
                                            {stat.statValue}{" "}
                                            <span className="text-primary text-base">+</span>
                                        </h4>
                                        <p className="subtitle">{stat.statTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <Button asChild className="w-fit">
                        <a
                            href={event.eventLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.callToAction || "Register Now"}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
} 