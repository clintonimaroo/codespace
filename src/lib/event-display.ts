const defaultSiteUrl = "https://www.codespaces.org";

export function getEventDateLabel(date?: null | string, dateTBA?: boolean) {
  if (dateTBA || !date) {
    return "TBA";
  }

  return formatDateWithOrdinal(date);
}

export function formatDateWithOrdinal(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  const daySuffix = (dayNumber: number) => {
    if (dayNumber > 3 && dayNumber < 21) {
      return "th";
    }

    switch (dayNumber % 10) {
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
}

export function getPublicSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.BASE_URL ||
    process.env.APP_URL ||
    defaultSiteUrl
  ).replace(/\/$/, "");
}

function buildEventEmbedSrc(
  collection: "past-events" | "upcoming-events",
  id: number | string,
  options?: { transparent?: boolean },
) {
  const transparent = options?.transparent ? "?transparent=true" : "";

  return `${getPublicSiteUrl()}/${collection}/${id}/embed${transparent}`;
}

function buildEventEmbedCode(
  collection: "past-events" | "upcoming-events",
  id: number | string,
  options?: { transparent?: boolean },
) {
  return `<iframe src="${buildEventEmbedSrc(collection, id, options)}" width="100%" height="600" frameborder="0" allowtransparency="true" style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></iframe>`;
}

export function buildUpcomingEventEmbedSrc(
  id: number | string,
  options?: { transparent?: boolean },
) {
  return buildEventEmbedSrc("upcoming-events", id, options);
}

export function buildUpcomingEventEmbedCode(
  id: number | string,
  options?: { transparent?: boolean },
) {
  return buildEventEmbedCode("upcoming-events", id, options);
}

export function buildPastEventEmbedSrc(
  id: number | string,
  options?: { transparent?: boolean },
) {
  return buildEventEmbedSrc("past-events", id, options);
}

export function buildPastEventEmbedCode(
  id: number | string,
  options?: { transparent?: boolean },
) {
  return buildEventEmbedCode("past-events", id, options);
}
