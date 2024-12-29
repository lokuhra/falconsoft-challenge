import { Building2 } from "lucide-react"

import { Badge } from "@/components/ui"

interface CompanyInfoProps {
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const CompanyInfo = ({ company }: CompanyInfoProps) => (
  <div className="space-y-2">
    <h3 className="font-semibold flex items-center gap-2">
      <Building2 className="h-4 w-4" />
      Company
    </h3>
    <div className="pl-6 space-y-2">
      <p className="font-medium">{company.name}</p>
      <Badge variant="secondary">{company.catchPhrase}</Badge>
      <p className="text-sm text-muted-foreground">{company.bs}</p>
    </div>
  </div>
)

export default CompanyInfo
