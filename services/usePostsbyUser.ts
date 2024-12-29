import { useEffect, useState } from "react"

import { PostTypes } from "@/types/UserTypes"
import axios from "@/lib/api"

export const usePostsbyUser = (userId: string | number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<PostTypes[] | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const getUserById = async () => {
    try {
      const response = await axios.get(`/users/${userId}/posts`)

      if (response.status !== 200) {
        throw new Error(`Network error: ${response.status}`)
      }

      const posts = response.data
      setData(posts)
    } catch (error) {
      setError((error as Error).message || "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (userId) {
      getUserById()
    }
  }, [userId])

  return { isLoading, data, error }
}
