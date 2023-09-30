import TECHS from "../assets/techicons.json"

function TechIcon({ name }: { name: string }) {
  if (!(name in TECHS)) return <></>

  const { name: techName, icon, url } = TECHS[name as keyof typeof TECHS]
  return (
    <>
      <a
        href={url}
        className="hover:opacity-60 transition-opacity"
        target="_blank"
        rel="noreferrer external nofollow"
      >
        <div
          className="bg-[#252525] p-1.5 pr-2 rounded-md 
          border-2 border-white
          flex flex-row justify-center items-center gap-1
          text-permawhite"
        >
          <img src={`/icons/${icon}`} className="w-8 h-8" />
          <span>{techName}</span>
        </div>
      </a>
    </>
  )
}

export default TechIcon
