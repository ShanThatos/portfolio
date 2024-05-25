import TECHS from "../assets/techicons.json"

function TechIcon({ name }: { name: string }) {
  if (!(name in TECHS)) return <></>

  const { name: techName, icon } = TECHS[name as keyof typeof TECHS]
  return (
    <div
      className="bg-[#252525] p-1.5 pr-2 rounded-md 
      border-2 border-black
      flex flex-row justify-center items-center gap-1
      text-white"
    >
      <img src={`/icons/${icon}`} className="w-4 h-4 md:w-8 md:h-8" />
      <span className="text-sm md:text-base">{techName}</span>
    </div>
  )
}

export default TechIcon
