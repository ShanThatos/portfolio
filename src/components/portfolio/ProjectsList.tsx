import { useMemo } from "react"
import PROJECTS from "../../assets/portfolio/projects.json"
import { Project, SortKey, SortOrder } from "../../types/projecttypes"
import ProjectCard from "./ProjectCard"

interface ProjectsListProps {
  sortKey?: SortKey
  sortOrder?: SortOrder
  filters?: string[]
}

function filterSort(key: SortKey, order: SortOrder, filters: string[]) {
  const projects = PROJECTS satisfies Project[]

  const results = projects
    .filter((p) => {
      const tags = (p.tags ?? []).map((x) => x.toLowerCase())
      for (const filter of filters)
        if (!tags.includes(filter.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      if (key === "name")
        return (
          a.name?.toLowerCase().localeCompare(b.name?.toLowerCase() ?? "") ?? 0
        )
      if (key === "end") {
        const aDate =
          a.end === "present" ? new Date() : new Date(a.end ?? "2000-01-01")
        const bDate =
          b.end === "present" ? new Date() : new Date(b.end ?? "2000-01-01")
        return aDate.getTime() - bDate.getTime()
      }
      return a.id.localeCompare(b.id)
    })

  if (order === "desc") results.reverse()
  return results
}

export default function ProjectsList(props: ProjectsListProps) {
  const sortKey = props.sortKey ?? "end"
  const sortOrder = props.sortOrder ?? "asc"
  const filters = props.filters ?? []

  const projects = useMemo(
    () => filterSort(sortKey, sortOrder, filters),
    [sortKey, sortOrder, filters]
  )

  return (
    <div className="flex flex-col gap-10 md:gap-20">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p.id} />
      ))}
    </div>
  )
}
