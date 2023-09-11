import { useMemo } from "react"
import PROJECTS from "../assets/projects.json"
import { ImageZoom } from "./ImageZoom"
import TechIcon from "./TechIcon"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
  const data = useMemo(() => PROJECTS.find((p) => p.id === project), [project])

  if (!data) throw new Error(`Project ${project} not found`)

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

  return (
    <div className="mt-14" key={project}>
      <div className="px-5">
        <div className="flex flex-row flex-wrap justify-between mb-1">
          <h2 className="mb-0 dark:text-secondary">{data.name}</h2>
          <h2 className="mb-0 dark:text-secondary">{displayDate}</h2>
        </div>
        {data.subtext && <h5 className="opacity-60 mb-3">{data.subtext}</h5>}
        {data.tech && (
          <div className="flex flex-row justify-start-items-center flex-wrap mb-3 px-2 gap-3">
            {data.tech.map((t) => (
              <TechIcon key={t} name={t} />
            ))}
          </div>
        )}
      </div>
      {data.images && (
        <div className="w-full aspect-video bg-white rounded-lg p-3 mb-3">
          <Swiper
            className="w-full h-full"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {data.images.map((img, index) => {
              const imgUrl = `/projects/${data.id}/${img}`
              return (
                <SwiperSlide key={`${imgUrl}-${index}`}>
                  <ImageZoom
                    src={imgUrl}
                    className="h-full object-contain mx-auto rounded-lg overflow-hidden"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )}
      {data.repo && (
        <div className="flex flex-row justify-start items-center px-5">
          <a
            className="border border-[#286ab6] p-2 rounded hover:underline hover:shadow-md hover:shadow-[#286ab6] hover:opacity-80 transition-shadow"
            href={data.repo}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row items-center">
              <img src="/icons/github.svg" className="w-8 h-8" />
              <span className="ml-2 text-[#88c0ff]">
                {data.repo_name ?? "GitHub Repo"}
              </span>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
