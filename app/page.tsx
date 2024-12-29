"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDebounce } from "@/hooks"
import { useUsers } from "@/services/usersList"
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { Loader2 } from "lucide-react"

import { fuzzyFilter } from "@/lib/utils"
import { SearchInput } from "@/components/composed/SearchInput"
import { columns } from "@/components/features/User"
import { UserTable } from "@/components/features/User/UserTable"

export default function DataTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState<string>("")
  const router = useRouter()
  const { isLoading, data, error } = useUsers()

  const debouncedGlobalFilter = useDebounce(globalFilter, 300)

  const table = useReactTable({
    data: data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter: debouncedGlobalFilter,
    },
    globalFilterFn: fuzzyFilter,
  })

  const onCLickRow = (id: number) => {
    router.push(`/user/${id}`)
  }

  if (isLoading)
    return (
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <Loader2 className="animate-spin w-24 h-24 text-[#0028f3] " />
      </div>
    )

  if (error)
    return (
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-red-500">{`Comuniquese con su administrador: "${error}".`}</div>
      </div>
    )
  return (
    <div className="container">
      <div className="flex items-center py-4">
        <SearchInput
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(String(e.target.value))}
        />
      </div>
      <div className="rounded-md border">
        <UserTable table={table} onRowClick={onCLickRow} />
      </div>
    </div>
  )
}
