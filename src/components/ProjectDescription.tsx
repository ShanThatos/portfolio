import { useEffect, useRef, useState } from "react"

function ProjectDescription({ text }: { text: string }) {
  const [wasClamped, setWasClamped] = useState(false)
  const [isClamped, setIsClamped] = useState(true)
  const [showReadMore, setShowReadMore] = useState(true)
  const textTag = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (
      textTag.current &&
      textTag.current?.scrollHeight > textTag.current?.offsetHeight
    )
      setWasClamped(true)

    setShowReadMore(
      (textTag.current &&
        textTag.current?.scrollHeight > textTag.current?.offsetHeight) ||
        false
    )
  }, [text, isClamped, textTag, wasClamped])

  return (
    <div className="mb-3 text-xl">
      <p
        ref={textTag}
        className={
          "opacity-60 mb-1 whitespace-pre-line " +
          (isClamped ? "line-clamp-3" : "")
        }
      >
        {text}
      </p>
      {wasClamped && (
        <button
          className="opacity-80 text-[#46acff]"
          onClick={() => setIsClamped(!showReadMore)}
        >
          {showReadMore ? "Show More..." : "Show Less..."}
        </button>
      )}
    </div>
  )
}

export default ProjectDescription
