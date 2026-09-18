"use client"

type Player = {
  no: number
  name: string
  pos: "GK" | "DEF" | "MID" | "FW"
  age: number
  nat: string
  img?: string
}

const PLAYERS: Player[] = [
  { no: 1, name: "Okello James", pos: "GK", age: 26, nat: "UG" },
  { no: 12, name: "Mubiru Isa", pos: "GK", age: 23, nat: "UG" },
  { no: 4, name: "Wafula Derrick", pos: "DEF", age: 24, nat: "UG" },
  { no: 5, name: "Mukisa Joseph", pos: "DEF", age: 27, nat: "UG" },
  { no: 15, name: "Kiprop Brian", pos: "DEF", age: 22, nat: "UG" },
  { no: 3, name: "Atube Rogers", pos: "DEF", age: 25, nat: "UG" },
  { no: 8, name: "Okello Samuel", pos: "MID", age: 24, nat: "UG" },
  { no: 6, name: "Nabirye Ivan", pos: "MID", age: 26, nat: "UG" },
  { no: 10, name: "Muwanga Paul", pos: "MID", age: 21, nat: "UG" },
  { no: 7, name: "Kizza Musa", pos: "FW", age: 23, nat: "UG" },
  { no: 9, name: "Wandera Peter", pos: "FW", age: 25, nat: "UG" },
  { no: 11, name: "Lukwago Dan", pos: "FW", age: 22, nat: "UG" },
]

const POS_LABEL: Record<string, string> = {
  GK: "Goalkeepers",
  DEF: "Defenders",
  MID: "Midfielders",
  FW: "Forwards",
}

export default function FirstTeamSquad() {
  const groups = ["GK", "DEF", "MID", "FW"] as const

  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g} className="bg-white rounded-[20px] p-6 border border-black/5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-black text-[13px] tracking-[0.2em] text-[#0A1931]">
              {POS_LABEL[g]}
            </h3>
            <span className="text-[10px] bg-[#0A1931] text-white px-2.5 py-1 rounded-full font-black">
              {PLAYERS.filter((p) => p.pos === g).length} PLAYERS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PLAYERS.filter((p) => p.pos === g).map((p) => (
              <div
                key={p.no}
                className="group flex items-center gap-4 p-3.5 rounded-2xl border border-black/5 hover:border-[#FFC300]/40 hover:bg-[#FFC300]/5 transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#0A1931] text-white grid place-items-center font-black text-sm shrink-0">
                  {p.no}
                </div>
                <div className="min-w-0">
                  <p className="font-black text-[14px] leading-none truncate">{p.name}</p>
                  <p className="text-[11px] text-gray-500 mt-1 font-bold tracking-wide">
                    {p.pos} • {p.nat} • {p.age} yrs
                  </p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-[#FFC300] opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}