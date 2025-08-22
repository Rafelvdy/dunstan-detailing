import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Copies the provided text to the user's clipboard with broad device/browser support.
 * Returns true if the copy succeeds, false otherwise.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Fall through to legacy method
  }

  try {
    const textarea = document.createElement("textarea")
    textarea.value = text
    // Avoid scrolling to bottom on iOS
    textarea.style.position = "fixed"
    textarea.style.top = "0"
    textarea.style.left = "0"
    textarea.style.opacity = "0"
    textarea.setAttribute("readonly", "")
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    const successful = document.execCommand("copy")
    document.body.removeChild(textarea)
    return successful
  } catch {
    return false
  }
}