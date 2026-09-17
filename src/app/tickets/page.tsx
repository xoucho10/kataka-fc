"use client"
import { useState } from "react"

const MATCHES = [
  { id: "katka-villa", home: "KATKA FC", away: "SC VILLA", date: "SAT 20 SEP • 4PM", ground: "Lufumbi Ground", badge: "W7 D3 L2 • 4TH" },
  { id: "katka-kcca", home: "KATKA FC", away: "KCCA FC", date: "SAT 27 SEP • 4PM", ground: "Lufumbi Ground", badge: "DERBY" },
  { id: "katka-vipers", home: "KATKA FC", away: "VIPERS SC", date: "SAT 4 OCT • 4PM", ground: "Lufumbi Ground", badge: "TOP 4 CLASH" },
]

const TIERS = [
  { id: "ordinary", name: "ORDINARY", price: 20000, desc: "Terrace • Standing • Drum Zone", color: "bg-white" },
  { id: "vip", name: "VIP", price: 50000, desc: "Covered Stand • Seated • Shade", color: "bg-[#FFC300]" },
  { id: "vvip", name: "VVIP + HOSPITALITY", price: 100000, desc: "Pavilion • Meal + Drink • Meet Players", color: "bg-[#0A1931] text-white" },
]

export default function TicketsPage() {
  const [match, setMatch] = useState(MATCHES[0])
  const [tier, setTier] = useState(TIERS[0])
  const [qty, setQty] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const total = tier.price * qty
  const fee = 1000
  const grand = total + fee

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A1931]">
      <div className="bg-[#0A1931] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black tracking-tighter">BUY <span className="text-[#FFC300]">TICKETS</span></h1>
          <p className="text-slate-400 mt-2 text-sm">Lufumbi Ground • 5,000 capacity • Drum is our heartbeat • FOR THE PEOPLE</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Match Selector */}
          <div>
            <h3 className="font-black text-sm tracking-widest">1. SELECT MATCH</h3>
            <div className="grid md:grid-cols-3 gap-3 mt-3">
              {MATCHES.map(m => (
                <button key={m.id} onClick={()=>setMatch(m)} className={`text-left rounded-2xl p-4 border-2 ${match.id===m.id? 'bg-[#0A1931] text-white border-[#0A1931]' : 'bg-white border-black/10 hover:border-[#FFC300]'}`}>
                  <div className="text-[10px] font-black bg-[#FFC300] text-black inline-block px-2 py-1 rounded-full">{m.badge}</div>
                  <p className="font-black mt-2 leading-tight">{m.home} vs {m.away}</p>
                  <p className="text-xs mt-1 opacity-70">{m.date} • {m.ground}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tier */}
          <div>
            <h3 className="font-black text-sm tracking-widest">2. CHOOSE STAND</h3>
            <div className="grid md:grid-cols-3 gap-3 mt-3">
              {TIERS.map(t => (
                <button key={t.id} onClick={()=>setTier(t)} className={`rounded-2xl p-5 border-2 text-left ${tier.id===t.id? 'border-[#FFC300] ring-2 ring-[#FFC300]/30' : 'border-black/10'} ${t.color} ${t.id!=='ordinary'?'':''}`}>
                  <p className="font-black">{t.name}</p>
                  <p className={`text-xs mt-1 ${t.id==='vvip'?'text-white/70':'text-black/60'}`}>{t.desc}</p>
                  <p className="font-black text-xl mt-3">UGX {(t.price/1000)}K</p>
                  {tier.id===t.id && <p className="text-[10px] font-black mt-2">✓ SELECTED</p>}
                </button>
              ))}
            </div>
          </div>

          {/* Stadium Visual */}
          <div className="bg-[#0A1931] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-[#FFC300]">LUFUMBI GROUND MAP</h3>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">N • DRUM ZONE AT SOUTH</span>
            </div>
            <div className="mt-6 grid grid-cols-5 gap-2 text-[10px] font-black text-center">
              <div className="col-span-5 bg-[#12244A] py-3 rounded">NORTH TERRACE - ORDINARY</div>
              <div className="col-span-1 bg-[#FFC300] text-black py-8 rounded grid place-items-center">VIP WEST</div>
              <div className="col-span-3 bg-[#1a5d1a] py-8 rounded text-white">PITCH • KATKA FC</div>
              <div className="col-span-1 bg-black border border-[#FFC300]/30 py-8 rounded text-[#FFC300] grid place-items-center">VVIP</div>
              <div className="col-span-5 bg-[#12244A] py-3 rounded border border-[#FFC300]/20">SOUTH - DRUM HERITAGE 🥁 • ORDINARY</div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl p-6 border">
            <h3 className="font-black text-sm tracking-widest">3. YOUR DETAILS</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Full Name" className="border rounded-full px-4 py-3 text-sm outline-none focus:border-[#FFC300]" />
              <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone 07XX XXX XXX" className="border rounded-full px-4 py-3 text-sm outline-none focus:border-[#FFC300]" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm font-bold">Quantity</span>
              <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-full px-2 py-1">
                <button onClick={()=>setQty(Math.max(1,qty-1))} className="w-8 h-8 bg-white rounded-full font-black">-</button>
                <span className="w-8 text-center font-black">{qty}</span>
                <button onClick={()=>setQty(Math.min(6,qty+1))} className="w-8 h-8 bg-white rounded-full font-black">+</button>
              </div>
              <span className="text-xs text-gray-500">Max 6 per order</span>
            </div>
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white rounded-2xl border h-fit p-6 sticky top-6">
          <h3 className="font-black">ORDER SUMMARY</h3>
          <div className="mt-4 bg-[#0A1931] text-white rounded-xl p-4">
            <p className="text-[#FFC300] font-black text-sm">{match.home} vs {match.away}</p>
            <p className="text-xs text-slate-400 mt-1">{match.date} • {match.ground}</p>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between"><span>{tier.name} x {qty}</span><span className="font-bold">UGX {total.toLocaleString()}</span></div>
            <div className="flex justify-between text-gray-500"><span>Service fee</span><span>UGX {fee.toLocaleString()}</span></div>
            <div className="border-t pt-3 flex justify-between font-black text-lg"><span>Total</span><span>UGX {grand.toLocaleString()}</span></div>
          </div>

          <button className="w-full mt-6 bg-[#0A1931] text-white py-4 rounded-full font-black hover:bg-black transition">
            BOOK TICKET • UGX {grand.toLocaleString()} →
          </button>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="bg-yellow-400 rounded-lg py-2 text-center text-[10px] font-black">MTN MoMo</div>
            <div className="bg-red-600 text-white rounded-lg py-2 text-center text-[10px] font-black">Airtel Money</div>
            <div className="bg-black text-white rounded-lg py-2 text-center text-[10px] font-black">Cash at Gate</div>
          </div>

          <p className="text-[11px] text-gray-500 mt-4 text-center">Paid at gate • Drum heritage included 🥁 • E-ticket sent via SMS</p>

          <div className="mt-6 bg-[#FFC300]/20 rounded-xl p-3 text-xs">
            <p className="font-black">Why Lufumbi?</p>
            <p className="mt-1 text-gray-700">5,000 roaring fans, loudest drum in UPL, community owned. For the people. For Lufumbi. For glory.</p>
          </div>
        </div>
      </div>
    </div>
  )
}