export default function Hero() {
  return (
    <section className="bg-[#0a2463] text-white py-20 px-4">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-yellow-400 font-black tracking-widest">4TH PLACE • UGANDA PREMIER LEAGUE</p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mt-4">FOR THE<br/>PEOPLE</h1>
          <p className="mt-6 text-slate-300 max-w-md">Lufumbi Ground, Mbale. W7 D3 L2. 24 Points. The drum beats louder than ever.</p>
          <div className="mt-8 flex gap-4">
            <a href="/tickets" className="bg-yellow-400 text-[#0a2463] px-8 py-3 rounded-full font-black">GET TICKETS</a>
            <a href="/squad" className="border border-white px-8 py-3 rounded-full font-bold">MEET SQUAD</a>
          </div>
        </div>
        <div className="bg-white/10 rounded-[2rem] p-10 text-center">
          <div className="text-8xl">🥁</div>
          <p className="mt-4 font-black text-2xl">LUFUMBI DRUM</p>
          <p className="text-sm text-slate-300">Our Heritage. Our Identity.</p>
        </div>
      </div>
    </section>
  )
}