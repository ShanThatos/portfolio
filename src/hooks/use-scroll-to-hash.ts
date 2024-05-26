import { useEffect } from "react"

export default function useScrollToHash() {
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const id = hash.split("#").pop()
      if (id) {
        const element = document.getElementById(id)
        if (element)
          element.scrollIntoView({ block: "start", behavior: "smooth" })
      }
    }
  }, [])
}
