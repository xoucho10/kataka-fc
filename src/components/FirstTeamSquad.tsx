"use client"

type Pos = "GK" | "DEF" | "MID" | "FW"

type Player = {
  id: number
  no: number
  name: string
  pos: Pos
  age: number
  country: string
}

const PLAYERS: Player[] = [
  { id: 1, no: 1, name: "Okello James", pos: "GK", age: 26, country: "UG" },
  { id: 2, no: 16, name: "Mubiru Isaac", pos: "GK", age: 23, country: "UG" },
  { id: 3, no: 4, name: "Wafula Derrick", pos: "DEF", age: 24, country: "UG" },
  { id: 4, no: 5, name: "Mukisa Joseph", pos: "DEF", age: 27, country: "UG" },
  { id: 5, no: 15, name: "Kiprop Brian", pos: "DEF", age: 22, country: "UG" },
  { id: 6, no: 3, name: "Atube Rogers", pos: "DEF", age: 25, country: "UG" },
  { id: 7, no: 2, name: "Lukwago Dan", pos: "DEF", age: 24, country: "UG" },
  { id: 8, no: 8, name: "Okello Samuel", pos: "MID", age: 24, country: "UG" },
  { id: 9, no: 6, name: "Nabirye Ivan", pos: "MID", age: 26, country: "UG" },
  { id: 10, no: 10, name: "Muwanga Paul", pos: "MID", age: 21, country: "UG" },
  { id: 11, no: 18, name: "Kizza Musa", pos: "MID", age: 23, country: "UG" },
  { id: 12, no: 7, name: "Wandera Peter", pos: "FW", age: 25, country: "UG" },
  { id: 13, no: 9, name: "Kiprotich Allan", pos: "FW", age: 24, country: "UG" },
  { id: 14, no: 11, name: "Ssemakula John", pos: "FW", age: 22, country: "UG" },
]

const GROUPS: { key: Pos; label: string }[] = [
  { key: "GK", label: "GOALKEEPERS" },
  { key: "DEF", label: "DEFENDERS" },
  { key: "MID", label: "MIDFIELDERS" },
  { key: "FW", label: "FORWARDS" },
]

export default function FirstTeamSquad() {
  return (
    <div className="space-y-10">
      {GROUPS.map((group) => {
        const list = PLAYERS.filter((p) => p.pos === group.key)
        if (list.length === 0) return null

        return (
          <div key={group.key} className="bg-white rounded-[22px] p-6 md:p-7 border border-black/5 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-[13px] tracking-[0.22em] text-[#0A1931]">
                {group.label}
              </h3>
              <span className="text-[10px] font-black bg-[#0A1931] text-white px-3 py-1 rounded-full tracking-widest">
                {list.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {list.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-black/[0.06] hover:border-[#FFC300]/50 hover:bg-[#FFC300]/5 transition group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#0A1931] text-white grid place-items-center font-black text-[13px] shrink-0">
                    {p.no}
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-[14px] leading-none text-black truncate">
                      {p.name}
                    </p>
                    <p className="text-[11px] font-bold text-gray-500 mt-1.5 tracking-wide">
                      {p.pos} • {p.country} • {p.age} yrs
                    </p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-[#FFC300] opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}