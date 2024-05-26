import { FunctionComponent } from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"


interface MediaSlideVideoProps {
  videoId: string
  onIframeLoad?: (el: any) => void
}

const MediaSlideVideo: FunctionComponent<MediaSlideVideoProps> = ({ videoId, onIframeLoad }) => {
  return (
    <div className="h-full px-12 pt-4">
      <LiteYouTubeEmbed 
        id={videoId}
        title="YouTube Video Embed"
        // poster="sddefault"
        params="enablejsapi=1"
        iframeClass={`js-iframe-${videoId}`}
        onIframeAdded={() => {
          const el = document.querySelectorAll(`.js-iframe-${videoId}`)
          if (el.length && onIframeLoad) {
            onIframeLoad(el.item(0))
          }
        }}
      />
    </div>
  )
}

export default MediaSlideVideo