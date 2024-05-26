import mediumZoom, { Zoom, ZoomOptions } from "medium-zoom"
import { ComponentProps, useEffect, useRef } from "react"

type ImageZoomProps = ComponentProps<"img"> & {
  options?: ZoomOptions
}

export function ImageZoom({ options, ...props }: ImageZoomProps) {
  const zoomRef = useRef<Zoom | null>(null)

  useEffect(() => {
    if (zoomRef.current === null) return
    let options = zoomRef.current.getOptions()
    if (options === undefined) options = {}
    options.background = "#091725"
    zoomRef.current.update(options)
  }, [])

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom(options)
        .on("open", () => {
          document.documentElement.style.setProperty(
            "--swiper-displays",
            "none"
          )
          document.documentElement.classList.add("swiper-no-swiping")
        })
        .on("close", () => {
          document.documentElement.style.setProperty(
            "--swiper-displays",
            "block"
          )
          document.documentElement.classList.remove("swiper-no-swiping")
        })
    }
    return zoomRef.current
  }

  function attachZoom(image: HTMLImageElement | null) {
    const zoom = getZoom()
    if (image) zoom.attach(image)
    else zoom.detach()
  }

  return <img {...props} ref={attachZoom} />
}
