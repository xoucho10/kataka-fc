import Link from "next/link"

const staff = [
  { name: "LUFUMBI CHAIRMAN", role: "Chairman", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60" },
  { name: "JOHN KIBIRIGE", role: "CEO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=60" },
  { name: "COACH MUSA", role: "Head Coach", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=60" },
  { name: "SARAH NAMBOZO", role: "Media Officer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=60" },
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A1931]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* HEADER */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">KATKA FC</h1>
        <p className="mt-3 text-gray-700 font-bold tracking-widest text-sm">FOR THE PEOPLE • FOR LUFUMBI • FOR GLORY • EST. 2000</p>

        {/* ABOUT CLUB */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#0A1931] text-white rounded-2xl p-8">
            <h2 className="text-[#FFC300] font-black text-xl">OUR STORY</h2>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              Founded in 2000 in Lufumbi, Uganda, Kataka FC is more than a football club —
              we are the pride of the people. From dusty grounds to UPL Week 12, 4th Place,
              12 points. We play for our community, our drum heritage, our future.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div><p className="text-3xl font-black text-[#FFC300]">25</p><p className="text-[10px] text-gray-400">YEARS</p></div>
              <div><p className="text-3xl font-black text-[#FFC300]">4TH</p><p className="text-[10px] text-gray-400">UPL PLACE</p></div>
              <div><p className="text-3xl font-black text-[#FFC300]">12</p><p className="text-[10px] text-gray-400">POINTS</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <h2 className="font-black text-xl">LUFUMBI GROUND</h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Home of the Eagles. 5,000 capacity. The loudest drum in Uganda.
              Every Saturday, the whole village walks to the ground.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-bold">
              <li>📍 Lufumbi, Mbale District, Uganda</li>
              <li>🏟️ Capacity: 5,000</li>
              <li>🥁 Drum Heritage Since 2000</li>
              <li>⚽ UPL Premier League</li>
            </ul>
            <Link href="/fixtures" className="inline-block mt-6 bg-[#0A1931] text-white px-6 py-2 rounded-full text-sm font-black">SEE FIXTURES →</Link>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { t: "FOR THE PEOPLE", d: "Community owned, community driven. 100% for fans." },
            { t: "FOR LUFUMBI", d: "We represent our village on the national stage." },
            { t: "FOR GLORY", d: "UPL title dream, CAF dream, never give up." },
          ].map(v => (
            <div key={v.t} className="bg-[#FFC300] rounded-2xl p-6">
              <h3 className="font-black">{v.t}</h3>
              <p className="text-sm mt-2">{v.d}</p>
            </div>
          ))}
        </div>

        {/* MANAGEMENT - NEW */}
        <h2 className="text-5xl font-black mt-16">MANAGEMENT</h2>
        <p className="mt-3 text-gray-700">The people behind Lufumbi Ground • Community owned since 2000</p>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {staff.map(s => (
            <div key={s.name} className="bg-[#0A1931] text-white rounded-2xl p-6 text-center border border-white/10">
              <img src={s.img} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#FFC300]" alt={s.name} />
              <h3 className="font-black mt-4 text-[#FFC300] text-sm">{s.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{s.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border border-black/10 rounded-2xl p-6">
          <h3 className="font-black">OUR STRUCTURE</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Board + Technical Team + Fans Representatives. All decisions made for the people of Lufumbi. Drum is our heartbeat.
          </p>
        </div>

        {/* MEMBERSHIP TITLE */}
        <h2 className="text-5xl font-black mt-16">MEMBERSHIP</h2>
        <p className="mt-3 text-gray-700">Kataka FC - For The People - Lufumbi Ground - 4th Place</p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#0A1931] text-white rounded-2xl p-6 border border-white/10">
            <h3 className="font-black text-[#FFC300]">EAGLE FAN</h3>
            <p className="text-2xl font-black mt-2">UGX 30K / YEAR</p>
            <ul className="mt-4 text-sm space-y-2 text-gray-300">
              <li>• Official card</li><li>• 10% off shop</li><li>• Priority tickets</li>
            </ul>
            <Link href="/tickets" className="block mt-6 bg-white text-black text-center py-3 rounded-full font-black">JOIN NOW →</Link>
          </div>

          <div className="bg-[#FFC300] text-black rounded-2xl p-6 border-2 border-black relative">
            <span className="absolute -top-3 left-6 bg-black text-[#FFC300] text-[10px] px-3 py-1 rounded-full font-black">MOST POPULAR</span>
            <h3 className="font-black">LUFUMBI GOLD</h3>
            <p className="text-2xl font-black mt-2">UGX 75K / YEAR</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>• Free Home Kit</li><li>• Meet players</li><li>• Name on wall</li>
            </ul>
            <Link href="/tickets" className="block mt-6 bg-black text-[#FFC300] text-center py-3 rounded-full font-black">JOIN NOW →</Link>
          </div>

          <div className="bg-[#0A1931] text-white rounded-2xl p-6 border border-white/10">
            <h3 className="font-black text-[#FFC300]">FAMILY PACK</h3>
            <p className="text-2xl font-black mt-2">UGX 120K / YEAR</p>
            <ul className="mt-4 text-sm space-y-2 text-gray-300">
              <li>• 4 cards</li><li>• 20% off shop</li><li>• Free 2 matches</li>
            </ul>
            <Link href="/tickets" className="block mt-6 bg-white text-black text-center py-3 rounded-full font-black">JOIN NOW →</Link>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="bg-[#0A1931] text-white px-8 py-3 rounded-full font-black">BACK HOME</Link>
          <Link href="/shop" className="bg-[#FFC300] text-black px-8 py-3 rounded-full font-black">VISIT SHOP →</Link>
          <Link href="/squad" className="bg-white border border-black/10 text-black px-8 py-3 rounded-full font-black">MEET SQUAD →</Link>
        </div>
      </div>
    </div>
  )
}