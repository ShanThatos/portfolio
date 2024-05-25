import { ImageZoom } from "./ImageZoom"
import MediaSlideVideo from "./MediaSlideVideo"

const MediaSlide = function MediaSlide(
  {
    project,
    media,
    onIframeLoad,
  }: { project: string; media: string | { src: string; caption: string }, onIframeLoad?: (el: any) => void },
) {
  let caption = undefined
  if (typeof media === "object") {
    caption = media.caption
    media = media.src
  }

  return (
    <div className="w-full h-full relative">
      {caption && (
        <div className="absolute left-0 right-0 bottom-10 text-center z-10">
          <div className="mx-auto w-[80%]">
            <label
              className="
                py-1 px-8 rounded-full 
                bg-black 
                opacity-90 hover:opacity-10 transition-opacity
                box-decoration-clone
                text-sm md:text-base
                "
            >
              {caption}
            </label>
          </div>
        </div>
      )}
      {media.startsWith("video:") ? (
        <MediaSlideVideo videoId={media.slice(6)} onIframeLoad={onIframeLoad}/>
      ) : (
        <ImageZoom
          src={`/projects/${project}/${media}`}
          className="h-full object-contain mx-auto rounded-lg overflow-hidden"
        />
      )}
    </div>
  )
}

export default MediaSlide
