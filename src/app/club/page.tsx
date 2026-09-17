export default function ClubPage() {
  return (
    <div className="bg-[#0A1931] text-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-black text-[#FFC300]">OUR CLUB</h1>
        <p className="text-gray-400 mt-2">For The People. For Lufumbi. For Glory.</p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="font-black text-xl text-[#FFC300]">HISTORY</h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Founded in 2000 in Lufumbi, Kataka FC was born from the community.
              From dusty pitches to Uganda Premier League, we represent the resilience of Eastern Uganda.
              Our name comes from the traditional Kataka drums that unite our people.
            </p>
            <h2 className="font-black text-xl text-[#FFC300] mt-8">DRUM HERITAGE</h2>
            <p className="text-sm text-gray-300 mt-3">The drum is played 90 minutes non-stop at home games since 2000. It is our 12th player.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-[#12244A] p-4 rounded-xl text-center border border-white/10"><p className="font-black text-2xl text-[#FFC300]">25</p><p className="text-[11px]">YEARS</p></div>
              <div className="bg-[#12244A] p-4 rounded-xl text-center border border-white/10"><p className="font-black text-2xl text-[#FFC300]">1</p><p className="text-[11px]">UPL TITLE CHASE</p></div>
              <div className="bg-[#12244A] p-4 rounded-xl text-center border border-white/10"><p className="font-black text-2xl text-[#FFC300]">10K+</p><p className="text-[11px]">FANS</p></div>
            </div>
          </div>
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800" className="rounded-2xl w-full h-[300px] object-cover" alt="stadium" />
            <div className="bg-[#12244A] p-6 rounded-2xl border border-white/10">
              <h3 className="font-black text-[#FFC300]">LUFUMBI GROUND</h3>
              <p className="text-sm text-gray-300 mt-2">Capacity: 5,000 • Home since 2000 • Eastern Uganda&apos;s fortress</p>
              <p className="text-xs text-gray-400 mt-2">We are upgrading to 10,000 seater with sponsor support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}