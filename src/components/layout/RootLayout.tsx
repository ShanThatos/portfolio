import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import useScrollTo from "../../hooks/use-scroll-to"
import { Suspense } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

const RootContent = () => {
  useScrollTo()
  return <Outlet />
}

const RootLayout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Come check out my portfolio and see what I've been up to!"
        />
        <title>Shanth Koka Portfolio | shanthatos.dev</title>
      </Helmet>
      <NavBar />
      <Suspense fallback={<></>}>
        <RootContent />
      </Suspense>
    </HelmetProvider>
  )
}

export default RootLayout