import { supabase } from '@/lib/supabase'
export default async function FeaturedPlayers() {
  const { data } = await supabase.from('players').select('*').eq('featured', true).limit(3)
  const players = data || []
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-black">FEATURED STARS</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {players.map((p: any) => (
          <div key={p.id} className="bg-white rounded-2xl shadow p-6">
            <div className="h-32 bg-slate-100 rounded-xl flex items-center justify-center text-4xl font-black text-[#0a2463]">{p.number}</div>
            <h3 className="font-black mt-4">{p.name}</h3>
            <p className="text-xs text-slate-500">{p.position} • {p.apps} APPS • {p.goals} GOALS • ⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </section>
  )
}