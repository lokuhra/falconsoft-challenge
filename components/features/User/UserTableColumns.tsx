import { ColumnDef } from "@tanstack/react-table"

import { UserTypes } from "@/types/UserTypes"
import { SortButton } from "@/components/composed/SortButton"

export const columns: ColumnDef<UserTypes>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <SortButton column={column} label="Name" />,
    cell: ({ row }) => <div>{row.getValue("name")} </div>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => <SortButton column={column} label="Username" />,
    cell: ({ row }) => <div>{row.getValue("username")} </div>,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <SortButton column={column} label="Phone" />,
    cell: ({ row }) => <div>{row.getValue("phone")} </div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortButton column={column} label="Email" />,
    cell: ({ row }) => (
      <div className="lowercase"> {row.getValue("email")} </div>
    ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => <SortButton column={column} label="City" />,
    cell: ({ row }) => {
      const address = row.getValue("address") as { city: string }
      return <div>{address.city} </div>
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => <SortButton column={column} label="Company" />,
    cell: ({ row }) => {
      const company = row.getValue("company") as { name: string }
      return <div>{company.name} </div>
    },
  },
]
