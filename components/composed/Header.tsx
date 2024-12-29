"use client"

import { Logo, ThemeToggle } from "@/components/ui"

export const Header = (): JSX.Element => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container w-full lg:w-[1280px] flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  )
}
