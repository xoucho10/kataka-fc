"use client"
import { useState } from "react"
import Link from "next/link"

const products = [
  { id: "home-kit-24-25", name: "HOME KIT 24/25", price: 85000, old: 100000, img: "/jersey-home.png" },
  { id: "away-kit-24-25", name: "AWAY KIT 24/25", price: 85000, old: 100000, img: "/jersey-away.png" },
  { id: "training-jersey", name: "TRAINING JERSEY", price: 55000, img: "/jersey-training.png" },
  { id: "fan-scarf", name: "FAN SCARF", price: 25000, img: "/scarf.png" },
]

export default function ShopPage() {
  const [cart, setCart] = useState<any[]>([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (p: any) => {
    setCart([...cart, p])
    setShowCart(true)
    // Vibration + toast effect
    setTimeout(() => setShowCart(false), 3000)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const checkoutWhatsApp = () => {
    const msg = `Hello Kataka FC Store! I want to buy:\n${cart.map(c => `- ${c.name} UGX ${c.price}`).join("\n")}\nTotal: UGX ${total}\nDelivery: Lufumbi?`
    window.open(`https://wa.me/256700000000?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <div className="bg-[#0A1931] text-white min-h-screen">
      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed top-0 right-0 w-[380px] h-full bg-[#12244A] z-[100] border-l border-white/10 p-6 shadow-2xl">
          <div className="flex justify-between"><h3 className="font-black text-[#FFC300]">CART ({cart.length})</h3><button onClick={() => setShowCart(false)}>✕</button></div>
          <div className="mt-6 space-y-3">
            {cart.map((c,i) => <div key={i} className="flex justify-between bg-[#0A1931] p-3 rounded-xl text-sm"><span>{c.name}</span><span className="text-[#FFC300]">UGX {c.price.toLocaleString()}</span></div>)}
          </div>
          {cart.length > 0 && (
            <div className="mt-6">
              <p className="font-black">Total: UGX {total.toLocaleString()}</p>
              <button onClick={checkoutWhatsApp} className="w-full mt-4 bg-[#25D366] text-white font-black py-3 rounded-full">CHECKOUT VIA WHATSAPP</button>
              <button onClick={checkoutWhatsApp} className="w-full mt-2 bg-[#FFC300] text-black font-black py-3 rounded-full">PAY WITH MTN MOMO</button>
            </div>
          )}
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          <div><h1 className="text-4xl font-black text-[#FFC300]">KATKA FC STORE</h1><p className="text-gray-400 text-sm mt-1">Official kits • Supports the club</p></div>
          <button onClick={() => setShowCart(true)} className="bg-[#FFC300] text-black px-6 py-2.5 rounded-full font-black text-sm">CART ({cart.length}) 🛒</button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {products.map(p => (
            <div key={p.id} className="bg-[#12244A] rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition">
              <Link href={`/shop/${p.id}`}>
                <img src={p.img} alt={p.name} className="h-64 w-full object-cover bg-[#1A2F60] p-4"
                  onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1529900748604-07564a03e7a0?q=80&w=500"} />
              </Link>
              <div className="p-4">
                <Link href={`/shop/${p.id}`}><h3 className="font-bold text-sm hover:text-[#FFC300]">{p.name}</h3></Link>
                <div className="flex gap-2 items-center mt-1"><span className="text-[#FFC300] font-black">UGX {p.price.toLocaleString()}</span>{p.old && <span className="text-xs line-through text-gray-500">UGX {p.old.toLocaleString()}</span>}</div>
                <button onClick={() => addToCart(p)} className="w-full mt-4 bg-[#FFC300] text-black font-black py-2.5 rounded-full text-xs hover:bg-yellow-300">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}