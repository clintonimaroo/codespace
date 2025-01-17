import { User } from "@/payload-types";
import { clsx, type ClassValue } from "clsx";
import { ClientUser } from "payload";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIsCodespaceUser(user: User | ClientUser | null): boolean {
  if (user?.email) {
    return user.email.endsWith("@codespaces.org");
  }

  return false;
}

export const formatDateWithComma = (dateString: string) => {
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

export const fetcher = <TData>(
  ...args: Parameters<typeof fetch>
): Promise<TData> => {
  return fetch(...args).then((res) => res.json());
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");
};
