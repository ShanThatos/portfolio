import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import useScrollTo from "../../hooks/use-scroll-to"
import { Suspense } from "react"

const RootContent = () => {
  useScrollTo()
  return <Outlet />
}

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<></>}>
        <RootContent />
      </Suspense>
    </>
  )
}

export default RootLayout