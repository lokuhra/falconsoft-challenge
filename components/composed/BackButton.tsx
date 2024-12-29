"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui"

interface BackButtonProps {
  path: string
}

export const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      onClick={() => router.push(path)}
      data-testid="back-button"
    >
      <ArrowLeft className="w-4 h-4" />
    </Button>
  )
}

BackButton.defaultProps = {
  path: "/",
}
