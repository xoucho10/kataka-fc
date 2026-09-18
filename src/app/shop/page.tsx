"use client"
import { useState } from "react"
import Link from "next/link"

const products = [
  { id: "home-kit-24-25", name: "HOME KIT 24/25", price: 85000, old: 100000, cat: "Kit", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=60", desc: "Navy with Gold trim • JOMA • Drum heritage inside collar • Official UPL patch", sizes: ["S","M","L","XL","XXL"], badge: "BEST SELLER" },
  { id: "away-kit-24-25", name: "AWAY KIT 24/25", price: 85000, old: 100000, cat: "Kit", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=60", desc: "White with Navy stripes • Breathable • Player version available", sizes: ["S","M","L","XL"], badge: "NEW" },
  { id: "training-jersey", name: "TRAINING JERSEY", price: 55000, cat: "Training", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=60", desc: "For training & fans • Lightweight • W7 D3 L2 • 4TH print", sizes: ["M","L","XL","XXL"], badge: null },
  { id: "fan-scarf", name: "FAN SCARF", price: 25000, cat: "Accessories", img: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=600&q=60", desc: "Double knit • KATKA FC • For the people chant", sizes: ["One Size"], badge: "HOT" },
  { id: "cap-gold", name: "EAGLES CAP GOLD", price: 30000, cat: "Accessories", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=60", desc: "Gold embroidered K • Adjustable • UPL", sizes: ["One Size"], badge: null },
  { id: "drum-mini", name: "MINI DRUM", price: 40000, cat: "Heritage", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=60", desc: "Heritage drum • Handmade in Lufumbi • For home & gate", sizes: ["One Size"], badge: "HERITAGE" },
]

export default function ShopPage() {
  const [cart, setCart] = useState<any[]>([])
  const [showCart, setShowCart] = useState(false)
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<any>(null)

  const cats = ["All","Kit","Training","Accessories","Heritage"]
  const filtered = filter==="All"? products : products.filter(p=>p.cat===filter)

  const addToCart = (p: any, size="M") => {
    setCart([...cart, {...p, sizeSelected: size}])
    setShowCart(true)
    setTimeout(() => setShowCart(false), 2500)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const checkoutWhatsApp = () => {
    const msg = `Hello Kataka FC Store! 🦅 I want to buy:\n${cart.map(c => `- ${c.name} (${c.sizeSelected}) UGX ${c.price.toLocaleString()}`).join("\n")}\n\nTOTAL: UGX ${total.toLocaleString()}\n\nMy name: \nLocation: \nPhone:`
    window.open(`https://wa.me/256700000000?text=${encodeURIComponent(msg)}`,"_blank")
  }

  return (
    <div className="min-h-screen bg-[#0A1931] text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-[#FFC300] tracking-tight">KATKA FC STORE</h1>
          <p className="text-xs text-slate-400 mt-1">Official kits • Supports the club • W7 D3 L2 • 4TH • 24 PTS • Lufumbi Ground</p>
        </div>
        <button onClick={()=>setShowCart(true)} className="bg-[#FFC300] text-black px-5 py-2.5 rounded-full font-black text-sm">CART ({cart.length}) 🛒</button>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 flex gap-2 flex-wrap">
        {cats.map(c=>(
          <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full text-xs font-black border ${filter===c?'bg-[#FFC300] text-black border-[#FFC300]':'bg-[#12244A] border-white/10 text-white'}`}>{c}</button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-5">
        {filtered.map(p=>(
          <div key={p.id} className="bg-[#12244A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC300]/50 transition group">
            <div className="relative h-52 bg-[#0A1931] overflow-hidden cursor-pointer" onClick={()=>setSelected(p)}>
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              {p.badge && <span className="absolute top-3 left-3 bg-[#FFC300] text-black text-[10px] px-2 py-1 rounded-full font-black">{p.badge}</span>}
              {p.old && <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-black">15% OFF</span>}
            </div>
            <div className="p-4">
              <p className="text-[10px] text-slate-400 tracking-widest">{p.cat}</p>
              <h3 className="font-black text-sm mt-1">{p.name}</h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-[#FFC300] font-black text-sm">UGX {p.price.toLocaleString()}</p>
                {p.old && <p className="text-[10px] text-slate-500 line-through">UGX {p.old.toLocaleString()}</p>}
              </div>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {p.sizes.map((s:string)=><span key={s} className="text-[10px] bg-white/10 px-2 py-1 rounded-full">{s}</span>)}
              </div>
              <button onClick={()=>addToCart(p, p.sizes[0])} className="w-full mt-4 bg-[#FFC300] text-black py-2.5 rounded-full font-black text-xs hover:bg-white transition">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Bar */}
      <div className="max-w-7xl mx-auto px-6 pb-8 grid md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs"><span className="font-black text-[#FFC300]">FREE DELIVERY</span> • Mbale town for orders over 100K</div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs"><span className="font-black text-[#FFC300]">OFFICIAL</span> • 10% goes to Lufumbi academy</div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs"><span className="font-black text-[#FFC300]">PAY</span> • MTN MoMo • Airtel Money • Cash</div>
      </div>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="w-full max-w-sm bg-white text-black h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="font-black text-xl">CART ({cart.length})</h2>
              <button onClick={()=>setShowCart(false)} className="w-8 h-8 bg-black text-white rounded-full">✕</button>
            </div>
            {cart.length===0? <p className="mt-10 text-gray-500 text-sm">Cart empty. Add kits!</p> : (
              <>
                <div className="mt-6 space-y-3">
                  {cart.map((c,i)=>(
                    <div key={i} className="flex gap-3 border-b pb-3">
                      <img src={c.img} className="w-14 h-14 rounded object-cover" alt={c.name} />
                      <div className="flex-1">
                        <p className="font-black text-xs">{c.name}</p>
                        <p className="text-[11px] text-gray-500">{c.sizeSelected} • {c.cat}</p>
                        <p className="text-xs font-bold">UGX {c.price.toLocaleString()}</p>
                      </div>
                      <button onClick={()=>setCart(cart.filter((_,idx)=>idx!==i))} className="text-xs text-red-600 font-bold">Remove</button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between font-black text-lg"><span>Total</span><span>UGX {total.toLocaleString()}</span></div>
                  <button onClick={checkoutWhatsApp} className="w-full mt-4 bg-[#0A1931] text-white py-3 rounded-full font-black text-sm">ORDER VIA WHATSAPP →</button>
                  <p className="text-[11px] text-gray-500 mt-3 text-center">You will be redirected to WhatsApp. Drum heritage included 🥁</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-4" onClick={()=>setSelected(null)}>
          <div className="bg-white text-black rounded-2xl max-w-3xl w-full grid md:grid-cols-2 overflow-hidden" onClick={e=>e.stopPropagation()}>
            <img src={selected.img} alt={selected.name} className="w-full h-96 object-cover" />
            <div className="p-6">
              <p className="text-[10px] tracking-widest text-gray-500">{selected.cat}</p>
              <h2 className="text-2xl font-black mt-1">{selected.name}</h2>
              <p className="text-sm text-gray-600 mt-3">{selected.desc}</p>
              <p className="text-xl font-black mt-4 text-[#0A1931]">UGX {selected.price.toLocaleString()} <span className="text-xs line-through text-gray-400 ml-2">{selected.old?`UGX ${selected.old.toLocaleString()}`:""}</span></p>
              <div className="mt-4">
                <p className="text-xs font-bold">SIZE</p>
                <div className="flex gap-2 mt-2">{selected.sizes.map((s:string)=><button key={s} onClick={()=>addToCart(selected,s)} className="border rounded-full px-4 py-2 text-xs font-black hover:bg-[#FFC300] hover:border-[#FFC300]">{s}</button>)}</div>
              </div>
              <button onClick={()=>{addToCart(selected); setSelected(null)}} className="w-full mt-6 bg-[#FFC300] text-black py-3 rounded-full font-black">ADD TO CART • {selected.price.toLocaleString()}</button>
              <button onClick={()=>setSelected(null)} className="w-full mt-2 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}