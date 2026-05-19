import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPublicSiteUrl } from "@/lib/event-display";
import { cn, formatDateWithComma } from "@/lib/utils";
import { PastEvent } from "@/types";

async function getPastEvent(id: string) {
  try {
    const response = await fetch(
      `${getPublicSiteUrl()}/api/past-events/${id}`,
      {
        next: { revalidate: 0 },
      },
    );

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

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ transparent?: string }>;
}

export const metadata = {
  title: "Past Event | Code Space",
  description: "View details about this past Code Space event.",
};

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const event = await getPastEvent(resolvedParams.id);
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
        <div className="w-full max-w-sm flex-shrink-0 shadow-[0_0_20px_0_rgba(34,34,34,0.05)] aspect-square bg-white p-3 rounded-sm">
          <div className="w-full h-full relative">
            <Image
              src={event.coverImage.url}
              alt={event.eventTitle}
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="py-5 flex flex-col space-y-2 justify-around">
          <h2 className="text-2xl font-normal">{event.eventTitle}</h2>
          <p className="text-xl text-gray-700 font-light">
            {event.description}
          </p>
          <p className="text-lg">
            Date{" "}
            <span className="text-gray-600 ml-2">
              {formatDateWithComma(event.date)}
            </span>
          </p>
          <Button asChild className="w-fit">
            <a href={event.recapLink} target="_blank" rel="noopener noreferrer">
              {event.callToAction || "Watch the replay!"}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
