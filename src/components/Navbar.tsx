"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/", label: "HOME" },
    { href: "/fixtures", label: "FIXTURES" },
    { href: "/squad", label: "SQUAD" },
    { href: "/news", label: "NEWS" },
    { href: "/shop", label: "SHOP" },
    { href: "/tickets", label: "TICKETS" },
    { href: "/table", label: "TABLE" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0A1931] border-b border-white/10">
      {/* Top Row */}
      <div className="max-w-[1400px] mx-auto px-6 h-[64px] flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded grid place-items-center">⚽</div>
          <div>
            <p className="font-black text-[#FFC300] leading-none">KATKA FC</p>
            <p className="text-[10px] tracking-[0.2em] text-gray-400">LUFUMBI • UGANDA</p>
          </div>
        </Link>

        {/* DESKTOP MENU - visible md+ */}
        <nav className="hidden md:flex items-center gap-6 text-[12px] font-bold tracking-widest">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-[#FFC300]">{l.label}</Link>
          ))}
          <Link href="/tickets" className="bg-[#FFC300] text-black px-5 py-2 rounded-full">BUY TICKETS</Link>
        </nav>

        {/* MOBILE HAMBURGER - visible only on phone */}
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

      {/* MOBILE SLIDE MENU */}
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
          <Link href="/tickets" onClick={() => setOpen(false)} className="block text-center bg-[#FFC300] text-black font-black py-3 rounded-full mt-6">
            BUY TICKETS
          </Link>
        </div>
      )}

      {/* Live Ticker - both desktop + mobile */}
      <div className="bg-[#0A1931] border-y border-white/5 py-1.5">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-8 text-[11px] whitespace-nowrap overflow-x-auto">
          <span className="text-red-500 font-bold">• LIVE • UPL PREMIER LEAGUE — WEEK 12</span>
          <span className="text-gray-400">KATKA 2 — 1 BUL FC • 78'</span>
        </div>
      </div>
    </header>
  )
}