import { ArrowUpDown } from "lucide-react"

import { Button } from "../ui"

export const SortButton = ({
  column,
  label,
}: {
  column: any
  label: string
}) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDown className="w-4 ml-1" />
    </Button>
  )
}
