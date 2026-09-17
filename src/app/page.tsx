"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function HomePage() {
  const [nextMatch, setNextMatch] = useState<any>(null)

  useEffect(() => {
    const fetchNext = async () => {
      const { data } = await supabase.from('fixtures').select('*').eq('status','upcoming').order('date').limit(1).single()
      if(data) setNextMatch(data)
    }
    fetchNext()
  }, [])

  return (
    <div className="min-h-screen bg-[#0A1931] text-white overflow-hidden">
      {/* TOP NAV */}
      <header className="border-b border-yellow-500/20 bg-[#0A1931]/95 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kataka FC" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="font-black text-yellow-400 tracking-wider leading-none">KATKA FC</h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em]">LUFUMBI • UGANDA</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-xs font-bold tracking-widest">
            <Link href="/" className="text-yellow-400">HOME</Link>
            <Link href="/squad" className="hover:text-yellow-400">SQUAD</Link>
            <Link href="/fixtures" className="hover:text-yellow-400">FIXTURES</Link>
            <Link href="/news" className="hover:text-yellow-400">NEWS</Link>
            <Link href="/club" className="hover:text-yellow-400">CLUB</Link>
            <Link href="/tickets" className="hover:text-yellow-400">TICKETS</Link>
            <Link href="/shop" className="hover:text-yellow-400">SHOP</Link>
          </nav>
          <Link href="/membership" className="bg-[#FFC300] text-black px-5 py-2.5 rounded-full text-xs font-black hover:bg-yellow-300">
            JOIN MEMBERSHIP
          </Link>
        </div>
      </header>

      {/* LIVE TICKER */}
      <div className="bg-[#12244A] border-y border-yellow-500/30 text-[11px] py-2 flex gap-6 overflow-x-auto whitespace-nowrap px-6">
        <span className="text-red-500 font-bold animate-pulse">● LIVE • UPL PREMIER LEAGUE — WEEK 12</span>
        <span>KATKA 2 — 1 BUL FC • 78'</span>
        <span className="text-gray-400">SC VILLA 1 — 1 VIPERS • FT</span>
        <span>KCCA 0 — 0 EXPRESS • 45'</span>
      </div>

      {/* HERO — EXACT TEMPLATE */}
      <main className="max-w-[1400px] mx-auto px-6 py-8 grid lg:grid-cols-[1.1fr_1.2fr_0.8fr] gap-8">
        {/* LEFT */}
        <div>
          <h1 className="text-[38px] font-black leading-[0.9] text-[#FFC300]">
            FOR THE PEOPLE. FOR LUFUMBI. FOR GLORY.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            <span className="text-white font-bold">EST. 2000 — Kataka Football Club Lufumbi —</span><br/>
            Proudly representing Uganda in the Uganda Premier League<br/>
            <span className="text-xs text-gray-400 mt-2 block">Follow the Eagles as they chase glory this season. Explore the squad, buy tickets, and join the journey with us.</span>
          </p>

          <div className="flex gap-3 mt-6">
            <Link href="/tickets" className="bg-[#FFC300] text-black px-6 py-3 rounded-lg text-xs font-black">BUY MATCH TICKETS<br/>VS SC VILLA →</Link>
            <Link href="/fixtures" className="border border-yellow-500/50 px-6 py-3 rounded-lg text-xs font-bold">VIEW FIXTURES</Link>
          </div>

          <div className="mt-6 bg-[#12244A]/60 border border-white/10 rounded-xl p-4">
            <h3 className="text-[#FFC300] text-xs font-black">DRUM HERITAGE</h3>
            <p className="text-[11px] text-gray-400 mt-1">The traditional drum is the heart of Kataka FC. Played at every home match since 2000, it celebrates Lufumbi's culture and community spirit.</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10">
                <p className="text-[9px] text-yellow-500">LEAGUE POSITION</p>
                <p className="font-black">4TH</p>
                <p className="text-[9px]">UPL • 12 PTS</p>
              </div>
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10">
                <p className="text-[9px] text-yellow-500">SEASON RECORD</p>
                <p className="font-black">W7 • D3 • L2</p>
                <p className="text-[9px]">12 MATCHES PLAYED</p>
              </div>
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10">
                <p className="text-[9px] text-yellow-500">GOALS</p>
                <p className="font-black">18 – 9</p>
                <p className="text-[9px]">+9 GOAL DIFFERENCE</p>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER — PLAYER */}
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800" alt="Player" className="w-full h-[580px] object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-transparent rounded-2xl"></div>
        </div>

        {/* RIGHT — FEATURED PLAYERS */}
        <div className="space-y-3">
          {[
            { name: "M. KIBIRIGE", num: 10, pos: "MIDFIELDER", stat: "APPS 12 • GOALS 3 • ASSISTS 5" },
            { name: "J. OKETCH", num: 9, pos: "STRIKER", stat: "APPS 12 • GOALS 6 • RATING 7.6" },
            { name: "D. MUSISI", num: 1, pos: "GOALKEEPER", stat: "CLEAN SHEETS 4 • SAVES 32" },
          ].map((p,i) => (
            <div key={i} className="bg-gradient-to-b from-[#1A2F60] to-[#0A1931] border border-yellow-500/30 rounded-xl p-4 text-center">
              <p className="text-[9px] bg-yellow-500 text-black px-2 py-0.5 rounded-full inline-block">FEATURED PLAYER</p>
              <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mt-2"></div>
              <h4 className="font-black mt-2 text-yellow-400">{p.name}</h4>
              <p className="text-[10px]">{p.num}<br/>{p.pos}</p>
              <p className="text-[9px] text-gray-400 mt-1">{p.stat}</p>
            </div>
          ))}
        </div>
      </main>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-3 px-6 flex justify-between text-[11px] text-yellow-500/80">
        <span>NEXT MATCH — 22 OCT • 16:00 EAT • LUFUMBI GROUND</span>
        <span className="text-gray-400">NEWS • FAN ZONE • CLUB HISTORY • PARTNERS</span>
      </div>

      <footer className="text-center text-[9px] text-gray-500 py-2">© 2024 KATAKA FOOTBALL CLUB LUFUMBI • EST 2000 • UGANDA PREMIER LEAGUE • OFFICIAL CLUB WEBSITE</footer>
    </div>
  )
}