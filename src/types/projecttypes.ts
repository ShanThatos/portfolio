interface ProjectMedia {
  src: string
  caption: string
}

interface ProjectLink {
  type: string
  url: string
  text: string
}

interface Project {
  id: string
  name?: string
  subtext?: string
  tech?: string[]
  media?: Array<string | ProjectMedia>
  start?: string
  end?: string
  links?: ProjectLink[]
  hidden?: boolean
  tags?: string[]
}

type SortKey = "id" | "name" | "end"
type SortOrder = "asc" | "desc"

export type { Project, SortKey, SortOrder }
