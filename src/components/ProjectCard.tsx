import parse from "html-react-parser"
import { useCallback, useMemo, useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { A11y, Navigation, Pagination } from "swiper/modules"
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"
import PROJECTS from "../assets/projects.json"
import { ImageZoom } from "./ImageZoom"
import TechIcon from "./TechIcon"
import Swiper from "swiper"
import ExternalLinkButton from "./ExternalLinkButton"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function ProjectCard({ project }: { project: string }) {
  const videoEmbeds = useRef(new Map<number, HTMLIFrameElement>())

  const data = useMemo(() => PROJECTS.find((p) => p.id === project), [project])

  if (!data) throw new Error(`Project ${project} not found`)
  if (data?.hidden) return <></>

  const toDateDisplay = (date: string) => {
    if (date === "present") return "Present"
    const d = new Date(date)
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`
  }

  const displayDate = useMemo(() => {
    if (data.start === undefined) return ""
    const startDate = toDateDisplay(data.start)
    const endDate = toDateDisplay(data.end ?? "present")
    if (startDate === endDate) return startDate
    return `${startDate} - ${endDate}`
  }, [data.start, data.end])

  const onTransition = useCallback(
    (swiper: Swiper) => {
      if (videoEmbeds.current.has(swiper.previousIndex)) {
        videoEmbeds.current
          .get(swiper.previousIndex)
          ?.contentWindow?.postMessage(
            "{\"event\":\"command\",\"func\":\"stopVideo\",\"args\":\"\"}",
            "*"
          )
      }
    },
    [project]
  )

  return (
    <div className="my-20" key={project}>
      <div className="px-5">
        <div className="flex flex-row flex-wrap justify-between mb-1">
          <h2 className="mb-0 dark:text-secondary">{data.name}</h2>
          <h2 className="mb-0 dark:text-secondary">{displayDate}</h2>
        </div>
        {data.subtext && (
          <h5 className="opacity-60 mb-3">{parse(data.subtext)}</h5>
        )}
        {data.tech && (
          <div className="flex flex-row justify-start items-center flex-wrap mb-3 px-2 gap-3">
            {data.tech.map((t) => (
              <TechIcon key={t} name={t} />
            ))}
          </div>
        )}
      </div>
      {data.media && (
        <div className="w-full aspect-video bg-white rounded-lg p-3 mb-3">
          <SwiperComponent
            className="w-full h-full"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onRealIndexChange={onTransition}
          >
            {data.media.map((media, index) => {
              if (media.startsWith("video:")) {
                const embed = media.slice(6)
                return (
                  <SwiperSlide key={`video-${embed}-${index}`}>
                    <div className="w-full h-full p-10 flex">
                      <iframe
                        ref={(el) => {
                          if (el) videoEmbeds.current.set(index, el)
                        }}
                        className="grow"
                        src={embed}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </SwiperSlide>
                )
              } else {
                const imgUrl = `/projects/${data.id}/${media}`
                return (
                  <SwiperSlide key={`${imgUrl}-${index}`}>
                    <ImageZoom
                      src={imgUrl}
                      className="h-full object-contain mx-auto rounded-lg overflow-hidden"
                    />
                  </SwiperSlide>
                )
              }
            })}
          </SwiperComponent>
        </div>
      )}
      {data.links && (
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 px-7">
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
