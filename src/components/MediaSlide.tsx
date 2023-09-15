import { forwardRef } from "react"
import { ImageZoom } from "./ImageZoom"

const MediaSlide = forwardRef(function MediaSlide(
  {
    project,
    media,
  }: { project: string; media: string | { src: string; caption: string } },
  ref: any
) {
  let caption = undefined
  if (typeof media === "object") {
    caption = media.caption
    media = media.src
  }

  return (
    <div className="w-full h-full relative">
      {caption && (
        <div className="absolute left-0 bottom-10 right-0 z-20 text-center">
          <label
            className="
          py-1 px-8 rounded-full 
          bg-permablack 
          opacity-90 hover:opacity-10 transition-opacity"
          >
            {caption}
          </label>
        </div>
      )}
      {media.startsWith("video:") ? (
        <div className="h-full p-10 flex">
          <iframe
            ref={ref}
            className="grow"
            src={media.slice(6)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <ImageZoom
          src={`/projects/${project}/${media}`}
          className="h-full object-contain mx-auto rounded-lg overflow-hidden"
        />
      )}
    </div>
  )
})

export default MediaSlide
