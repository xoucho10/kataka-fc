"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

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
      <div className="max-w-[1400px] mx-auto px-6 h-[64px] flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Kataka"
            className="w-10 h-10 object-contain bg-white p-1 rounded"
            onError={(e:any)=> e.target.style.display='none'}
          />
          <div>
            <p className="font-black text-[#FFC300] leading-none">KATKA FC</p>
            <p className="text-[10px] tracking-[0.2em] text-gray-400">LUFUMBI • UGANDA</p>
          </div>
        </Link>

        {/* DESKTOP - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 text-[12px] font-bold tracking-widest">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white hover:text-[#FFC300] transition">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER - hidden on desktop */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center border border-white/20 rounded-lg"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-white transition ${open? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition ${open? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition ${open? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#12244A] border-t border-white/10 px-6 py-6 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-black tracking-widest border-b border-white/5 hover:text-[#FFC300]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      {/* LIVE BAR - same as your screenshot */}
      <div className="bg-[#11244e] border-y border-white/10 py-1.5 overflow-x-auto">
        <div className="flex gap-8 text-[11px] whitespace-nowrap px-6">
          <span className="text-red-500 font-bold">• LIVE • UPL PREMIER LEAGUE — WEEK 12</span>
          <span className="text-gray-300">KATKA 2 — 1 BUL FC • 78'</span>
          <span className="text-gray-400">SC VILLA 1 — 1 VIPERS • FT</span>
          <span className="text-gray-400">KCCA 0 — 0 EXPRESS • 45'</span>
        </div>
      </div>
    </header>
  )
}