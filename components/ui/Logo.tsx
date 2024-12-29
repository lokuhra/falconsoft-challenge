"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export const Logo = (): JSX.Element => {
  const { theme, resolvedTheme } = useTheme()
  const [logoSrc, setLogoSrc] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentTheme = resolvedTheme || theme
    setLogoSrc(currentTheme === "dark" ? "/logo-white.png" : "/logo-blue.png")
    setIsLoading(false)
  }, [theme, resolvedTheme])

  if (isLoading) {
    return <div className="w-[100px] h-[40px]" />
  }

  return <img src={logoSrc} alt="Logo" className="logo" width={100} />
}
