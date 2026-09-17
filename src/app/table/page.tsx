"use client"
import { useEffect, useState } from "react"

const UPL_TABLE = [
 { pos:1, team:"Vipers SC", pl:12, w:8, d:2, l:2, gd:12, pts:26 },
 { pos:2, team:"SC Villa", pl:12, w:7, d:3, l:2, gd:9, pts:24 },
 { pos:3, team:"KCCA FC", pl:12, w:7, d:2, l:3, gd:8, pts:23 },
 { pos:4, team:"KATKA FC", pl:12, w:7, d:3, l:2, gd:9, pts:24, isKataka:true },
 { pos:5, team:"BUL FC", pl:12, w:6, d:3, l:3, gd:5, pts:21 },
 { pos:6, team:"Express FC", pl:12, w:5, d:4, l:3, gd:3, pts:19 },
 { pos:7, team:"URA FC", pl:12, w:4, d:5, l:3, gd:2, pts:17 },
 { pos:8, team:"Wakiso Giants", pl:12, w:4, d:3, l:5, gd:-2, pts:15 },
]

export default function TablePage(){
 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1000px] mx-auto px-6 py-8">
   <h1 className="text-4xl font-black text-[#FFC300]">UPL TABLE 2024/25</h1>
   <p className="text-sm text-gray-400 mt-2">Uganda Premier League — Kataka FC currently 4th • Drum beating for Top 4 finish</p>

   <div className="mt-8 bg-[#12244A] border border-yellow-500/30 rounded-2xl overflow-hidden">
    <div className="grid grid-cols-12 bg-[#0A1931] p-3 text-[10px] font-black tracking-widest text-yellow-500">
     <div className="col-span-1">#</div><div className="col-span-5">TEAM</div><div className="col-span-1">PL</div><div className="col-span-1">W</div><div className="col-span-1">D</div><div className="col-span-1">L</div><div className="col-span-1">GD</div><div className="col-span-1">PTS</div>
    </div>
    {UPL_TABLE.map(row=>(
     <div key={row.pos} className={`grid grid-cols-12 p-4 text-sm border-t border-white/10 items-center ${row.isKataka?'bg-[#FFC300] text-black font-black':''}`}>
      <div className="col-span-1">{row.pos}</div>
      <div className="col-span-5 flex items-center gap-2">
       {row.isKataka && <img src="/logo.png" className="w-6 h-6"/>}
       {row.team}
       {row.isKataka && <span className="text-[9px] bg-black text-yellow-400 px-2 py-0.5 rounded-full">LUFUMBI</span>}
      </div>
      <div className="col-span-1">{row.pl}</div><div className="col-span-1">{row.w}</div><div className="col-span-1">{row.d}</div><div className="col-span-1">{row.l}</div><div className="col-span-1">{row.gd>0?`+${row.gd}`:row.gd}</div><div className="col-span-1 font-black">{row.pts}</div>
     </div>
    ))}
   </div>

   <div className="mt-6 grid md:grid-cols-3 gap-4 text-[11px]">
    <div className="bg-[#12244A]/60 p-4 rounded-xl border border-white/10"><p className="text-yellow-400 font-bold">FORM: KATKA FC</p><p className="mt-1">Last 5: <span className="text-green-400">W W D W L</span> — 10 pts from 15</p></div>
    <div className="bg-[#12244A]/60 p-4 rounded-xl border border-white/10"><p className="text-yellow-400 font-bold">NEXT: TOP 4 RACE</p><p className="mt-1">Need 6 pts to go 2nd — SC Villa vs Kataka 22 OCT</p></div>
    <div className="bg-[#12244A]/60 p-4 rounded-xl border border-white/10"><p className="text-yellow-400 font-bold">DRUM HERITAGE</p><p className="mt-1">Lufumbi drum beats for every Kataka goal since 2000</p></div>
   </div>
  </div>
 </div>
 )
}