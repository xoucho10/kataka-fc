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

  const upcomingFixtures = [
    { date: "22 OCT", time: "16:00 EAT", home: "KATKA FC", away: "SC VILLA", venue: "Lufumbi Ground", comp: "UPL" },
    { date: "26 OCT", time: "16:00 EAT", home: "KCCA FC", away: "KATKA FC", venue: "Lugogo", comp: "UPL" },
    { date: "30 OCT", time: "15:00 EAT", home: "KATKA FC", away: "BUL FC", venue: "Lufumbi Ground", comp: "UPL" },
  ]

  const news = [
    { id: 1, title: "Kataka FC Secures Crucial Win Over BUL FC", cat: "MATCH REPORT", date: "12 Oct 2024", img: "https://images.unsplash.com/photo-1579952363873-27f3bfad9c0d?w=400&q=60&auto=format&fit=crop" },
    { id: 2, title: "M. Kibirige Named Player of the Month", cat: "CLUB NEWS", date: "10 Oct 2024", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=60&auto=format&fit=crop" },
    { id: 3, title: "New 2024/25 Home Kit Officially Unveiled", cat: "SHOP", date: "08 Oct 2024", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&q=60&auto=format&fit=crop" },
  ]

  const players = [
    { id:1, name: "M. KIBIRIGE", num: 10, pos: "MIDFIELDER", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=60&auto=format&fit=crop" },
    { id:2, name: "J. OKETCH", num: 9, pos: "STRIKER", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=60&auto=format&fit=crop" },
    { id:3, name: "D. MUSISI", num: 1, pos: "GOALKEEPER", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=60&auto=format&fit=crop" },
    { id:4, name: "S. LWANGA", num: 8, pos: "MIDFIELDER", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60&auto=format&fit=crop" },
    { id:5, name: "P. MUGABI", num: 4, pos: "DEFENDER", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60&auto=format&fit=crop" },
    { id:6, name: "R. KASOZI", num: 7, pos: "WINGER", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=60&auto=format&fit=crop" },
    { id:7, name: "A. KIZITO", num: 5, pos: "DEFENDER", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60&auto=format&fit=crop" },
    { id:8, name: "F. SSEMAKULA", num: 11, pos: "STRIKER", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&q=60&auto=format&fit=crop" },
  ]

  const shop = [
    { id:"home-kit-24-25", name: "HOME KIT 24/25", price: "UGX 85,000", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a0?w=400&q=60&auto=format&fit=crop" },
    { id:"away-kit-24-25", name: "AWAY KIT 24/25", price: "UGX 85,000", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=60&auto=format&fit=crop" },
    { id:"training-jersey", name: "TRAINING JERSEY", price: "UGX 55,000", img: "https://images.unsplash.com/photo-1580087256930-1d4a2c0d3f7a?w=400&q=60&auto=format&fit=crop" },
  ]

  return (
    <div className="min-h-screen bg-[#0A1931] text-white overflow-hidden">

      <main className="max-w-[1400px] mx-auto px-6 py-8 grid lg:grid-cols-[1.1fr_1.2fr_0.8fr] gap-8">
        <div>
          <h1 className="text-[38px] font-black leading-[0.9] text-[#FFC300]">FOR THE PEOPLE. FOR LUFUMBI. FOR GLORY.</h1>
          <p className="mt-4 text-sm text-gray-300">
            <span className="text-white font-bold">EST. 2000 — Kataka Football Club Lufumbi —</span><br/>
            Proudly representing Uganda in the Uganda Premier League<br/>
            <span className="text-xs text-gray-400 mt-2 block">Follow the Eagles as they chase glory this season. Explore the squad, buy tickets, and join the journey with us.</span>
          </p>
          <div className="flex gap-3 mt-6">
            <Link href="/tickets" className="bg-[#FFC300] text-black px-6 py-3 rounded-lg text-xs font-black leading-tight text-center">BUY MATCH TICKETS<br/>VS SC VILLA →</Link>
            <Link href="/fixtures" className="border border-yellow-500/50 px-6 py-3 rounded-lg text-xs font-bold">VIEW FIXTURES</Link>
          </div>
          <div className="mt-6 bg-[#12244A]/60 border border-white/10 rounded-xl p-4">
            <h3 className="text-[#FFC300] text-xs font-black">DRUM HERITAGE</h3>
            <p className="text-[11px] text-gray-400 mt-1">The traditional drum is the heart of Kataka FC. Played at every home match since 2000, it celebrates Lufumbi&apos;s culture and community spirit.</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10"><p className="text-[9px] text-yellow-500">LEAGUE POSITION</p><p className="font-black">4TH</p><p className="text-[9px]">UPL • 12 PTS</p></div>
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10"><p className="text-[9px] text-yellow-500">SEASON RECORD</p><p className="font-black">W7 • D3 • L2</p><p className="text-[9px]">12 MATCHES PLAYED</p></div>
              <div className="bg-[#0A1931] p-3 rounded-lg text-center border border-white/10"><p className="text-[9px] text-yellow-500">GOALS</p><p className="font-black">18 – 9</p><p className="text-[9px]">+9 GOAL DIFFERENCE</p></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop" alt="Player" className="w-full h-[580px] object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur p-3 rounded-xl border border-white/10 flex justify-between items-center">
            <div><p className="text-[10px] text-yellow-400 font-black">MAN OF THE MATCH</p><p className="font-black text-sm">J. OKETCH • 2 GOALS</p></div>
            <Link href="/highlights" className="bg-[#FFC300] text-black text-[10px] font-black px-3 py-1.5 rounded-full">WATCH HIGHLIGHTS</Link>
          </div>
        </div>
        <div className="space-y-3">
          {players.slice(0,3).map((p) => (
            <Link key={p.id} href={`/squad/${p.id}`} className="block bg-gradient-to-b from-[#1A2F60] to-[#0A1931] border border-yellow-500/30 rounded-xl p-4 text-center hover:border-[#FFC300] hover:scale-[1.02] transition cursor-pointer">
              <p className="text-[9px] bg-yellow-500 text-black px-2 py-0.5 rounded-full inline-block font-black">FEATURED PLAYER</p>
              <img src={p.img} className="w-16 h-16 rounded-full mx-auto mt-2 object-cover border-2 border-yellow-500/30" alt={p.name} loading="lazy" />
              <h4 className="font-black mt-2 text-yellow-400 text-sm">{p.name}</h4>
              <p className="text-[10px] leading-tight">{p.num}<br/>{p.pos}</p>
              <p className="text-[9px] text-gray-400 mt-1">APPS 12 • GOALS 3 • ASSISTS 5</p>
            </Link>
          ))}
        </div>
      </main>

      <section className="max-w-[1400px] mx-auto px-6 py-8 grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="bg-[#12244A] border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-black text-[#FFC300] tracking-widest text-sm">UPCOMING FIXTURES</h2>
            <Link href="/fixtures" className="text-[11px] text-gray-400 hover:text-white">VIEW ALL →</Link>
          </div>
          <div className="space-y-3">
            {upcomingFixtures.map((f,i) => (
              <div key={i} className="flex items-center justify-between bg-[#0A1931] border border-white/5 rounded-xl px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="text-center"><p className="text-yellow-400 font-black text-xs">{f.date}</p><p className="text-[10px] text-gray-400">{f.time}</p></div>
                  <div className="h-8 w-[1px] bg-white/10"></div>
                  <div><p className="font-bold text-sm">{f.home} <span className="text-gray-500 font-normal">vs</span> {f.away}</p><p className="text-[10px] text-gray-400">{f.venue} • {f.comp}</p></div>
                </div>
                <Link href="/tickets" className="bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full">BUY TICKET</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#12244A] border border-white/10 rounded-2xl p-5">
          <h2 className="font-black text-[#FFC300] tracking-widest text-sm mb-4">UPL TABLE • TOP 5</h2>
          <div className="space-y-2 text-[12px]">
            <div className="flex justify-between text-[10px] text-gray-400 px-2"><span># CLUB</span><span>P W D PTS</span></div>
            {[
              { club: "SC Villa", p:12, w:8, d:2, pts:26 },
              { club: "Vipers SC", p:12, w:7, d:3, pts:24 },
              { club: "KCCA FC", p:12, w:6, d:4, pts:22 },
              { club: "KATKA FC", p:12, w:7, d:3, pts:24, active:true },
              { club: "BUL FC", p:12, w:5, d:3, pts:18 },
            ].map((t,i) => (
              <div key={i} className={`flex justify-between px-3 py-2.5 rounded-lg ${t.active? 'bg-[#FFC300] text-black font-black' : 'bg-[#0A1931] border border-white/5'}`}>
                <span>{i+1}. {t.club}</span><span>{t.p} {t.w} {t.d} {t.pts}</span>
              </div>
            ))}
          </div>
          <Link href="/table" className="block text-center mt-4 text-[11px] bg-white/10 py-2 rounded-lg hover:bg-white/20">FULL TABLE</Link>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-5"><h2 className="font-black text-2xl text-[#FFC300]">LATEST NEWS</h2><Link href="/news" className="text-xs bg-[#FFC300] text-black font-black px-4 py-2 rounded-full">VIEW ALL NEWS</Link></div>
        <div className="grid md:grid-cols-3 gap-5">
          {news.map(n => (
            <Link key={n.id} href={`/news/${n.id}`} className="group bg-[#12244A] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition block">
              <img src={n.img} className="h-48 w-full object-cover group-hover:scale-105 transition duration-500" alt={n.title} loading="lazy" />
              <div className="p-4"><p className="text-[10px] text-yellow-400 font-black tracking-widest">{n.cat} • {n.date}</p><h3 className="font-bold mt-2 leading-tight group-hover:text-yellow-400">{n.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-5"><h2 className="font-black text-2xl text-[#FFC300]">FIRST TEAM SQUAD</h2><Link href="/squad" className="text-xs border border-yellow-500/50 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black">VIEW FULL SQUAD</Link></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {players.map((p) => (
            <Link key={p.id} href={`/squad/${p.id}`} prefetch className="bg-gradient-to-b from-[#1A2F60] to-[#0A1931] border border-white/10 rounded-2xl p-4 text-center group hover:border-yellow-500/60 hover:scale-[1.02] transition block">
              <div className="relative"><img src={p.img} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white/10 group-hover:border-yellow-400" alt={p.name} loading="lazy" /><span className="absolute -bottom-1 right-6 bg-[#FFC300] text-black text-[10px] font-black w-7 h-7 rounded-full grid place-items-center">{p.num}</span></div>
              <h4 className="font-black mt-3 text-sm text-white">{p.name}</h4><p className="text-[11px] text-yellow-400 tracking-widest">{p.pos}</p>
              <div className="flex justify-center gap-2 mt-3"><span className="text-[9px] bg-white/10 px-2 py-1 rounded-full">12 APPS</span><span className="text-[9px] bg-white/10 px-2 py-1 rounded-full">3 GOALS</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="bg-[#FFC300] rounded-[24px] p-6 md:p-8 text-black">
          <div className="flex justify-between items-center mb-6"><h2 className="font-black text-2xl">OFFICIAL STORE</h2><Link href="/shop" className="bg-black text-[#FFC300] text-xs font-black px-5 py-2.5 rounded-full">VISIT STORE →</Link></div>
          <div className="grid md:grid-cols-3 gap-6">
            {shop.map((s) => (
              <Link key={s.id} href={`/shop/${s.id}`} prefetch className="bg-black rounded-2xl p-4 text-white border border-white/10 hover:border-white/30 hover:scale-[1.02] transition block">
                <img src={s.img} className="h-56 w-full object-cover rounded-xl bg-white/5" alt={s.name} loading="lazy" />
                <div className="flex justify-between items-center mt-4"><div><h4 className="font-black text-sm">{s.name}</h4><p className="text-yellow-400 font-bold text-sm">{s.price}</p></div><div className="bg-[#FFC300] text-black w-10 h-10 rounded-full font-black grid place-items-center">+</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#12244A]/50 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between items-center gap-6">
          <p className="text-[11px] tracking-[0.3em] text-gray-400 font-black">OFFICIAL PARTNERS</p>
          <div className="flex gap-8 items-center opacity-60">
            <span className="font-black text-xl">MTN</span><span className="font-black text-xl">NILE BREWERIES</span><span className="font-black text-xl">CAF</span><span className="font-black text-xl">UPL</span><span className="font-black text-xl">JOMA</span>
          </div>
          <Link href="/partners" className="text-[11px] text-yellow-400 font-black">BECOME A SPONSOR →</Link>
        </div>
      </section>

      <div className="border-t border-white/10 py-3 px-6 flex justify-between text-[11px] text-yellow-500/80 max-w-[1400px] mx-auto">
        <span>NEXT MATCH — 22 OCT • 16:00 EAT • LUFUMBI GROUND</span>
        <span className="text-gray-400">NEWS • FAN ZONE • CLUB HISTORY • PARTNERS</span>
      </div>
    </div>
  )
}