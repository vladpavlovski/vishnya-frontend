import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function limitString(text: string, limit: number) {
  if (text.length <= limit) {
    return text; // Return the original string if it's within the limit
  } else {
    return text.slice(0, limit) + '...'; // Return the truncated string with "..." appended
  }
}
