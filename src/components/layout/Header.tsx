import Link from 'next/link'
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a2463] text-white shadow-lg">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#0a2463] font-black">K</div>
          <div>
            <h1 className="font-black leading-none">KATAKA FC</h1>
            <p className="text-[10px] text-yellow-400 tracking-[0.3em]">FOR THE PEOPLE</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-bold">
          <Link href="/squad" className="hover:text-yellow-400">SQUAD</Link>
          <Link href="/fixtures" className="hover:text-yellow-400">FIXTURES</Link>
          <Link href="/table" className="hover:text-yellow-400">TABLE</Link>
          <Link href="/news" className="hover:text-yellow-400">NEWS</Link>
          <Link href="/shop" className="hover:text-yellow-400">SHOP</Link>
          <Link href="/tickets" className="bg-yellow-400 text-[#0a2463] px-4 py-2 rounded-full">TICKETS</Link>
        </nav>
      </div>
    </header>
  )
}