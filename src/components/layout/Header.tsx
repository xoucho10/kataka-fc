"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "HOME" },
    { href: "/squad", label: "SQUAD" },
    { href: "/fixtures", label: "FIXTURES" },
    { href: "/news", label: "NEWS" },
    { href: "/club", label: "CLUB" },
    { href: "/tickets", label: "TICKETS" },
    { href: "/shop", label: "SHOP" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0A1931] border-b border-white/10">
      {/* Top bar - logo only, no hamburger */}
      <div className="max-w-[1400px] mx-auto px-6 h-[60px] flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Kataka" className="w-10 h-10 object-contain bg-white p-1 rounded" onError={(e:any)=> e.target.style.display='none'} />
          <div>
            <p className="font-black text-[#FFC300] leading-none tracking-wide">KATAKA FC</p>
            <p className="text-[10px] tracking-[0.2em] text-gray-400">LUFUMBI • UGANDA</p>
          </div>
        </Link>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-center gap-6 text-[12px] font-bold tracking-widest">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link key={l.href} href={l.href} className={`pb-1 border-b-2 transition ${active? 'text-[#FFC300] border-[#FFC300]' : 'text-white border-transparent hover:text-[#FFC300]'}`}>
                {l.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* MOBILE TABS - user friendly scroll, no 3 lines */}
      <div className="md:hidden border-t border-white/10 bg-[#0A1931] overflow-x-auto scrollbar-none">
        <div className="flex gap-1 px-2 py-1.5 whitespace-nowrap">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-full text-[11px] font-black tracking-widest transition shrink-0 ${
                  active? 'bg-[#FFC300] text-black' : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* LIVE BAR - same as screenshot */}
      <div className="bg-[#11244e] border-y border-white/10 py-2 overflow-x-auto">
        <div className="flex gap-6 text-[11px] whitespace-nowrap px-6">
          <span className="text-red-400 font-black flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse inline-block"></span> LIVE • UPL WEEK 12</span>
          <Link href="/fixtures" className="text-white flex items-center gap-1.5"><img src="/logos/kataka.png" className="w-4 h-4 bg-white rounded-full p-0.5" alt="" onError={(e:any)=>e.target.style.display='none'}/> KATA
KA 2 — 1 BUL • 78'</Link>
          <span className="text-gray-400 flex items-center gap-1.5"><img src="/logos/villa.png" className="w-4 h-4 bg-white rounded-full p-0.5" alt="" onError={(e:any)=>e.target.style.display='none'}/> SC VILLA 1 — 1 VIPERS • FT</span>
          <span className="text-gray-400">KCCA 0 — 0 EXPRESS • 45'</span>
        </div>
      </div>
    </header>
  )
}