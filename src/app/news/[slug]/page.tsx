"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function SingleNews(){
 const {slug}=useParams()
 const [article,setArticle]=useState<any>(null)
 const [related,setRelated]=useState<any[]>([])

 useEffect(()=>{
  const fetchA= async()=>{
   const {data}= await supabase.from("news").select("*").eq("slug",slug).single()
   if(data){
    setArticle(data)
    await supabase.from("news").update({views:(data.views||0)+1}).eq("id",data.id)
    const {data:rel}= await supabase.from("news").select("*").neq("id",data.id).eq("category",data.category).limit(3)
    if(rel) setRelated(rel)
   }
  }
  if(slug) fetchA()
 },[slug])

 if(!article) return <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-yellow-400">Loading News...</div>

 return(
 <div className="min-h-screen bg-[#0A1931] text-white">
  <div className="max-w-[900px] mx-auto px-6 py-8">
   <Link href="/news" className="text-[11px] text-yellow-400">← ALL NEWS</Link>

   <div className="mt-6">
    <div className="flex gap-2 text-[11px]"><span className="bg-[#FFC300] text-black px-3 py-1 rounded-full font-black">{article.category}</span><span className="border border-white/20 px-3 py-1 rounded-full">{article.views+1} VIEWS</span><span className="border border-white/20 px-3 py-1 rounded-full">{article.featured?"FEATURED":""}</span></div>
    <h1 className="text-4xl font-black mt-4 leading-tight">{article.title}</h1>
    <p className="text-gray-400 mt-3 text-sm">{article.excerpt}</p>

    <div className="flex gap-4 mt-4 text-[11px] text-gray-400 border-y border-white/10 py-3">
     <span>By {article.author}</span><span>• {new Date(article.created_at).toLocaleDateString()} • {new Date(article.created_at).toLocaleTimeString()}</span><span>• 4 min read</span>
     <div className="flex gap-1 ml-auto">{article.tags?.map((t:string)=><span key={t} className="bg-[#12244A] px-2 py-0.5 rounded-full">#{t}</span>)}</div>
    </div>

    <img src={article.image||"/logo.png"} className="w-full h-96 object-contain bg-[#12244A] rounded-2xl mt-6"/>

    <div className="mt-8 prose prose-invert max-w-none text-gray-200 leading-relaxed">
     <p>{article.content}</p>
     <p className="mt-4 text-yellow-400 font-bold">FOR THE PEOPLE. FOR LUFUMBI. FOR GLORY.</p>
     <p className="mt-2 text-sm text-gray-400">Kataka FC was established in 2000 to represent Lufumbi culture through football. The drum heritage remains at every home game.</p>
    </div>

    {article.video_url && <div className="mt-8"><h3 className="text-yellow-400 font-black text-sm">MATCH VIDEO</h3><div className="mt-2 aspect-video bg-black rounded-xl flex items-center justify-center text-gray-500">Video: {article.video_url}</div></div>}

    <div className="mt-8 flex gap-3">
     <button className="bg-[#25D366] text-white px-5 py-2 rounded-full text-xs font-bold">Share WhatsApp</button>
     <button className="border border-white/20 px-5 py-2 rounded-full text-xs">Share Facebook</button>
     <button className="border border-white/20 px-5 py-2 rounded-full text-xs">Copy Link</button>
    </div>

    {related.length>0 && <div className="mt-12"><h3 className="font-black text-yellow-400">RELATED NEWS — {article.category}</h3><div className="grid md:grid-cols-3 gap-4 mt-4">{related.map(r=><Link key={r.id} href={`/news/${r.slug}`} className="bg-[#12244A] p-4 rounded-xl border border-white/10"><p className="text-[10px] text-yellow-500">{r.category}</p><p className="font-bold text-sm mt-1">{r.title}</p></Link>)}</div></div>}
   </div>
  </div>
 </div>
 )
}