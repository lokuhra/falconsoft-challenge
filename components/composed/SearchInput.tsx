import { Search } from "lucide-react"

import { Input } from "@/components/ui/Input"

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <Input
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="max-w-sm"
      icon={<Search className="h-4 w-4 text-gray-500" />}
    />
  )
}
