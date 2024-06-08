import { lazy } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"))
const BlogListPage = lazy(() => import("./pages/BlogListPage"))
const BlogEntryPage = lazy(() => import("./pages/BlogEntryPage"))

function App() {
  if (!window.location.pathname.startsWith("/_/")) {
    window.location.pathname = "/_" + window.location.pathname
  }

  return (
    <BrowserRouter basename="/_/">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="blogs" element={<BlogListPage />} />
          <Route path="blogs/:id" element={<BlogEntryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
