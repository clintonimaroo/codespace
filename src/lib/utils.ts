import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
