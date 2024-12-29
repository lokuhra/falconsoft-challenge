import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui"

interface PostCardProps {
  title: string
  body: string
}

const PostCard = ({ title, body }: PostCardProps) => {
  return (
    <Card className="hover:shadow-lg border-muted/40 transform hover:-translate-y-1 hover:bg-accent cursor-pointer transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{body}</p>
      </CardContent>
    </Card>
  )
}

export default PostCard
