"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function MatchCenter(){
 const {id}=useParams()
 const [match,setMatch]=useState<any>(null)

 useEffect(()=>{
  const fetchM= async()=>{
   const {data}= await supabase.from("fixtures").select("*").eq("id",id).single()
   if(data) setMatch(data)
  }
  if(id) fetchM()
 },[id])

 if(!match) return <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-yellow-400">Loading Match Center...</div>

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1200px] mx-auto px-6 py-6">
   <Link href="/fixtures" className="text-[11px] text-yellow-400">← ALL FIXTURES</Link>

   {/* SCOREBOARD — LIKE PREMIER LEAGUE */}
   <div className="mt-6 bg-gradient-to-b from-[#12244A] to-[#0A1931] border border-yellow-500/30 rounded-2xl p-8 text-center">
    <p className="text-[10px] text-yellow-500 tracking-widest">{match.competition} • {match.venue} • {match.status.toUpperCase()}</p>
    <div className="flex justify-center items-center gap-8 mt-4">
     <div><img src="/logo.png" className="w-16 h-16 mx-auto"/><p className="font-black mt-2">KATKA FC</p></div>
     <div className="bg-black px-8 py-3 rounded-xl">
      <p className="text-4xl font-black">{match.status==='finished'? `${match.home_score} : ${match.away_score}` : 'VS'}</p>
      <p className="text-[10px] text-red-400">{match.status==='live'? `${match.minute}' LIVE` : match.time}</p>
     </div>
     <div><div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center font-black">{match.opponent?.slice(0,3)}</div><p className="font-black mt-2">{match.opponent}</p></div>
    </div>
   </div>

   <div className="grid md:grid-cols-[2fr_1fr] gap-6 mt-6">
    {/* COMMENTARY */}
    <div className="bg-[#12244A]/60 border border-white/10 rounded-xl p-5">
     <h3 className="font-black text-yellow-400 text-sm">LIVE COMMENTARY — LUFUMBI DRUM</h3>
     <div className="mt-4 space-y-3 text-xs">
      <p><span className="text-yellow-500 font-bold">78'</span> GOAL! M. Kibirige #10 scores! Drum beating in Lufumbi! 2-1 Kataka!</p>
      <p><span className="text-gray-400">65'</span> Substitution: J. Oketcho IN, J. Mubiru OUT</p>
      <p><span className="text-gray-400">45'</span> Half Time — Kataka controlling midfield</p>
      <p><span className="text-gray-400">12'</span> Yellow card — P. Wadada</p>
      <p className="text-gray-500 italic mt-4">For management: This commentary can be edited live in Supabase — add new row to update fans.</p>
     </div>
    </div>

    {/* LINEUP + STATS */}
    <div className="space-y-4">
     <div className="bg-[#12244A] border border-white/10 rounded-xl p-4">
      <h4 className="text-xs font-black text-yellow-400">STARTING XI</h4>
      <p className="text-[11px] text-gray-300 mt-2">GK: S. Ssenfuma #1<br/>DEF: P. Wadada #5<br/>MID: J. Mubiru #8, M. Kibirige #10 (C)<br/>FWD: J. Oketcho #9</p>
     </div>
     <div className="bg-[#12244A] border border-white/10 rounded-xl p-4">
      <h4 className="text-xs font-black text-yellow-400">MATCH STATS</h4>
      <div className="text-[11px] mt-2 space-y-2">
       <div className="flex justify-between"><span>Possession</span><span>58% - 42%</span></div>
       <div className="flex justify-between"><span>Shots</span><span>12 - 5</span></div>
       <div className="flex justify-between"><span>On Target</span><span>6 - 2</span></div>
      </div>
     </div>
     <Link href="/tickets" className="block bg-[#FFC300] text-black text-center py-3 rounded-full font-black text-xs">BUY TICKETS FOR NEXT MATCH</Link>
    </div>
   </div>
  </div>
 </div>
 )
}