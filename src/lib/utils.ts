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
