export default function ShopPage() {
  const products = [
    { name: "HOME KIT 24/25", price: "85,000", old: "100,000", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a0?q=80&w=500" },
    { name: "AWAY KIT 24/25", price: "85,000", old: "100,000", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500" },
    { name: "TRAINING JERSEY", price: "55,000", old: "", img: "https://images.unsplash.com/photo-1580087256930-1d4a2c0d3f7a?q=80&w=500" },
    { name: "FAN SCARF", price: "25,000", old: "", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=500" },
  ]
  return (
    <div className="bg-[#0A1931] text-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-black text-[#FFC300]">KATKA FC STORE</h1>
        <p className="text-gray-400 mt-2">Official jerseys. Every purchase supports the club.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {products.map((p,i) => (
            <div key={i} className="bg-[#12244A] rounded-2xl overflow-hidden border border-white/10 group hover:border-yellow-500/50">
              <img src={p.img} className="h-64 w-full object-cover" alt={p.name} />
              <div className="p-4">
                <h3 className="font-bold text-sm">{p.name}</h3>
                <div className="flex gap-2 items-center mt-1"><span className="text-[#FFC300] font-black">UGX {p.price}</span>{p.old && <span className="text-xs line-through text-gray-500">UGX {p.old}</span>}</div>
                <button className="w-full mt-4 bg-[#FFC300] text-black font-black py-2.5 rounded-full text-xs">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}