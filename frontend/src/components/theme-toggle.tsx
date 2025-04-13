"use client"

import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.theme
    setIsDark(
        theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [])

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked)
    localStorage.theme = checked ? "dark" : "light"
    document.documentElement.classList.toggle("dark", checked)
  }

  return (
      <div className="flex items-center gap-2">
        <Sun />
        <Switch checked={isDark} onCheckedChange={toggleTheme} />
        <Moon />
      </div>
  )
}