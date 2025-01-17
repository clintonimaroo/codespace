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
