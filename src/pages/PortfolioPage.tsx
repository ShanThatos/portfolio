import { useCallback, useState } from "react"
import MainBanner from "../components/portfolio/MainBanner"

import FilterIcon from "../components/portfolio/FilterIcon"
import Footer from "../components/portfolio/Footer"
import ProjectsList from "../components/portfolio/ProjectsList"
import { SortKey, SortOrder } from "../types/projecttypes"

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import "../assets/portfolio/index.css"

const PROJECT_TAGS = [
  ["python", "typescript", "javascript", "java", "csharp"],
  ["sql"],
  ["fullstack", "backend", "frontend"],
  ["gamedev", "arvr"],
].flat()

const SORT_KEY_NAMES = new Map<SortKey, string>([
  ["name", "Name"],
  ["end", "End Date"],
])

function PortfolioPage() {
  const [sortKey, setSortKey] = useState<SortKey>("end")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const [filters, setFilters] = useState<string[]>([])

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
  }, [])


  return (
    <div className="scroll-m-[100px]">
      <MainBanner />
      <div className="max-w-5xl p-4 md:px-10 mx-auto">
        <h2 id="myprojects" className="mt-5 mb-5 text-center text-secondary-200 scroll-m-[80px]">
          My Projects
        </h2>
        <div className="flex flex-row mx-5 mb-2">
          <div className="grow">
            <div className="my-2">
              <label className="text-xl mr-3">
                {filters.length} {filters.length === 1 ? "filter" : "filters"}
              </label>
              {filters.length > 0 && (
                <button
                  className="text-xl text-secondary-400 hover:cursor-pointer"
                  onClick={() => setFilters([])}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="border-2 border-[#3e414e] bg-[#27344f] rounded overflow-hidden">
              <button
                className="px-3 py-1 hover:opacity-60 inline-flex"
                onClick={toggleSortOrder}
              >
                <span className="leading-none mr-1">Sort</span>
                {sortOrder === "asc" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <select
                className="px-2 py-1 bg-transparent border-l-2 border-l-[#4a4a4a] hover:opacity-60 hover:cursor-pointer"
                value={sortKey}
                onChange={(e) => {
                  setSortKey(e.currentTarget.value as SortKey)
                }}
              >
                {[...SORT_KEY_NAMES.entries()].map(([key, name]) => (
                  <option
                    key={key}
                    value={key}
                    style={{ backgroundColor: "#27344f", color: "white" }}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 md:gap-4 mx-5 mb-14">
          {PROJECT_TAGS.map((tag) => {
            const selected = filters.includes(tag)
            return (
              <FilterIcon
                key={`${tag}-${selected}`}
                name={tag}
                selected={selected}
                onClick={() => {
                  setFilters((prev) =>
                    selected
                      ? prev.filter((t) => t !== tag)
                      : [...new Set([...prev, tag])]
                  )
                }}
              />
            )
          })}
        </div>
        <ProjectsList {...{ sortKey, sortOrder, filters }} />
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage
