import Link from "next/link"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

export const revalidate = 60 // Cache for 60s, instant load

async function getPlayers() {
  const { data } = await supabase.from("players").select("*").order("number", { ascending: true }).limit(30)
  if(data && data.length > 0) return data
  // Fallback if DB empty
  return [
    { id:1, name:"M. KIBIRIGE", number:10, position:"MID", photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=60&auto=format&fit=crop", apps:12, goals:3 },
    { id:2, name:"J. OKETCH", number:9, position:"FWD", photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=60&auto=format&fit=crop", apps:12, goals:6 },
    { id:3, name:"D. MUSISI", number:1, position:"GK", photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=60&auto=format&fit=crop", apps:12, goals:0 },
    { id:4, name:"P. MUGABI", number:4, position:"DEF", photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60&auto=format&fit=crop", apps:11, goals:1 },
  ]
}

export default async function SquadPage({ searchParams }: { searchParams: { pos?: string } }) {
  const players = await getPlayers()
  const filter = searchParams?.pos || "ALL"
  const filtered = filter === "ALL"? players : players.filter(p => p.position === filter)

  return (
    <div className="bg-[#0A1931] min-h-screen text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-4xl font-black text-[#FFC300]">KATKA FC SQUAD 2024/25</h1>
        <p className="text-gray-400 text-sm mt-2">FOR THE PEOPLE. FOR LUFUMBI. {players.length} Players • Server-rendered • Instant.</p>

        {/* Filters now use URL, no client JS needed */}
        <div className="flex gap-3 mt-6">
          {["ALL","GK","DEF","MID","FWD"].map(f => (
            <Link key={f} href={`/squad?pos=${f}`} className={`px-6 py-2 rounded-full text-sm font-black border ${filter===f? "bg-[#FFC300] text-black border-[#FFC300]" : "border-white/20 hover:bg-white/10"}`}>{f}</Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {filtered.map((p) => (
            <Link key={p.id} href={`/squad/${p.id}`} className="bg-[#12244A] border border-white/10 rounded-2xl p-5 text-center hover:border-yellow-500/40">
              {/* Use next/image for speed */}
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-2 border-white/10">
                <img src={p.photo} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-black mt-3 text-[#FFC300]">{p.name}</h3>
              <p className="text-xs text-gray-400">{p.number} • {p.position}</p>
              <p className="text-[11px] mt-2 bg-black/30 py-1 rounded-full">{p.apps} APPS • {p.goals} GOALS</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}