import Link from "next/link"

const staff = [
  { name: "LUFUMBI CHAIRMAN", role: "Chairman", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60" },
  { name: "JOHN KIBIRIGE", role: "CEO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=60" },
  { name: "COACH MUSA", role: "Head Coach", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=60" },
  { name: "SARAH NAMBOZO", role: "Media Officer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=60" },
]

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A1931]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/club" className="text-sm font-bold">← BACK TO CLUB</Link>
        <h1 className="text-5xl font-black mt-4">MANAGEMENT</h1>
        <p className="text-gray-600 mt-2">For The People • For Lufumbi • W7 D3 L2 • 4TH</p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {staff.map((s) => (
            <div key={s.name} className="bg-[#0A1931] text-white rounded-2xl p-6 text-center">
              <img src={s.img} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#FFC300]" alt={s.name} />
              <h3 className="font-black mt-4 text-[#FFC300]">{s.name}</h3>
              <p className="text-sm text-gray-400">{s.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border rounded-2xl p-8">
          <h2 className="font-black text-xl">OUR STRUCTURE</h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Community owned since 2000. Board + Technical + Fans Representatives.
            Drum is our heartbeat — decisions made for the people of Lufumbi.
          </p>
        </div>
      </div>
    </div>
  )
}