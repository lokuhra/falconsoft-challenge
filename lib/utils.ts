import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type RowType = {
  original: Record<string, any>
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fuzzyFilter = (
  row: RowType,
  columnId: string,
  filterValue: string
): boolean => {
  if (typeof filterValue !== "string") return false

  const searchValue = filterValue.toLowerCase().trim()
  const relevantFields = ["name", "username", "email", "company"]

  const getFieldValue = (field: string): string => {
    const value =
      field === "company" ? row.original?.[field]?.name : row.original?.[field]
    return value ? String(value).toLowerCase() : ""
  }

  const combinedValues = relevantFields
    .map(getFieldValue)
    .filter(Boolean)
    .join(" ")

  return combinedValues.includes(searchValue)
}
