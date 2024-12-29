import { usePostsbyUser } from "@/services"
import { Loader2 } from "lucide-react"

import PostCard from "./PostCard"

interface PostsProps {
  userId: string | number
}

export const PostList = ({ userId }: PostsProps) => {
  const {
    isLoading: isLoadingPosts,
    data: posts,
    error: errorPosts,
  } = usePostsbyUser(userId)

  if (isLoadingPosts)
    return (
      <div className="flex justify-center mt-8">
        <Loader2 className="animate-spin w-8 h-8 text-[#0028f3]" />
      </div>
    )

  if (errorPosts)
    return <div className="text-red-500 mt-8">Error: {errorPosts}</div>

  return (
    <div className="mt-8 space-y-3 max-w-2xl mx-auto">
      {posts?.map(({ id, title, body }) => (
        <PostCard key={id} title={title} body={body} />
      ))}
    </div>
  )
}
