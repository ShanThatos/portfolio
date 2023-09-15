import { useEffect } from "react"
import PROJECTS from "./assets/projects.json"
import MainBanner from "./components/MainBanner"
import ProjectCard from "./components/ProjectCard"

import nightwind from "nightwind/helper"

function App() {
  useEffect(() => {
    nightwind.enable(true)
  }, [])

  return (
    <>
      <MainBanner />

      <div className="max-w-5xl p-4 mx-auto">
        <h1 className="mt-5 mb-10 text-center text-secondary-800 dark:text-secondary-200">
          My Projects
        </h1>
        <div className="flex flex-col gap-28">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p.id} />
          ))}
        </div>
        {/* <button
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-600 text-permablack font-bold py-2 px-4 rounded"
          onClick={() => nightwind.toggle()}
        >
          Toggle Nightwind
        </button> */}
      </div>
    </>
  )
}

export default App
