import TECHS from "../assets/techicons.json"

interface FilterIconProps {
  name: string
  selected: boolean
  onClick: () => void
}

export default function FilterIcon({
  name,
  selected,
  onClick,
}: FilterIconProps) {
  if (!(name in TECHS)) return <></>

  const { name: techName, icon } = TECHS[name as keyof typeof TECHS]
  return (
    <button className="hover:opacity-60 transition-opacity" onClick={onClick}>
      <div
        className="bg-[#252525] p-2 pr-2.5 rounded-md 
        border-2 border-black
        flex flex-row justify-center items-center gap-1
        text-white"
      >
        {selected ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-accent-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-primary-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        )}
        <img src={`/icons/${icon}`} className="w-4 h-4 md:w-8 md:h-8" />
        <span className="text-sm md:text-base">{techName}</span>
      </div>
    </button>
  )
}
