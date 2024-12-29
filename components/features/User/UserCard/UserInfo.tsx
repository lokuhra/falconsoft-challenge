import { CardTitle } from "@/components/ui"

interface UserInfoProps {
  name: string
  username: string
}

const UserInfo = ({ name, username }: UserInfoProps) => (
  <div className="space-y-1">
    <CardTitle className="text-2xl">{name}</CardTitle>
    <div className="text-sm text-muted-foreground">@{username}</div>
  </div>
)

export default UserInfo
