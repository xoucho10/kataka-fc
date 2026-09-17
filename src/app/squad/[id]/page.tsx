"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function PlayerPage(){
 const { id } = useParams()
 const [player, setPlayer] = useState<any>(null)
 const [loading, setLoading] = useState(true)

 useEffect(()=>{
  const fetchPlayer = async ()=>{
   const { data } = await supabase.from("players").select("*").eq("id", id).single()
   if(data) setPlayer(data)
   setLoading(false)
  }
  if(id) fetchPlayer()
 },[id])

 if(loading) return <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-yellow-400">Loading Eagles...</div>
 if(!player) return <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-white">Player not found <Link href="/squad" className="ml-3 text-yellow-400 underline">Back to Squad</Link></div>

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1200px] mx-auto px-6 py-8">
   <Link href="/squad" className="text-[11px] text-yellow-400 tracking-widest">← BACK TO SQUAD</Link>

   <div className="grid md:grid-cols-[380px_1fr] gap-8 mt-6">
    {/* LEFT - PLAYER CARD LIKE TEMPLATE */}
    <div className="bg-[#12244A] border border-yellow-500/30 rounded-2xl p-8 text-center">
     <div className="w-32 h-32 bg-[#0A1931] rounded-full mx-auto flex items-center justify-center text-6xl font-black text-yellow-400 border-2 border-yellow-500/30">{player.number}</div>
     <h1 className="text-3xl font-black mt-6 text-yellow-400">{player.name}</h1>
     <p className="text-xs tracking-[0.3em] text-gray-400 mt-1">{player.position} • #{player.number} • {player.nationality || 'Uganda'}</p>

     <div className="grid grid-cols-3 gap-3 mt-8">
      <div className="bg-[#0A1931] p-3 rounded-xl"><p className="text-[9px] text-yellow-500">APPS</p><p className="text-xl font-black">{player.apps}</p></div>
      <div className="bg-[#0A1931] p-3 rounded-xl"><p className="text-[9px] text-yellow-500">GOALS</p><p className="text-xl font-black">{player.goals}</p></div>
      <div className="bg-[#0A1931] p-3 rounded-xl"><p className="text-[9px] text-yellow-500">ASSISTS</p><p className="text-xl font-black">{player.assists || 0}</p></div>
     </div>

     <button className="w-full mt-6 bg-[#FFC300] text-black py-3 rounded-full text-xs font-black">BUY {player.name.split(' ')[0]} JERSEY</button>
     <p className="text-[9px] text-gray-500 mt-3">FOR THE PEOPLE. FOR LUFUMBI.</p>
    </div>

    {/* RIGHT - BIO & STATS */}
    <div className="space-y-6">
     <div className="bg-[#12244A]/60 border border-white/10 rounded-2xl p-6">
      <h3 className="text-yellow-400 font-black text-sm tracking-widest">BIOGRAPHY — DRUM HERITAGE</h3>
      <p className="text-sm text-gray-300 mt-3 leading-relaxed">
       {player.bio || `${player.name} is a proud son of Lufumbi, representing Kataka FC with heart since 2000 heritage. Known for drum celebration after every goal.`}
      </p>
      <p className="text-sm text-gray-300 mt-3">Age: {player.age || 24} • Position: {player.position} • Part of the Eagles chasing UPL glory — currently 4th with W7 D3 L2, 12 points.</p>
     </div>

     <div className="bg-[#12244A]/60 border border-white/10 rounded-2xl p-6">
      <h3 className="text-yellow-400 font-black text-sm">2024/25 SEASON STATS</h3>
      <div className="mt-4 space-y-3 text-xs">
       <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Appearances</span><span className="font-bold">{player.apps} Matches</span></div>
       <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Goals</span><span className="font-bold text-yellow-400">{player.goals} Goals</span></div>
       <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Clean Sheets / Assists</span><span className="font-bold">{player.assists} Assists</span></div>
       <div className="flex justify-between"><span className="text-gray-400">Current Form</span><span className="text-green-400 font-bold">Excellent ★ 7.8 Rating</span></div>
      </div>
     </div>

     <div className="bg-gradient-to-r from-[#FFC300] to-yellow-600 text-black rounded-2xl p-5 flex justify-between items-center">
      <div><p className="font-black text-sm">NEXT MATCH — KATKA vs {player.position === 'FWD'? 'Vipers' : 'KCCA'}</p><p className="text-[11px]">Watch {player.name} live at Lufumbi Ground</p></div>
      <Link href="/tickets" className="bg-black text-yellow-400 px-5 py-2 rounded-full text-xs font-black">GET TICKET</Link>
     </div>
    </div>
   </div>
  </div>
 </div>
 )
}