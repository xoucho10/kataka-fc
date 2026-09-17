"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function FixturesPage(){
 const [fixtures, setFixtures] = useState<any[]>([])
 const [filter, setFilter] = useState("all")

 useEffect(()=>{
  const fetchFix = async ()=>{
   const {data} = await supabase.from("fixtures").select("*").order("date")
   if(data) setFixtures(data)
  }
  fetchFix()
 },[])

 const filtered = fixtures.filter(f=> filter==="all"? true : f.status===filter)

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1200px] mx-auto px-6 py-8">
   <h1 className="text-4xl font-black text-[#FFC300]">FIXTURES & RESULTS</h1>
   <p className="text-gray-400 text-sm mt-2">2024/25 Uganda Premier League — Kataka FC Lufumbi • 4TH Place W7 D3 L2</p>

   <div className="flex gap-3 mt-6">
    {["all","upcoming","live","finished"].map(f=>(
     <button key={f} onClick={()=>setFilter(f)} className={`px-5 py-2 rounded-full text-xs font-black uppercase ${filter===f?'bg-[#FFC300] text-black':'border border-white/20'}`}>{f}</button>
    ))}
   </div>

   <div className="mt-8 grid gap-4">
    {filtered.length===0? <p className="text-gray-500 text-sm">No fixtures — Add in Supabase fixtures table. Example: vs SC VILLA 22 OCT</p> :
     filtered.map(f=>(
      <Link key={f.id} href={`/fixtures/${f.id}`} className="bg-[#12244A] border border-yellow-500/20 rounded-xl p-5 flex justify-between items-center hover:border-yellow-400">
       <div>
        <p className="text-[10px] text-yellow-500 tracking-widest">{f.competition} • {f.venue} • {f.date}</p>
        <p className="font-black mt-1">{f.home? `KATKA FC vs ${f.opponent}` : `${f.opponent} vs KATKA FC`}</p>
        <p className="text-xs text-gray-400">{f.time} EAT</p>
       </div>
       <div className="text-right">
        <p className={`text-xs font-black px-3 py-1 rounded-full ${f.status==='live'?'bg-red-500 animate-pulse': f.status==='finished'?'bg-white text-black':'bg-[#0A1931] border border-yellow-500/30'}`}>
         {f.status==='finished'? `${f.home_score} - ${f.away_score}` : f.status.toUpperCase()}
        </p>
        {f.status==='live' && <p className="text-[10px] text-red-400 mt-1">{f.minute}'</p>}
       </div>
      </Link>
     ))}
   </div>

   <div className="mt-8 bg-[#12244A]/60 p-4 rounded-xl border border-white/10">
    <p className="text-[11px] text-gray-400">💡 MANAGEMENT TIP: Add new fixture in Supabase: opponent, date, time, status=upcoming. It appears live here automatically. No code change.</p>
   </div>
  </div>
 </div>
 )
}