import { useEffect, useRef, useState } from "react"
import nightwind from "nightwind/helper"

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)
  const addedBeforeTransition = useRef(false)

  useEffect(() => {
    if (addedBeforeTransition.current) return
    addedBeforeTransition.current = true
    const origBeforeTransition = nightwind.beforeTransition
    nightwind.beforeTransition = () => {
      origBeforeTransition()
      setIsDarkMode(!window.document.documentElement.classList.contains("dark"))
    }
    setTimeout(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }, 1000)
  }, [])

  if (isDarkMode === null) return null
  return isDarkMode ? "dark" : "light"
}

export function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}
