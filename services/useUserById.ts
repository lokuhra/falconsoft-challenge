import { useEffect, useState } from "react"

import { UserTypes } from "@/types/UserTypes"
import axios from "@/lib/api"

export const useUserById = (userId: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<UserTypes | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const getUserById = async () => {
    try {
      const response = await axios.get(`/users/${userId}`)

      if (response.status !== 200) {
        throw new Error(`Network error: ${response.status}`)
      }

      const user = response.data
      setData(user)
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
