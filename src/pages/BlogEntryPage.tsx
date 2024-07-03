import { useParams } from "react-router-dom"
import BLOGS from "../assets/blogs/blogs.json"
import { BlogType } from "../types/blogtypes"
import { useEffect, useState } from "react"
import { ImageZoom } from "../components/common/ImageZoom"
import { toDateDisplay } from "../utils"
import { Helmet } from "react-helmet-async"
import Markdown from "../components/common/Markdown"

const BlogEntryContent = () => {
  const { id } = useParams()

  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch(`/blogs/${id}/index.md`)
      .then((res) => res.text())
      .then(setContent)


    // const interval = setInterval(() => {
    //   fetch(`/blogs/${id}/index.md`)
    //     .then((res) => res.text())
    //     .then(setContent)

    //   if (import.meta.env.PROD) {
    //     clearInterval(interval)
    //   }
    // }, 1000)
    // return () => {
    //   setContent("")
    //   clearInterval(interval)
    // }
  }, [id])

  return (content ? (
    <>
      <Markdown content={content} srcPath={`/blogs/${id}/`} />
      <div className="h-40" />
    </>
  ) : (
    <div className="prose prose-invert mx-auto">
      <div className="animate-pulse flex flex-col items-stretch">
        <div className="bg-[#ffffff33] w-[200px] h-[24px] rounded-lg mb-3" />
        <div className="mb-6" />

        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3" />
        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3" />
        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3 mr-16" />
        <div className="mb-4" />

        <div className="bg-[#ffffff33] w-[300px] h-[200px] rounded-lg mb-3 mx-auto" />
        <div className="mb-4" />

        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3" />
        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3" />
        <div className="bg-[#ffffff33] h-[14px] rounded-lg mb-3 mr-16" />
      </div>
    </div>
  ))
}

const BlogEntryPage = () => {
  const { id } = useParams()

  const blog: BlogType | undefined = BLOGS.find((b) => b.id === id)
  if (!blog) throw new Error(`Blog ${id} not found`)

  return (
    <div className="max-w-5xl mx-auto py-5 px-2 md:p-10 scroll-m-20">
      <Helmet>
        <title>{blog.title} | shanthatos.dev</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`https://shanthatos.dev/_/blogs/${blog.id}`} />
      </Helmet>
      <div className="px-10 pb-5 md:pb-10">
        <ImageZoom src={`/blogs/${blog.id}/thumbnail.png`} className="mx-auto max-h-[600px] aspect-square" />
      </div>
      <h1 className="text-xl md:text-4xl mb-0 md:mb-2 text-center text-secondary-500">{blog.title}</h1>
      <h2 className="text-lg md:text-xl mb-2 text-center opacity-70">Posted {toDateDisplay(blog.date)}</h2>
      <div className="h-1 bg-white rounded opacity-50 mb-8"></div>
      <div className="px-5 text-[16px]">
        <BlogEntryContent />
      </div>
    </div>
  )
}

export default BlogEntryPage