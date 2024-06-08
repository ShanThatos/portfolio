import { useCallback, useMemo, useRef } from "react"
import Swiper from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { A11y, Navigation, Pagination } from "swiper/modules"
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"
import PROJECTS from "../../assets/portfolio/projects.json"
import ExternalLinkButton from "./ExternalLinkButton"
import MediaSlide from "./MediaSlide"
import ProjectDescription from "./ProjectDescription"
import TechIcon from "./TechIcon"
import { toDateDisplay } from "../../utils"


function ProjectCard({ project }: { project: string }) {
  const videoEmbeds = useRef(new Map<number, HTMLElement>())

  const data = useMemo(() => PROJECTS.find((p) => p.id === project), [project])

  if (!data) throw new Error(`Project ${project} not found`)
  if (data?.hidden) return <></>

  const displayDate = useMemo(() => {
    if (data.start === undefined) return ""
    const startDate = toDateDisplay(data.start)
    const endDate = toDateDisplay(data.end ?? "present")
    if (startDate === endDate) return startDate
    return `${startDate} - ${endDate}`
  }, [data.start, data.end])

  const onTransition = useCallback(
    (swiper: Swiper) => {
      const video = videoEmbeds.current.get(swiper.previousIndex)
      if (video instanceof HTMLIFrameElement) {
        video.contentWindow?.postMessage(
          "{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}",
          "*"
        )
      }
    },
    [project]
  )

  return (
    <div id={project} className="scroll-m-10" key={project}>
      <div className="px-5">
        <div className="flex flex-row flex-wrap justify-between mb-1">
          <h2 className="mb-0 text-secondary">{data.name}</h2>
          <h2 className="mb-0 text-secondary">{displayDate}</h2>
        </div>
        {data.subtext && <ProjectDescription text={data.subtext} />}
        {data.tech && (
          <div className="flex flex-row justify-start items-center flex-wrap mb-3 md:px-2 gap-1 md:gap-3">
            {data.tech.map((t) => (
              <TechIcon key={t} name={t} />
            ))}
          </div>
        )}
      </div>
      {data.media && (
        <div className="w-full aspect-video bg-black rounded-lg p-3 mb-3">
          <SwiperComponent
            className="w-full h-full"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onRealIndexChange={onTransition}
          >
            {data.media.map((media, index) => (
              <SwiperSlide key={`media-${media}-${index}`}>
                <MediaSlide
                  project={project}
                  media={media}
                  onIframeLoad={(el) => videoEmbeds.current.set(index, el)}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      )}
      {data.links && (
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 md:gap-5 px-2 md:px-7">
          {data.links.map((link, index) => (
            <ExternalLinkButton
              key={`link-${link.url}-${index}`}
              type={link.type}
              href={link.url}
              text={link.text}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
