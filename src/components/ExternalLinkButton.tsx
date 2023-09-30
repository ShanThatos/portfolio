interface ExternalLinkButtonProps {
  type: string
  href: string
  text: string
}

interface ButtonType {
  class: string
  icon: string
}

const types: Record<string, ButtonType> = {
  github: {
    class: "border-[#286ab6] hover:shadow-[#286ab6] text-[#88c0ff]",
    icon: "/icons/github.svg",
  },
  youtube: {
    class: "border-[#ff6464] hover:shadow-[#ff6464] text-[#ff6464]",
    icon: "/icons/youtube.png",
  },
  itchio: {
    class: "border-[#db8166] hover:shadow-[#db8166] text-[#ffa589]",
    icon: "/icons/itchio.png",
  },
  misc: {
    class: "border-[#286ab6] hover:shadow-[#286ab6] text-[#88c0ff]",
    icon: "/icons/link.png",
  },
}

function ExternalLinkButton(props: ExternalLinkButtonProps) {
  return (
    <a
      className={
        "border p-2 rounded hover:underline hover:shadow-md hover:opacity-80 transition-shadow" +
        types[props.type].class
      }
      href={props.href}
      target="_blank"
      rel="external noreferrer"
    >
      <div className="flex flex-row items-center">
        <img src={types[props.type].icon} className="w-8 h-8" />
        <span className="ml-2">{props.text}</span>
      </div>
    </a>
  )
}

export default ExternalLinkButton
