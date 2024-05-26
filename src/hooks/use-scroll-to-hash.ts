import { useEffect } from "react"

export default function useScrollToHash() {
  useEffect(() => {
    const hashElement = document.getElementById(window.location.hash.split("#")[2] ?? "")
    const paramElement = document.getElementById(new URLSearchParams(window.location.search).get("scrollTo") ?? "")

    if (hashElement) {
      hashElement.scrollIntoView({ block: "start", behavior: "smooth" })
    } else if (paramElement) {
      paramElement.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }, [])
}
