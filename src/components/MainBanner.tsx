import Typewriter from "typewriter-effect"
import mainPhotoUrl from "../assets/yee.png"
import ParticlesBackground from "./ParticlesBackground"

function MainBanner() {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-background-100 -z-20"></div>
      <ParticlesBackground />
      <div
        className="
        min-h-[70vh]
        max-w-7xl mx-auto
        flex flex-wrap 
        justify-center items-stretch p-20"
      >
        <div className="grow flex justify-center items-center p-5">
          <div className="mt-4 w-[23rem]">
            <h1 className="text-6xl">Hey there!</h1>
            <h1 className="text-5xl">
              I&apos;m{" "}
              <span className="text-primary-900 dark:text-primary-500">
                Shanth Koka
              </span>
            </h1>
            <h1 className="text-5xl text-accent-900 dark:text-accent-700">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Web Developer",
                    "Game Developer",
                  ],
                  delay: 80,
                  deleteSpeed: 80,
                  pauseFor: 5000,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="rounded-3xl w-[600px] border-8 border-[#101930]"
            src={mainPhotoUrl}
            alt="yay"
          />
        </div>
      </div>
    </div>
  )
}

export default MainBanner
