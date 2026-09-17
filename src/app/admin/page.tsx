"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminV2(){
 const [tab,setTab]=useState("players")
 const [data,setData]=useState<any[]>([])
 const [form,setForm]=useState<any>({})
 const [stats,setStats]=useState({players:0,fixtures:0,news:0,products:0})

 const load=async()=>{
  const p= await supabase.from("players").select("*",{count:"exact",head:true})
  const f= await supabase.from("fixtures").select("*",{count:"exact",head:true})
  const n= await supabase.from("news").select("*",{count:"exact",head:true})
  const pr= await supabase.from("products").select("*",{count:"exact",head:true})
  setStats({players:p.count||0,fixtures:f.count||0,news:n.count||0,products:pr.count||0})
  const {data:d}= await supabase.from(tab).select("*").order("created_at",{ascending:false}).limit(20)
  setData(d||[])
 }
 useEffect(()=>{ load() },[tab])

 const add=async()=>{
  let payload:any={}
  if(tab==="players"){ payload={name:form.name||"New Player", number:parseInt(form.number)||99, position:form.position||"FW", goals:parseInt(form.goals)||0} }
  if(tab==="fixtures"){ payload={opponent:form.opponent||"SC Villa", venue:form.venue||"Home", status:form.status||"upcoming", home_score:parseInt(form.home_score)||0, away_score:parseInt(form.away_score)||0} }
  if(tab==="news"){ payload={slug:form.slug||`news-${Date.now()}`, title:form.title||"Kataka News", category:form.category||"Club", content:form.content||"Content", author:"Admin"} }
  if(tab==="products"){ payload={slug:form.slug||`product-${Date.now()}`, name:form.name||"New Product", category:"Jersey", price:parseInt(form.price)||85000, old_price:100000, stock:parseInt(form.stock)||10} }
  const {error}= await supabase.from(tab).insert(payload)
  if(error) alert(error.message); else { setForm({}); load(); alert("ADDED! Refresh /squad /fixtures /news /shop to see live") }
 }

 const del=async(id:any)=>{
  if(!confirm("Delete?")) return
  await supabase.from(tab).delete().eq("id",id); load()
 }

 return(
 <div className="min-h-screen bg-[#0A1931] text-white p-6 max-w-[1300px] mx-auto">
  <h1 className="text-4xl font-black text-[#FFC300]">KATAKA ADMIN — MANAGEMENT SYSTEM</h1>
  <p className="text-xs text-gray-400 mt-1">For judges demo — Edit live without VS Code • For The People, For Lufumbi</p>

  <div className="grid grid-cols-4 gap-3 mt-6">
   {Object.entries(stats).map(([k,v])=><div key={k} className="bg-[#12244A] border border-white/10 p-4 rounded-xl"><p className="text-[10px] text-[#FFC300]">{k.toUpperCase()}</p><p className="text-2xl font-black">{v}</p></div>)}
  </div>

  <div className="flex gap-2 mt-6">
   {["players","fixtures","news","products"].map(t=><button key={t} onClick={()=>setTab(t)} className={`px-5 py-2 rounded-full text-xs font-black ${tab===t?"bg-[#FFC300] text-black":"bg-[#12244A] border border-white/20"}`}>{t.toUpperCase()}</button>)}
  </div>

  <div className="mt-6 grid md:grid-cols-[320px_1fr] gap-6">
   <div className="bg-[#12244A] border border-yellow-500/30 p-5 rounded-2xl h-fit">
    <p className="font-black text-sm text-[#FFC300]">ADD NEW {tab.toUpperCase()}</p>
    <div className="grid gap-2 mt-4">
     {tab==="players" && <><input placeholder="Name e.g. Kibirige" value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Number e.g. 10" value={form.number||""} onChange={e=>setForm({...form,number:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Position FW/MF/DF/GK" value={form.position||""} onChange={e=>setForm({...form,position:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Goals e.g. 7" value={form.goals||""} onChange={e=>setForm({...form,goals:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/></>}
     {tab==="fixtures" && <><input placeholder="Opponent e.g. Vipers" value={form.opponent||""} onChange={e=>setForm({...form,opponent:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><select value={form.venue||"Home"} onChange={e=>setForm({...form,venue:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"><option>Home</option><option>Away</option></select><select value={form.status||"upcoming"} onChange={e=>setForm({...form,status:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"><option>upcoming</option><option>live</option><option>finished</option></select><input placeholder="Home score" value={form.home_score||""} onChange={e=>setForm({...form,home_score:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Away score" value={form.away_score||""} onChange={e=>setForm({...form,away_score:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/></>}
     {tab==="news" && <><input placeholder="slug e.g. kataka-wins" value={form.slug||""} onChange={e=>setForm({...form,slug:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Title" value={form.title||""} onChange={e=>setForm({...form,title:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Category" value={form.category||""} onChange={e=>setForm({...form,category:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><textarea placeholder="Content" value={form.content||""} onChange={e=>setForm({...form,content:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs h-20"/></>}
     {tab==="products" && <><input placeholder="slug e.g. home-jersey" value={form.slug||""} onChange={e=>setForm({...form,slug:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Name" value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Price 85000" value={form.price||""} onChange={e=>setForm({...form,price:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/><input placeholder="Stock e.g. 45" value={form.stock||""} onChange={e=>setForm({...form,stock:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs"/></>}
     <button onClick={add} className="bg-[#FFC300] text-black py-3 rounded-full font-black text-xs mt-2">+ ADD TO SUPABASE LIVE</button>
     <p className="text-[10px] text-gray-500 mt-2">This edits real database — No code needed. Show judges.</p>
    </div>
   </div>

   <div className="bg-[#12244A]/50 border border-white/10 rounded-2xl p-4">
    <p className="font-black text-xs text-[#FFC300] mb-3">LATEST 20 ROWS IN {tab.toUpperCase()} — CLICK DELETE TO REMOVE</p>
    <div className="space-y-2 max-h-[600px] overflow-auto">
     {data.map((row:any)=><div key={row.id} className="bg-[#0A1931] border border-white/10 p-3 rounded-xl flex justify-between items-center text-xs"><span className="truncate w-[80%]">{row.name||row.title||row.opponent||row.slug} — {JSON.stringify(row).slice(0,80)}</span><button onClick={()=>del(row.id)} className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px]">DEL</button></div>)}
     {data.length===0 && <p className="text-xs text-gray-500">No rows yet — Add one!</p>}
    </div>
   </div>
  </div>
 </div>
 )
}