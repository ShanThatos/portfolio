import { MouseEvent, useEffect, useRef, useState } from "react"
import { NavHashLink } from "react-router-hash-link"


const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  const title = (
    <code>shanthatos.dev</code>
  )

  const links = [
    { to: "/#myprojects", text: "Portfolio" },
    // { to: "/blog", text: "Blog" },
  ]

  const openDrawer = () => {
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y")
    const scrollElement = document.scrollingElement
    if (scrollElement && scrollElement instanceof HTMLElement) {
      console.log(scrollElement)
      scrollElement.style.position = "fixed"
      scrollElement.style.top = `-${scrollY}`
    }
    if (drawerRef.current) drawerRef.current.focus()
    setIsDrawerOpen(true)
  }

  const closeDrawer = (event?: MouseEvent) => {
    const scrollElement = document.scrollingElement
    if (scrollElement && scrollElement instanceof HTMLElement) {
      const scrollY = scrollElement.style.top
      scrollElement.style.position = ""
      scrollElement.style.top = ""
      window.scrollTo({
        behavior: "instant",
        top: parseInt(scrollY || "0") * -1
      })
    }

    setIsDrawerOpen(false)
    if (event) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    const scrollListener = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`)
    }
    window.addEventListener("scroll", scrollListener)
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])


  return (
    <div className="sticky top-0 bg-background-800 z-50 shadow border-b-2 border-background-900 font-display">
      <div className="max-w-6xl mx-auto">
        <nav className="h-12 hidden md:flex items-center text-xl px-5">
          <NavHashLink to="/#portfolio-page" className="mr-auto hover:opacity-60 active:opacity-40">
            {title}
          </NavHashLink>
          {links.map((link, index) => (
            <NavHashLink key={link.to} to={link.to} className={`h-full ${index === 0 ? "border-l-2" : ""} border-r-2 border-background-900 flex items-center px-3 hover:opacity-60 active:opacity-40`}>
              {link.text}
            </NavHashLink>
          ))}
        </nav>

        <nav className="md:hidden h-14 flex items-center">
          <span className="mx-auto">{title}</span>
          <div className="absolute h-full right-0 pr-5 flex items-center">
            <button className="rounded-lg p-1 border-2 border-[#5d8cc1] active:opacity-70" onClick={openDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" viewBox="0 0 50 50" className="w-6 text-[#5d8cc1]">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
            <div className="fixed inset-0 w-screen h-screen bg-[#00000088] pointer-events-none"
              style={{ opacity: isDrawerOpen ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
            >
              <div
                className="w-screen h-[100dvh] pointer-events-auto"
                style={{ marginLeft: isDrawerOpen ? 0 : "100vw", transition: "margin-left 0.3s ease-in-out" }}
                onClick={closeDrawer}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setIsDrawerOpen(false)
                }}
                tabIndex={0}
                ref={drawerRef}
              >
                <div
                  className="ml-auto w-52 h-full p-3 bg-background-900 flex flex-col justify-end items-stretch gap-3"
                  onClick={(event) => event.stopPropagation()}
                >
                  {links.map((link) => (
                    <NavHashLink key={link.to} to={link.to} className="py-3 px-4 bg-background-800 rounded active:opacity-40"
                      scroll={(el) => {
                        closeDrawer()
                        setTimeout(() => {
                          el.scrollIntoView({ behavior: "smooth" })
                        }, 100)
                      }}
                    >
                      {link.text}
                    </NavHashLink>
                  ))}
                  <button className="py-3 px-4 bg-background-800 rounded text-left active:opacity-70" onClick={closeDrawer}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default NavBar