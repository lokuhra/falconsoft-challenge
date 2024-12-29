import { useEffect, useState } from "react"

import { UserTypes } from "@/types/UserTypes"
import axios from "@/lib/api"

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<UserTypes[] | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const getUsers = async () => {
    try {
      const response = await axios.get("/users")

      if (response.status !== 200) {
        throw new Error(`Network error: ${response.status}`)
      }

      const users = response.data
      setData(users)
    } catch (error) {
      setError((error as Error).message || "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { isLoading, data, error }
}
