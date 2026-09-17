"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function SquadPage(){
 const [players,setPlayers] = useState<any[]>([])
 const [filter,setFilter] = useState("ALL")

 useEffect(()=>{
  const fetchPlayers = async ()=>{
   const {data} = await supabase.from("players").select("*").order("number")
   if(data) setPlayers(data)
  }
  fetchPlayers()
 },[])

 const filtered = filter==="ALL"? players : players.filter(p=>p.position.includes(filter))

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1400px] mx-auto px-6 py-8">
   <h1 className="text-4xl font-black text-[#FFC300]">KATKA FC SQUAD 2024/25</h1>
   <p className="text-sm text-gray-400 mt-2">FOR THE PEOPLE. FOR LUFUMBI. 4 Players from your database live.</p>

   <div className="flex gap-3 mt-6">
    {["ALL","GK","DEF","MID","FWD"].map(f=>(
     <button key={f} onClick={()=>setFilter(f)} className={`px-5 py-2 rounded-full text-xs font-black ${filter===f?'bg-[#FFC300] text-black':'border border-white/20'}`}>{f}</button>
    ))}
   </div>

   <div className="grid md:grid-cols-4 gap-6 mt-8">
    {filtered.map(p=>(
     <Link key={p.id} href={`/squad/${p.id}`} className="bg-[#12244A] border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
      <div className="w-20 h-20 bg-[#0A1931] rounded-full mx-auto flex items-center justify-center text-3xl font-black text-yellow-400">{p.number}</div>
      <h3 className="text-center font-black mt-4 text-yellow-400">{p.name}</h3>
      <p className="text-center text-[11px] tracking-widest text-gray-400">{p.position} • #{p.number}</p>
      <div className="flex justify-between mt-4 text-[10px] bg-[#0A1931] rounded-lg p-2">
       <span>APPS {p.apps}</span><span>GOALS {p.goals}</span>
      </div>
     </Link>
    ))}
   </div>
  </div>
 </div>
 )
}