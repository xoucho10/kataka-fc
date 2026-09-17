"use client"
import { useParams } from "next/navigation"

export default function ProductPage() {
  const { id } = useParams()
  return (
    <div className="bg-[#0A1931] text-white min-h-screen p-10">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10">
        <img src="/jersey-home.png" className="w-full h-[500px] object-contain bg-[#12244A] rounded-2xl" alt="product" />
        <div>
          <h1 className="text-4xl font-black text-[#FFC300] uppercase">{(id as string).replace(/-/g, " ")}</h1>
          <p className="text-2xl font-black mt-4">UGX 85,000</p>
          <p className="text-sm text-gray-400 mt-4">Official 2024/25 Kataka FC kit. Made by JOMA. 100% polyester. Supports club development.</p>
          <div className="flex gap-2 mt-6">{["S","M","L","XL"].map(s => <button key={s} className="w-12 h-12 border border-white/20 rounded-full hover:bg-[#FFC300] hover:text-black font-black">{s}</button>)}</div>
          <button className="w-full mt-8 bg-[#FFC300] text-black font-black py-4 rounded-full">ADD TO CART - UGX 85,000</button>
          <a href="https://wa.me/256700000000" className="block text-center mt-3 border border-white/20 py-3 rounded-full text-sm">ORDER ON WHATSAPP</a>
        </div>
      </div>
    </div>
  )
}