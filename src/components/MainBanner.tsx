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
        max-w-[100rem] mx-auto pt-20 p-10
        lg:min-h-fit
        flex flex-col justify-start content-stretch
        gap-10 lg:gap-12"
      >
        <div className="grow grid grid-cols-1 lg:grid-cols-2 gap-x-20">
          <div className="grid place-items-center">
            <div className="w-[23rem]">
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
          <div className="grid place-items-center px-5">
            <img
              className="lg:w-[50vh] rounded-3xl border-8 border-[#101930]"
              src={mainPhotoUrl}
              alt="yay"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto justify-self-end flex flex-col justify-center">
          <h2 className="text-3xl text-center opacity-70 mx-10">
            Welcome to my corner of the web! I&apos;m Shanth Koka, a techie who
            finds solace in the elegance of code. I hope you enjoy this
            sneak-peek into my world of bits and bytes.
          </h2>
          <div className="my-10 flex flex-row flex-wrap justify-center items-center gap-6">
            <a
              className="
                w-[8rem]
                border-2 border-[#286ab6] 
                text-[#88c0ff]
                p-2.5 rounded-lg 
                hover:underline hover:opacity-80
                hover:shadow-md hover:shadow-[#286ab6] transition-shadow 
                bg-[#00000088]"
              href="https://www.linkedin.com/in/shanth-koka-603987224/"
              target="_blank"
              rel="noreferrer external"
            >
              <div className="flex flex-row justify-center items-center">
                <img src="/icons/linkedin.png" className="w-8 h-8" />
                <span className="ml-2">LinkedIn</span>
              </div>
            </a>
            <a
              className="
                w-[8rem]
                border-2 border-[#3c9c59] 
                text-[#5ad47f]
                p-2.5 rounded-lg 
                hover:underline hover:opacity-80
                hover:shadow-md hover:shadow-[#3c9c59] transition-shadow 
                bg-[#00000088]"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row justify-center items-center">
                <img src="/icons/document.png" className="w-8 h-8" />
                <span className="ml-2">Resume</span>
              </div>
            </a>
            <a
              className="
                w-[8rem]
                border-2 border-[#286ab6] 
                text-[#88c0ff]
                p-2.5 rounded-lg 
                hover:underline hover:opacity-80
                hover:shadow-md hover:shadow-[#286ab6] transition-shadow 
                bg-[#00000088]"
              href="https://github.com/ShanThatos"
              target="_blank"
              rel="noreferrer external"
            >
              <div className="flex flex-row justify-center items-center">
                <img src="/icons/github.svg" className="w-8 h-8" />
                <span className="ml-2">GitHub</span>
              </div>
            </a>
            <a
              className="
                w-[8rem]
                border-2 border-[#ff6464] 
                text-[#ff6464] 
                p-2.5 rounded-lg 
                hover:underline hover:opacity-80
                hover:shadow-md hover:shadow-[#ff6464] transition-shadow 
                bg-[#00000088]"
              href="https://youtube.com/@shanthkoka6506"
              target="_blank"
              rel="noreferrer external"
            >
              <div className="flex flex-row justify-center items-center">
                <img src="/icons/youtube.png" className="w-8 h-8" />
                <span className="ml-2">YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
