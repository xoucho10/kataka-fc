"use client"
import { useState } from "react"
import Link from "next/link"

type Fixture = {
  id: number
  opponent: string
  date: string
  time: string
  venue: string
  status: string
  score: string
  minute: string
  comp: string
  highlight?: boolean
}

const FALLBACK_FIXTURES: Fixture[] = [
  { id: 1, opponent: "BUL FC", date: "12 SEP 2024", time: "4:00 PM", venue: "Lufumbi Ground", status: "finished", score: "KATKA 2-1 BUL", minute: "FT", comp: "UPL • Week 12" },
  { id: 2, opponent: "SC VILLA", date: "20 SEP 2024", time: "4:00 PM", venue: "Lufumbi Ground", status: "upcoming", score: "vs SC VILLA", minute: "TICKETS LIVE", comp: "UPL • Week 13", highlight: true },
  { id: 3, opponent: "KCCA FC", date: "27 SEP 2024", time: "4:00 PM", venue: "MTN Omondi", status: "upcoming", score: "vs KCCA FC", minute: "AWAY", comp: "UPL • Week 14" },
  { id: 4, opponent: "VIPERS SC", date: "04 OCT 2024", time: "4:00 PM", venue: "Lufumbi Ground", status: "upcoming", score: "vs VIPERS SC", minute: "TOP 4 CLASH", comp: "UPL • Week 15" },
  { id: 5, opponent: "EXPRESS FC", date: "05 SEP 2024", time: "4:00 PM", venue: "Mutessa II", status: "finished", score: "EXPRESS 0-0 KATKA", minute: "FT", comp: "UPL • Week 11" },
  { id: 6, opponent: "Maroons FC", date: "TODAY", time: "LIVE", venue: "Lufumbi Ground", status: "live", score: "KATKA 1-0 MAROONS", minute: "67'", comp: "UPL • LIVE", highlight: true },
]

const TABLE = [
  { pos: 1, team: "Vipers SC", pl: 12, w: 8, d: 2, l: 2, pts: 26 },
  { pos: 2, team: "KCCA FC", pl: 12, w: 7, d: 3, l: 2, pts: 24 },
  { pos: 3, team: "BUL FC", pl: 12, w: 7, d: 3, l: 2, pts: 24 },
  { pos: 4, team: "KATKA FC", pl: 12, w: 7, d: 3, l: 2, pts: 24, highlight: true },
  { pos: 5, team: "SC Villa", pl: 12, w: 6, d: 4, l: 2, pts: 22 },
]

export default function FixturesPage() {
  const [filter, setFilter] = useState("ALL")
  const filters = ["ALL","UPCOMING","LIVE","FINISHED"]

  const filtered = filter==="ALL"? FALLBACK_FIXTURES : FALLBACK_FIXTURES.filter(f=>f.status===filter.toLowerCase())

  return (
    <div className="min-h-screen bg-[#0A1931] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#FFC300]">FIXTURES & RESULTS</h1>
        <p className="text-slate-400 text-sm mt-2">2024/25 Uganda Premier League — Kataka FC Lufumbi • 4TH Place W7 D3 L2</p>

        <div className="flex gap-3 mt-6 flex-wrap">
          {filters.map(f=>(
            <button key={f} onClick={()=>setFilter(f)} className={`px-6 py-2.5 rounded-full text-sm font-black border ${filter===f? 'bg-[#FFC300] text-black border-[#FFC300]' : 'bg-transparent border-white/20 hover:border-[#FFC300]/50'}`}>{f}</button>
          ))}
        </div>

        {filtered.length===0? (
          <p className="mt-10 text-slate-500">No fixtures — Add in Supabase fixtures table. Example: vs SC VILLA 22 OCT</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-3">
              {filtered.map(f=>(
                <div key={f.id} className={`rounded-2xl p-5 border flex justify-between items-center ${f.status==='live'?'bg-red-600/10 border-red-500/50': f.highlight? 'bg-[#12244A] border-[#FFC300]/30' : 'bg-[#12244A] border-white/10'}`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-1 rounded-full font-black ${f.status==='finished'?'bg-white/20': f.status==='live'?'bg-red-600 text-white animate-pulse': 'bg-[#FFC300] text-black'}`}>{f.minute}</span>
                      <span className="text-[10px] text-slate-400">{f.comp}</span>
                    </div>
                    <p className="font-black mt-2">{f.score}</p>
                    <p className="text-xs text-slate-400 mt-1">{f.date} • {f.time} • {f.venue}</p>
                  </div>
                  <div className="text-right">
                    {f.status==='upcoming' ? <Link href="/tickets" className="bg-[#FFC300] text-black px-4 py-2 rounded-full text-xs font-black">BUY TICKET →</Link> : f.status==='live' ? <span className="text-red-500 font-black text-sm">● LIVE 67'</span> : <span className="text-xs text-slate-500">FT</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white text-black rounded-2xl p-5">
                <h3 className="font-black text-sm tracking-widest">UPL TABLE • TOP 5</h3>
                <div className="mt-4 space-y-2">
                  <div className="grid grid-cols-5 text-[10px] text-gray-500 font-bold"><span># TEAM</span><span className="text-center">PL</span><span className="text-center">W</span><span className="text-center">L</span><span className="text-right">PTS</span></div>
                  {TABLE.map(t=>(
                    <div key={t.pos} className={`grid grid-cols-5 py-2 px-2 rounded text-sm ${(t as any).highlight?'bg-[#0A1931] text-white font-black':'border-b'}`}>
                      <span>{t.pos}. {t.team}</span><span className="text-center">{t.pl}</span><span className="text-center">{t.w}</span><span className="text-center">{t.l}</span><span className="text-right">{t.pts}</span>
                    </div>
                  ))}
                </div>
                <Link href="/club" className="block mt-4 text-center bg-[#0A1931] text-white py-2 rounded-full text-xs font-black">VIEW FULL TABLE →</Link>
              </div>

              <div className="bg-[#12244A] border border-white/10 rounded-2xl p-5">
                <h3 className="font-black text-xs tracking-widest text-[#FFC300]">💡 MANAGEMENT TIP</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Add new fixture in Supabase: opponent, date, time, status=upcoming. It appears live here automatically. No code change. For LIVE, set status=live and score updates in ticker.</p>
              </div>

              <div className="bg-[#FFC300] text-black rounded-2xl p-5">
                <h3 className="font-black text-sm">NEXT AT LUFUMBI</h3>
                <p className="font-black text-xl mt-2">KATKA vs SC VILLA</p>
                <p className="text-xs mt-1">SAT 20 SEP • 4PM • 5,000 capacity • Drum heritage 🥁</p>
                <Link href="/tickets" className="inline-block mt-3 bg-black text-[#FFC300] px-5 py-2 rounded-full text-xs font-black">GET TICKETS • 20K</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}