import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage"
import NavBar from "./components/layout/NavBar"


function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
