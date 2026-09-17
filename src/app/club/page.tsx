import Link from "next/link"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A1931]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-black">MEMBERSHIP</h1>
        <p className="mt-3 text-gray-700">Kataka FC - For The People - Lufumbi Ground - 4th Place</p>

        {/* Cards */}
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

        {/* Lost button recovered here */}
        <div className="mt-10 flex gap-4">
          <Link href="/" className="bg-[#0A1931] text-white px-8 py-3 rounded-full font-black">BACK HOME</Link>
          <Link href="/shop" className="bg-[#FFC300] text-black px-8 py-3 rounded-full font-black">VISIT SHOP →</Link>
        </div>
      </div>
    </div>
  )
}