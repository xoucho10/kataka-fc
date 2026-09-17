"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function NewsPage(){
 const [news, setNews] = useState<any[]>([])
 const [cat, setCat] = useState("All")

 useEffect(()=>{
  const fetchNews = async()=>{
   const {data}= await supabase.from("news").select("*").order("created_at",{ascending:false})
   if(data) setNews(data)
  }
  fetchNews()
 },[])

 const filtered = cat==="All"? news : news.filter(n=>n.category===cat)

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[1400px] mx-auto px-6 py-8">
   <div className="flex justify-between items-end">
    <div><h1 className="text-4xl font-black text-[#FFC300]">KATKA NEWS HUB</h1><p className="text-sm text-gray-400 mt-1">Match Reports • Interviews • Transfers • Drum Heritage • {news.length} articles</p></div>
    <p className="text-[11px] text-gray-500">FOR THE PEOPLE. FOR LUFUMBI.</p>
   </div>

   <div className="flex gap-2 mt-6 overflow-x-auto">
    {["All","Match Report","Interview","Transfer","Club","Academy"].map(c=>(
     <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full text-[11px] font-black whitespace-nowrap ${cat===c?'bg-[#FFC300] text-black':'border border-white/20'}`}>{c}</button>
    ))}
   </div>

   {filtered.length===0? <p className="mt-10 text-gray-500 text-sm">No news yet — add in Supabase news table with slug, title, category, excerpt, content, image, tags</p>:
   <div className="mt-8 grid md:grid-cols-3 gap-6">
    {/* FEATURED */}
    {filtered.filter(n=>n.featured).slice(0,1).map(n=>(
     <Link key={n.id} href={`/news/${n.slug}`} className="md:col-span-2 bg-[#12244A] border border-yellow-500/30 rounded-2xl overflow-hidden">
      <div className="h-64 bg-[#0A1931] flex items-center justify-center"><img src={n.image||"/logo.png"} className="w-32 h-32 object-contain"/></div>
      <div className="p-6">
       <div className="flex gap-2 text-[10px]"><span className="bg-red-500 px-2 py-0.5 rounded-full font-bold">FEATURED</span><span className="text-yellow-500">{n.category}</span><span className="text-gray-400">{n.views} views</span></div>
       <h2 className="text-2xl font-black mt-3 text-yellow-400">{n.title}</h2>
       <p className="text-sm text-gray-300 mt-2">{n.excerpt}</p>
       <div className="flex gap-2 mt-3">{n.tags?.map((t:string)=><span key={t} className="text-[9px] bg-[#0A1931] px-2 py-1 rounded-full">#{t}</span>)}</div>
       <p className="text-[10px] text-gray-500 mt-3">By {n.author} • {new Date(n.created_at).toLocaleDateString()} • 3 min read</p>
      </div>
     </Link>
    ))}

    <div className="space-y-4">
     {filtered.slice(0,4).map(n=>(
      <Link key={n.id} href={`/news/${n.slug}`} className="block bg-[#12244A]/60 border border-white/10 rounded-xl p-4 hover:border-yellow-500/30">
       <p className="text-[10px] text-yellow-500">{n.category} • {n.views} views</p>
       <h3 className="font-bold text-sm mt-1 line-clamp-2">{n.title}</h3>
       <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">{n.excerpt}</p>
       <p className="text-[9px] text-gray-500 mt-2">{n.author} • {new Date(n.created_at).toLocaleDateString()}</p>
      </Link>
     ))}
    </div>
   </div>
   }
  </div>
 </div>
 )
}