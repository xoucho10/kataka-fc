import { supabase } from '@/lib/supabase'
import Link from 'next/link'
export default async function SquadPage() {
  const { data } = await supabase.from('players').select('*').order('number')
  const players = data || []
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">SQUAD 2024/25</h1>
      <p className="text-slate-500">For The People • 4th Place</p>
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {players.map((p:any)=>(
          <Link key={p.id} href={`/squad/${p.id}`} className="bg-white rounded-2xl shadow p-6 hover:shadow-xl">
            <div className="h-24 bg-[#0a2463] rounded-xl flex items-center justify-center text-white text-3xl font-black">{p.number}</div>
            <h3 className="font-black mt-3">{p.name}</h3>
            <p className="text-xs">{p.position} • {p.goals}G {p.assists}A • ⭐{p.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}