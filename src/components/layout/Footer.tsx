import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#05143a] text-white mt-20">
      {/* Gold Accent Top */}
      <div className="h-[3px] w-full bg-[#FFC300]"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kataka FC" className="w-10 h-10 bg-white rounded-full p-1 object-contain" />
            <h3 className="font-black text-xl tracking-tight">KATAKA FC</h3>
          </div>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">Lufumbi Ground, Mbale. Drum is our heartbeat.</p>
          <div className="mt-3 inline-flex bg-[#FFC300]/10 border border-[#FFC300]/30 text-yellow-400 text-xs font-black px-3 py-1.5 rounded-full">
            W7 D3 L2 • 4TH • 24 PTS
          </div>
          <div className="flex gap-2 mt-4">
            <span className="w-8 h-8 bg-white/10 hover:bg-[#FFC300] hover:text-black rounded-full grid place-items-center text-[11px] cursor-pointer transition">FB</span>
            <span className="w-8 h-8 bg-white/10 hover:bg-[#FFC300] hover:text-black rounded-full grid place-items-center text-[11px] cursor-pointer transition">X</span>
            <span className="w-8 h-8 bg-white/10 hover:bg-[#FFC300] hover:text-black rounded-full grid place-items-center text-[11px] cursor-pointer transition">IG</span>
          </div>
        </div>

        <div>
          <h4 className="font-black tracking-widest text-sm text-white">CLUB</h4>
          <div className="w-6 h-0.5 bg-[#FFC300] mt-2 mb-3"></div>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href="/club#history" className="hover:text-[#FFC300]">History</Link></li>
            <li><Link href="/club/management" className="hover:text-[#FFC300]">Management</Link></li>
            <li><Link href="/club#honours" className="hover:text-[#FFC300]">Honours</Link></li>
            <li><Link href="/club#stadium" className="hover:text-[#FFC300]">Stadium</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black tracking-widest text-sm text-white">FANS</h4>
          <div className="w-6 h-0.5 bg-[#FFC300] mt-2 mb-3"></div>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href="/shop" className="hover:text-[#FFC300]">Shop</Link></li>
            <li><Link href="/club#membership" className="hover:text-[#FFC300]">Membership</Link></li>
            <li><Link href="/club" className="hover:text-[#FFC300]">Wall</Link></li>
            <li><Link href="/tickets" className="hover:text-[#FFC300]">Contact</Link></li>
          </ul>
        </div>

        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h4 className="font-black text-sm">EAGLES NEST</h4>
          <p className="text-xs text-slate-400 mt-2">Get match alerts on WhatsApp.</p>
          <div className="mt-4 flex gap-2">
            <input placeholder="Phone" className="flex-1 bg-[#0A1931] border border-white/10 rounded-full px-3 py-2 text-sm outline-none focus:border-[#FFC300]" />
            <button className="bg-[#FFC300] text-black px-4 rounded-full font-black text-xs">JOIN</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <span>© 2026 Kataka FC • FOR THE PEOPLE. FOR LUFUMBI. FOR GLORY.</span>
          <span>MTN • NILE • JOMA • UPL</span>
        </div>
      </div>
    </footer>
  )
}