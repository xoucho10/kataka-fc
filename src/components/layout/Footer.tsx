export default function Footer() {
  return (
    <footer className="bg-[#05143a] text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-black text-xl">KATAKA FC</h3>
          <p className="text-sm text-slate-300 mt-2">Lufumbi Ground, Mbale. Drum is our heartbeat.</p>
          <p className="text-yellow-400 text-sm mt-2 font-bold">W7 D3 L2 • 4TH • 24 PTS</p>
        </div>
        <div><h4 className="font-bold">CLUB</h4><p className="text-sm text-slate-400 mt-2">History • Management • Honours • Stadium</p></div>
        <div><h4 className="font-bold">FANS</h4><p className="text-sm text-slate-400 mt-2">Shop • Membership • Wall • Contact</p></div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs text-slate-500">© 2026 Kataka FC</div>
    </footer>
  )
}