import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getEventDateLabel, getPublicSiteUrl } from "@/lib/event-display";
import { cn } from "@/lib/utils";
import { UpcomingEvent } from "@/types";

async function getUpcomingEvent(id: string) {
  try {
    const response = await fetch(
      `${getPublicSiteUrl()}/api/upcoming-events/${id}`,
      {
        next: { revalidate: 0 },
      },
    );

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

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ transparent?: string }>;
}

export const metadata = {
  title: "Upcoming Event | Code Space",
  description: "View details about this upcoming Code Space event.",
};

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const event = await getUpcomingEvent(resolvedParams.id);
  const transparent = resolvedSearchParams.transparent === "true";

  if (!event) {
    notFound();
  }

  return (
    <main
      className={cn(
        "min-h-screen w-full px-6 py-10",
        transparent ? "bg-transparent" : "bg-white",
      )}
    >
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
        <div className="py-5 flex flex-col space-y-4">
          <h2 className="text-2xl font-normal">{event.eventTitle}</h2>
          <p className="lg:text-lg text-gray-700 font-light">
            {event.description}
          </p>
          <p className="text-lg">
            Date{" "}
            <span className="text-gray-600 ml-2">
              {getEventDateLabel(event.date, event.dateTBA)}
            </span>
          </p>
          <p className="text-lg">
            Location{" "}
            <span className="text-gray-600 ml-2">{event.location}</span>
          </p>
          {event.stats && (
            <div className="w-full max-w-xs flex flex-row items-center divide-x">
              {event.stats.map((stat, i) => (
                <div
                  key={i}
                  className={cn("flex-grow", {
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
            <a href={event.eventLink} target="_blank" rel="noopener noreferrer">
              {event.callToAction || "Register Now"}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
