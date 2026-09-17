import Link from "next/link"
import { supabase } from "@/lib/supabase"

// Fallback same as list page
const FALLBACK = [
  { id:1, name:"M. KIBIRIGE", number:10, position:"MID", photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=60", apps:12, goals:3, bio:"Captain and playmaker from Lufumbi. Joined 2020.", age:26, foot:"Right", height:"1.78m" },
  { id:2, name:"J. OKETCH", number:9, position:"FWD", photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=60", apps:12, goals:6, bio:"Top scorer. Pace and power.", age:24, foot:"Left", height:"1.82m" },
  { id:3, name:"D. MUSISI", number:1, position:"GK", photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=60", apps:12, goals:0, bio:"Safe hands. Fan favourite.", age:28, foot:"Right", height:"1.90m" },
  { id:4, name:"P. MUGABI", number:4, position:"DEF", photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=60", apps:11, goals:1, bio:"Rock at the back.", age:27, foot:"Right", height:"1.85m" },
]

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params // Next 16 needs await

  // 1. Try Supabase
  let player: any = null
  const { data } = await supabase.from("players").select("*").eq("id", id).single()
  if(data) player = data
  else {
    // 2. Try fallback
    player = FALLBACK.find(p => String(p.id) === String(id))
  }

  if(!player) {
    return <div className="bg-[#0A1931] min-h-screen flex items-center justify-center text-white">Player not found <Link href="/squad" className="ml-3 text-[#FFC300] underline">Back to Squad</Link></div>
  }

  return (
    <div className="bg-[#0A1931] min-h-screen text-white">
      <div className="max-w-[1000px] mx-auto px-6 py-10">
        <Link href="/squad" className="text-sm text-gray-400">← Back to Squad</Link>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <img src={player.photo} alt={player.name} className="w-full h-[500px] object-cover rounded-2xl bg-[#12244A]" />
          <div>
            <h1 className="text-5xl font-black text-[#FFC300]">{player.name}</h1>
            <p className="text-xl mt-2">#{player.number} • {player.position}</p>
            <p className="text-sm text-gray-300 mt-6">{player.bio || "Kataka FC player for the people, for Lufumbi."}</p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="bg-[#12244A] p-4 rounded-xl text-center"><p className="text-xs text-gray-400">APPS</p><p className="font-black text-[#FFC300] text-xl">{player.apps || 12}</p></div>
              <div className="bg-[#12244A] p-4 rounded-xl text-center"><p className="text-xs text-gray-400">GOALS</p><p className="font-black text-[#FFC300] text-xl">{player.goals || 0}</p></div>
              <div className="bg-[#12244A] p-4 rounded-xl text-center"><p className="text-xs text-gray-400">AGE</p><p className="font-black text-xl">{player.age || 24}</p></div>
            </div>

            <div className="mt-8 bg-[#12244A] p-5 rounded-xl border border-white/10 text-sm">
              <p>Height: {player.height} • Foot: {player.foot}</p>
            </div>

            <Link href={`/shop`} className="block text-center mt-8 bg-[#FFC300] text-black font-black py-4 rounded-full">BUY {player.name} JERSEY</Link>
          </div>
        </div>
      </div>
    </div>
  )
}