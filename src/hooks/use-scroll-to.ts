import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export default function useScrollTo() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const id = searchParams.get("scrollTo")
    if (!id) return

    searchParams.delete("scrollTo")
    setSearchParams(searchParams, { replace: true })

    const element = document.getElementById(id)
    if (element) {
      setTimeout(() => {
        const position = element.getBoundingClientRect()
        const scrollingElement = document.scrollingElement
        if (scrollingElement) {
          scrollingElement.scrollTo({ top: position.top + scrollingElement.scrollTop - 80, behavior: "smooth" })
        }
      }, 100)
    }
  }, [searchParams.get("scrollTo")])
}
