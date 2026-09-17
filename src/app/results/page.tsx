"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function ResultsPage(){
 const [results, setResults] = useState<any[]>([])
 useEffect(()=>{
  const fetchRes = async()=>{
   const {data}= await supabase.from("fixtures").select("*").eq("status","finished").order("date",{ascending:false})
   if(data) setResults(data)
  }
  fetchRes()
 },[])

 // Fallback static if no finished matches in DB yet
 const display = results.length>0? results : [
  {id:1, opponent:"BUL FC", home:true, date:"2024-10-12", home_score:2, away_score:1, competition:"UPL"},
  {id:2, opponent:"Express FC", home:false, date:"2024-10-05", home_score:0, away_score:0, competition:"UPL"},
  {id:3, opponent:"Vipers SC", home:true, date:"2024-09-28", home_score:1, away_score:2, competition:"UPL"},
 ]

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1000px] mx-auto px-6 py-8">
   <h1 className="text-4xl font-black text-[#FFC300]">RESULTS ARCHIVE</h1>
   <p className="text-sm text-gray-400">Past matches, highlights, drum celebrations</p>

   <div className="mt-8 space-y-4">
    {display.map((r:any)=>(
     <div key={r.id} className="bg-[#12244A] border border-white/10 rounded-xl p-5 flex justify-between items-center">
      <div>
       <p className="text-[10px] text-yellow-500">{r.competition} • {r.date}</p>
       <p className="font-black">{r.home? `KATKA ${r.home_score} - ${r.away_score} ${r.opponent}` : `${r.opponent} ${r.home_score} - ${r.away_score} KATKA`}</p>
       <p className="text-[11px] text-gray-400 mt-1">{r.home_score>r.away_score && r.home? "WIN • +3 pts • Drum beat" : r.home_score===r.away_score? "DRAW • +1 pt" : "LOSS"}</p>
      </div>
      <div className="flex gap-2">
       <Link href={`/fixtures/${r.id}`} className="text-[11px] bg-[#0A1931] border border-white/20 px-4 py-2 rounded-full">MATCH CENTER</Link>
       <button className="text-[11px] bg-[#FFC300] text-black px-4 py-2 rounded-full font-black">HIGHLIGHTS</button>
      </div>
     </div>
    ))}
   </div>
  </div>
 </div>
 )
}