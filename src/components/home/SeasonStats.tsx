export default function SeasonStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 text-center shadow"><p className="text-3xl font-black text-[#0a2463]">4TH</p><p className="text-xs">POSITION</p></div>
        <div className="bg-white rounded-2xl p-6 text-center shadow"><p className="text-3xl font-black">24</p><p className="text-xs">POINTS</p></div>
        <div className="bg-white rounded-2xl p-6 text-center shadow"><p className="text-3xl font-black">W7 D3 L2</p><p className="text-xs">RECORD</p></div>
        <div className="bg-white rounded-2xl p-6 text-center shadow"><p className="text-3xl font-black">12</p><p className="text-xs">MATCHES</p></div>
      </div>
    </section>
  )
}