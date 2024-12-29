interface ColumnTypes<T> {
  id: string
  header: string
  accessor: keyof T
  isPlaceholder?: boolean
  column?: {
    columnDef: {
      header: string
      cell: (context: any) => JSX.Element
    }
  }
}

interface TableTypes<T> {
  data: T[]
  columns: ColumnTypes<T>[]
  getRowModel: () => {
    rows: {
      id: string
      original: T
      getIsSelected: () => boolean
      getVisibleCells: () => {
        id: string
        column: {
          columnDef: {
            cell: (context: any) => JSX.Element
          }
        }
        getContext: () => any
      }[]
    }[]
  }
  getHeaderGroups: () => {
    id: string
    headers: ColumnTypes<T>[]
  }[]
  getAllColumns: () => ColumnTypes<T>[]
}

export type { ColumnTypes, TableTypes }
