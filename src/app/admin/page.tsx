"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Kataka2000!Lufumbi"

function AdminGate({children}:{children:any}){
 const [ok,setOk]=useState(false)
 const [input,setInput]=useState("")
 useEffect(()=>{ if(localStorage.getItem("kataka_admin_ok")==="yes") setOk(true) },[])
 if(ok) return children
 return(
  <div className="min-h-screen bg-[#0A1931] flex items-center justify-center p-6">
   <div className="bg-[#12244A] border border-yellow-500/30 p-8 rounded-2xl w-full max-w-[380px] text-center">
    <img src="/logo.png" className="w-16 h-16 mx-auto rounded-full bg-white p-1"/>
    <h1 className="text-[#FFC300] font-black mt-4 text-xl">KATAKA FC ADMIN</h1>
    <p className="text-[11px] text-gray-400 mt-1">Staff only — Lufumbi Ground Office</p>
    <input type="password" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter admin password" className="w-full mt-6 bg-[#0A1931] border border-white/10 p-3 rounded-xl text-sm text-white text-center outline-none focus:border-[#FFC300]"/>
    <button onClick={()=>{ if(input===ADMIN_PASS){ localStorage.setItem("kataka_admin_ok","yes"); setOk(true)} else alert("Wrong password — contact IT")}} className="w-full bg-[#FFC300] text-black font-black py-3 rounded-full mt-3 text-xs">UNLOCK DASHBOARD</button>
    <p className="text-[9px] text-gray-600 mt-4">Real club management system • For The People, For Lufumbi</p>
    <button onClick={()=>{ localStorage.removeItem("kataka_admin_ok"); location.reload()}} className="text-[9px] text-gray-500 mt-2 underline">Logout</button>
   </div>
  </div>
 )
}

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
  if(error) alert(error.message); else { setForm({}); load(); alert("ADDED! Check /squad /fixtures /news /shop — it's live") }
 }

 const del=async(id:any)=>{
  if(!confirm("Delete this row? Club will lose it.")) return
  await supabase.from(tab).delete().eq("id",id); load()
 }

 return(
 <AdminGate>
 <div className="min-h-screen bg-[#0A1931] text-white p-6 max-w-[1300px] mx-auto">
  <div className="flex justify-between items-start">
   <div>
    <h1 className="text-4xl font-black text-[#FFC300]">KATAKA ADMIN</h1>
    <p className="text-xs text-gray-400 mt-1">Real Club Management — Editable for new owner • Mbale, Lufumbi Ground</p>
   </div>
   <button onClick={()=>{localStorage.removeItem("kataka_admin_ok"); location.reload()}} className="bg-white/10 px-4 py-2 rounded-full text-[10px]">LOGOUT</button>
  </div>

  <div className="grid grid-cols-4 gap-3 mt-6">
   {Object.entries(stats).map(([k,v])=><div key={k} className="bg-[#12244A] border border-white/10 p-4 rounded-xl"><p className="text-[10px] text-[#FFC300]">{k.toUpperCase()}</p><p className="text-2xl font-black">{v}</p><p className="text-[9px] text-gray-500">editable</p></div>)}
  </div>

  <div className="flex gap-2 mt-6 flex-wrap">
   {["players","fixtures","news","products"].map(t=><button key={t} onClick={()=>setTab(t)} className={`px-5 py-2 rounded-full text-xs font-black ${tab===t?"bg-[#FFC300] text-black":"bg-[#12244A] border border-white/20"}`}>{t.toUpperCase()}</button>)}
  </div>

  <div className="mt-6 grid md:grid-cols-[320px_1fr] gap-6">
   <div className="bg-[#12244A] border border-yellow-500/30 p-5 rounded-2xl h-fit">
    <p className="font-black text-sm text-[#FFC300]">ADD NEW {tab.toUpperCase()}</p>
    <div className="grid gap-2 mt-4">
     {tab==="players" && <><input placeholder="Name e.g. Kibirige" value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Number e.g. 10" value={form.number||""} onChange={e=>setForm({...form,number:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Position FW/MF/DF/GK" value={form.position||""} onChange={e=>setForm({...form,position:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Goals e.g. 7" value={form.goals||""} onChange={e=>setForm({...form,goals:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/></>}
     {tab==="fixtures" && <><input placeholder="Opponent e.g. Vipers" value={form.opponent||""} onChange={e=>setForm({...form,opponent:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><select value={form.venue||"Home"} onChange={e=>setForm({...form,venue:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"><option>Home</option><option>Away</option></select><select value={form.status||"upcoming"} onChange={e=>setForm({...form,status:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"><option>upcoming</option><option>live</option><option>finished</option></select><input placeholder="Home score" value={form.home_score||""} onChange={e=>setForm({...form,home_score:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Away score" value={form.away_score||""} onChange={e=>setForm({...form,away_score:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/></>}
     {tab==="news" && <><input placeholder="slug e.g. kataka-wins" value={form.slug||""} onChange={e=>setForm({...form,slug:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Title" value={form.title||""} onChange={e=>setForm({...form,title:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Category" value={form.category||""} onChange={e=>setForm({...form,category:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><textarea placeholder="Content" value={form.content||""} onChange={e=>setForm({...form,content:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs h-20 outline-none"/></>}
     {tab==="products" && <><input placeholder="slug e.g. home-jersey" value={form.slug||""} onChange={e=>setForm({...form,slug:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Name" value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Price 85000" value={form.price||""} onChange={e=>setForm({...form,price:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/><input placeholder="Stock e.g. 45" value={form.stock||""} onChange={e=>setForm({...form,stock:e.target.value})} className="bg-[#0A1931] border border-white/10 p-2.5 rounded-xl text-xs outline-none"/></>}
     <button onClick={add} className="bg-[#FFC300] text-black py-3 rounded-full font-black text-xs mt-2">+ ADD LIVE TO CLUB SITE</button>
     <p className="text-[10px] text-gray-500 mt-2">New owner can use this — no coding.</p>
    </div>
   </div>

   <div className="bg-[#12244A]/50 border border-white/10 rounded-2xl p-4">
    <p className="font-black text-xs text-[#FFC300] mb-3">LATEST 20 IN {tab.toUpperCase()} — LIVE FROM SUPABASE (4 products you inserted)</p>
    <div className="space-y-2 max-h-[600px] overflow-auto">
     {data.map((row:any)=><div key={row.id} className="bg-[#0A1931] border border-white/10 p-3 rounded-xl flex justify-between items-center text-xs"><span className="truncate w-[80%]">{row.name||row.title||row.opponent||row.slug} — {JSON.stringify(row).slice(0,90)}</span><button onClick={()=>del(row.id)} className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px]">DEL</button></div>)}
     {data.length===0 && <p className="text-xs text-gray-500">No rows — add one on left</p>}
    </div>
   </div>
  </div>

  <div className="mt-8 bg-[#FFC300]/10 border border-[#FFC300]/30 p-4 rounded-xl">
   <p className="text-xs font-black text-[#FFC300]">FOR CLUB BUYER:</p>
   <p className="text-[11px] text-gray-300 mt-1">All content editable here. After purchase: 1. Change password in Vercel env var 2. Transfer Supabase project to club email 3. Transfer Vercel/GitHub. All 4 products, players, fixtures remain. No dev needed daily.</p>
  </div>
 </div>
 </AdminGate>
 )
}