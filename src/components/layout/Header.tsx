import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* REAL HEADER - Keep this only */}
      <div className="bg-[#0f1f3c] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* Replace /logo.png with your real crest path */}
            <div className="h-12 w-12 bg-white p-1">
              <img src="/logo.png" alt="Kataka FC" className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="font-black leading-none text-yellow-400">KATKA FC</h1>
              <p className="text-[11px] tracking-[0.2em] text-white/60">LUFUMBI • UGANDA</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[13px] font-bold tracking-wide">
            <Link href="/" className="text-yellow-400">HOME</Link>
            <Link href="/squad" className="hover:text-yellow-400">SQUAD</Link>
            <Link href="/fixtures" className="hover:text-yellow-400">FIXTURES</Link>
            <Link href="/news" className="hover:text-yellow-400">NEWS</Link>
            <Link href="/club" className="hover:text-yellow-400">CLUB</Link>
            <Link href="/tickets" className="hover:text-yellow-400">TICKETS</Link>
            <Link href="/shop" className="hover:text-yellow-400">SHOP</Link>
          </nav>

          <Link href="/membership" className="hidden md:block bg-[#FFC300] text-black font-black px-5 py-2.5 rounded-full text-sm hover:bg-yellow-300">
            JOIN MEMBERSHIP
          </Link>
        </div>
      </div>

      {/* Live Ticker - optional, keep if you want */}
      <div className="bg-[#1a2a4a] border-y border-white/10 text-[11px] py-2 px-4 flex gap-6 overflow-hidden whitespace-nowrap">
        <span className="text-red-500 font-bold">• LIVE • UPL PREMIER LEAGUE — WEEK 12</span>
        <span className="text-white/80">KATKA 2 — 1 BUL FC • 78'</span>
        <span className="text-white/60">SC VILLA 1 — 1 VIPERS • FT</span>
        <span className="text-white/60">KCCA 0 — 0 EXPRESS • 45'</span>
      </div>
    </header>
  )
}