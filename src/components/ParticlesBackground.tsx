import { useCallback } from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadStarsPreset } from "tsparticles-preset-stars"
import { useTheme } from "../hooks/NightwindHooks"

function ParticlesBackground() {
  const particleInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine)
  }, [])

  const theme = useTheme()
  const particleColor =
    theme === null ? "" : theme === "dark" ? "#fff" : "#112B46"

  return (
    <Particles
      className="absolute top-0 left-0 bottom-0 right-0 -z-10"
      options={{
        preset: "stars",
        fullScreen: false,
        particles: {
          size: {
            value: {
              min: 1,
              max: 6,
            },
          },
          color: {
            value: particleColor,
          },
          opacity: {
            value: {
              min: 0,
              max: 0.6,
            },
          },
        },
        background: {
          color: "",
        },
      }}
      init={particleInit}
    />
  )
}

export default ParticlesBackground
