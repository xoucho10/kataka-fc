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

export default function FirstTeamSquad() {
  return (
    <div className="space-y-6">
      {["GK","DEF","MID","FW"].map((pos) => {
        const list = PLAYERS.filter((p) => p.pos === pos)
        return (
          <div key={pos} className="bg-white rounded-2xl p-6 border">
            <h3 className="font-black text-xs tracking-widest mb-4">{pos}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {list.map((p) => (
                <div key={p.id} className="border rounded-xl p-3 flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0A1931] text-white grid place-items-center font-black">{p.no}</div>
                  <div>
                    <p className="font-black text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.pos} • {p.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}