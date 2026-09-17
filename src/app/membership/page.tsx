import Link from "next/link"

export default function MembershipPage() {
  const plans = [
    { name: "EAGLE FAN", price: "UGX 30,000 / Year", features: ["Official membership card", "10% off shop", "Priority tickets", "WhatsApp updates"], color: "border-white/20" },
    { name: "LUFUMBI GOLD", price: "UGX 75,000 / Year", features: ["All Eagle Fan benefits", "Free Home Kit 24/25", "Meet & Greet players", "Name on stadium wall"], color: "border-[#FFC300]", best:true },
    { name: "FAMILY PACK", price: "UGX 120,000 / Year", features: ["4 Membership cards", "20% off shop", "Kids academy discount", "Free tickets for 2 matches"], color: "border-white/20" },
  ]

  return (
    <div className="min-h-screen bg-[#0A1931] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-black text-[#FFC300]">MEMBERSHIP</h1>
        <p className="mt-2 text-gray-400">Join Kataka FC — For The People. For Lufumbi. For Glory.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map(p => (
            <div key={p.name} className={`bg-[#12244A] rounded-2xl p-6 border ${p.color} relative`}>
              {p.best && <span className="absolute -top-3 left-6 bg-[#FFC300] text-black text-[10px] font-black px-3 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="font-black text-xl">{p.name}</h3>
              <p className="text-[#FFC300] font-bold mt-2">{p.price}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <Link href="/tickets" className={`block text-center mt-6 py-3 rounded-full font-black text-sm ${p.best? 'bg-[#FFC300] text-black' : 'bg-white text-black'}`}>JOIN NOW</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFC300] text-black rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-black text-2xl">4TH PLACE • UPL • 12 PTS</h3>
            <p className="text-sm">Lufumbi Ground — EST. 2000 — Be part of the journey.</p>
          </div>
          <Link href="/" className="bg-black text-[#FFC300] px-6 py-3 rounded-full font-black text-sm">BACK HOME</Link>
        </div>
      </div>
    </div>
  )
}