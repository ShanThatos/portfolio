import { useCallback, useState } from "react"
import TechIcon from "./TechIcon"

export default function Footer() {
  const [contactDisabled, setContactDisabled] = useState(false)
  const [message, setMessage] = useState("")

  const onClick = useCallback(async () => {
    setContactDisabled(true)
    try {
      const res = await fetch("https://mapi.shanthatos.dev/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: "portfolio",
          message: message,
        }),
      })
      if (res.status === 200) {
        setMessage("")
        alert("Message sent!")
      }
    } catch (e) {
      console.error(e)
    }
    setContactDisabled(false)
  }, [message])

  return (
    <div className="my-2 md:my-10 bg-background-800">
      <div className="max-w-5xl p-3 md:p-8 mx-auto">
        <div className="flex flex-col px-12 md:px-0 md:flex-row justify-stretch items-stretch">
          <div className="flex-1 text-center">
            <div className="w-full h-full pt-2 px-5 grid place-items-center">
              <div className="mb-3">
                <h2>Shanth Koka</h2>
                <a
                  className="text-accent-100"
                  href="mailto:shanthkoka@gmail.com"
                >
                  shanthkoka@gmail.com
                </a>
                <br />
                <a className="text-accent-100" href="tel:7138254004">
                  (713) 825-4004
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 px-3 py-2 flex flex-col justify-stretch items-stretch gap-3">
            <div className="flex-auto">
              <textarea
                className="w-full h-full bg-[#363c4a] rounded-lg border-2 border-black p-2"
                placeholder="Send me a message :D"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex-shrink grid place-items-center">
              <button
                className="bg-primary-800 disabled:opacity-50 px-3 py-1 rounded enabled:hover:opacity-80"
                onClick={onClick}
                disabled={contactDisabled || message.trim() === ""}
              >
                Contact Me!
              </button>
            </div>
          </div>
        </div>
        <div className="my-5 border-t-2 border-white opacity-10"></div>
        <div className="grid place-items-center">
          <a
            className="underline text-[#a2b3ff] hover:text-[#738dff] mb-3"
            href="https://github.com/ShanThatos/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="mb-0">Check out this portfolio&apos;s repo!</h4>
          </a>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 px-5">
            <div className="flex flex-row gap-2">
              <TechIcon name="react" />
              <TechIcon name="typescript" />
            </div>
            <div className="flex flex-row gap-2">
              <TechIcon name="tailwind" />
              <TechIcon name="vite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
