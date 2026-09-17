import { supabase } from '@/lib/supabase'
export default async function ShopPage() {
  const { data } = await supabase.from('products').select('*')
  const products = data || []
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">KATAKA SHOP</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {products.map((p:any)=>(
          <div key={p.id} className="bg-white rounded-2xl shadow p-6">
            <div className="h-32 bg-slate-100 rounded-xl flex items-center justify-center font-black">{p.category.toUpperCase()}</div>
            <h3 className="font-black mt-4">{p.name}</h3>
            <p className="text-sm">UGX {p.price?.toLocaleString()}</p>
            <button className="mt-3 w-full bg-[#0a2463] text-white py-2 rounded-full font-bold text-sm">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  )
}