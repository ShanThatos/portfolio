import { useCallback, useState } from "react"

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
    <div className="my-10 bg-background-100">
      <div className="max-w-5xl p-8 mx-auto">
        <div className="flex flex-col px-12 md:px-0 md:flex-row justify-stretch items-stretch">
          <div className="flex-1 text-center">
            <div className="w-full h-full p-5 grid place-items-center">
              <div>
                <h2>Shanth Koka</h2>
                <a
                  className="text-accent-800"
                  href="mailto:shanthkoka@gmail.com"
                >
                  shanthkoka@gmail.com
                </a>
                <br />
                <a className="text-accent-800" href="tel:7138254004">
                  (713) 825-4004
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 px-3 py-1 flex flex-col justify-stretch items-stretch gap-3">
            <div className="flex-auto">
              <textarea
                className="w-full h-full bg-[#363c4a] rounded-lg border-2 border-permablack p-2"
                placeholder="Send me a message :D"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex-shrink grid place-items-center">
              <button
                className="bg-primary-100 disabled:opacity-50 px-3 py-1 rounded enabled:hover:opacity-80"
                onClick={onClick}
                disabled={contactDisabled || message.trim() === ""}
              >
                Contact Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
