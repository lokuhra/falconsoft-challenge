import { UserTypes } from "@/types/UserTypes"
import { Card, CardContent, CardHeader } from "@/components/ui"

import AddressInfo from "./AddressInfo"
import CompanyInfo from "./CompanyInfo"
import ContactInfo from "./ContactInfo"
import UserAvatar from "./UserAvatar"
import UserInfo from "./UserInfo"

export const UserCard = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}: UserTypes) => {
  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-2">
      <CardHeader className="flex flex-row items-center gap-4 bg-muted/10">
        <UserAvatar name={name} />
        <UserInfo name={name} username={username} />
      </CardHeader>
      <CardContent className="space-y-4">
        <ContactInfo email={email} phone={phone} website={website} />
        <AddressInfo address={address} />
        <CompanyInfo company={company} />
      </CardContent>
    </Card>
  )
}
