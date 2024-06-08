import { Link } from "react-router-dom"
import BLOGS from "../assets/blogs/blogs.json"
import { ImageZoom } from "../components/common/ImageZoom"
import { BlogType } from "../types/blogtypes"
import { toDateDisplay } from "../utils"
import { Helmet } from "react-helmet-async"


const BlogListPage = () => {
  const blogs = BLOGS satisfies BlogType[]

  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10 flex flex-col items-stretch gap-y-10 scroll-m-20">
      <Helmet>
        <link rel="canonical" href="https://shanthatos.dev/_/blogs" />
      </Helmet>
      <div className="md:px-5">
        <div className="bg-background-50 text-black md:p-2 text-center font-body text-xs md:text-2xl">
          <div>Rest up traveler, you have much more scrolling to do</div>
          <div>Stay at this campfire for as long as you like</div>
        </div>
        <img src="/blogs/rest-up-traveler.gif" className="w-full" />
      </div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <div className="h-1 bg-accent-300 rounded opacity-50"></div>
          <div className="pt-8 px-2">
            <div className="flex flex-wrap justify-between mb-1 md:mb-4">
              <Link to={blog.id}>
                <h2 className="text-lg md:text-3xl text-secondary-600 mb-0 underline hover:opacity-80 active:opacity-60">{blog.title}</h2>
              </Link>
              <h2 className="hidden md:inline text-lg md:text-3xl opacity-80 mb-0">{toDateDisplay(blog.date)}</h2>
            </div>
            <div className="flex items-center flex-col-reverse md:flex-row md:px-5 gap-3">
              <ImageZoom src={`/blogs/${blog.id}/thumbnail.png`} className="w-60 aspect-square" />
              <p className="mb-auto opacity-80" dangerouslySetInnerHTML={{ __html: blog.description }} />
            </div>
          </div>
        </div>
      ))}
      <div className="h-1 bg-accent-300 rounded opacity-50"></div>
    </div>
  )
}

export default BlogListPage