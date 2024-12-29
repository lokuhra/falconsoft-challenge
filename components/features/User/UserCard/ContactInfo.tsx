import { Globe, Mail, Phone } from "lucide-react"

interface ContactInfoProps {
  email: string
  phone: string
  website: string
}

const ContactInfo = ({ email, phone, website }: ContactInfoProps) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-muted-foreground" />
      <span>{email}</span>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4 text-muted-foreground" />
      <span>{phone}</span>
    </div>
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <a href={`https://${website}`} className="text-blue-500 hover:underline">
        {website}
      </a>
    </div>
  </div>
)

export default ContactInfo
