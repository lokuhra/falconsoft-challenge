import { Avatar, AvatarFallback } from "@/components/ui"

interface UserAvatarProps {
  name: string
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
}

const UserAvatar = ({ name }: UserAvatarProps) => {
  return (
    <Avatar className="h-20 w-20">
      <AvatarFallback className="text-xl">{getInitials(name)}</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
