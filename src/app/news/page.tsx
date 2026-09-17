"use client"
import Link from "next/link"
import { useState } from "react"

const FALLBACK_NEWS = [
  { slug: "kataka-beats-bul-2-1", title: "KATKA STUNS BUL FC 2-1 AT LUFUMBI", category: "Match Report", excerpt: "Eagles fly high as M. Kibirige scores late winner in Week 12.", image: "https://images.unsplash.com/photo-1579952363873-27f3bfad9c0d?w=600&q=60", date: "17 Sep 2024" },
  { slug: "coach-interview-drums", title: "COACH: 'DRUM IS OUR HEARTBEAT'", category: "Interview", excerpt: "Head coach on Lufumbi heritage and UPL top 4 push.", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=60", date: "16 Sep 2024" },
  { slug: "new-signing-winger", title: "KATKA SIGN SPEEDY WINGER FROM KCCA", category: "Transfer", excerpt: "21-year-old joins on 2-year deal, W7 D3 L2 form continues.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c35?w=600&q=60", date: "15 Sep 2024" },
  { slug: "lufumbi-ground-upgrade", title: "LUFUMBI GROUND TO GET NEW STAND", category: "Club", excerpt: "5,000 capacity upgrade approved by management.", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9?w=600&q=60", date: "14 Sep 2024" },
  { slug: "academy-wins-derby", title: "ACADEMY WINS MBALE DERBY 3-0", category: "Academy", excerpt: "U17 Eagles shine ahead of main game.", image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=60", date: "13 Sep 2024" },
]

export default function NewsPage() {
  const [filter, setFilter] = useState("All")
  const cats = ["All","Match Report","Interview","Transfer","Club","Academy"]

  const filtered = filter==="All"? FALLBACK_NEWS : FALLBACK_NEWS.filter(n=>n.category===filter)

  return (
    <div className="min-h-screen bg-[#0A1931] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#FFC300]">KATKA NEWS HUB</h1>
        <div className="flex justify-between mt-2">
          <p className="text-slate-400 text-sm">Match Reports • Interviews • Transfers • Drum Heritage • {filtered.length} articles</p>
          <p className="text-[10px] text-slate-500 hidden md:block">FOR THE PEOPLE.</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {cats.map(c => (
            <button key={c} onClick={()=>setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-black border ${filter===c? 'bg-[#FFC300] text-black border-[#FFC300]' : 'bg-[#12244A] text-white border-white/10 hover:border-[#FFC300]/50'}`}>
              {c}
            </button>
          ))}
        </div>

        {filtered.length===0? (
          <p className="mt-10 text-slate-500">No news yet — add in Supabase news table</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {filtered.map(n => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="bg-[#12244A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC300]/50 transition group">
                <img src={n.image} alt={n.title} className="h-48 w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-[#FFC300] text-black px-2 py-1 rounded-full font-black">{n.category}</span>
                    <span className="text-[11px] text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="font-black mt-3 leading-tight group-hover:text-[#FFC300]">{n.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}