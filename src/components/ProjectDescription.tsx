import { useCallback, useEffect, useRef, useState } from "react"

function ProjectDescription({ text }: { text: string }) {
  const textTag = useRef<HTMLHeadingElement>(null)
  const [needsClamp, setNeedsClamp] = useState(false)
  const [isClamped, setIsClamped] = useState(true)

  const updateClamp = useCallback(() => {
    if (
      !needsClamp &&
      textTag.current &&
      textTag.current?.scrollHeight > textTag.current?.offsetHeight
    )
      setNeedsClamp(true)
  }, [textTag])

  useEffect(() => {
    updateClamp()
    const tid = setTimeout(updateClamp, 1000)
    return () => clearTimeout(tid)
  }, [])

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
      {needsClamp && (
        <button
          className="opacity-80 text-[#46acff]"
          onClick={() => setIsClamped(!isClamped)}
        >
          {isClamped ? "Show More..." : "Show Less..."}
        </button>
      )}
    </div>
  )
}

export default ProjectDescription
