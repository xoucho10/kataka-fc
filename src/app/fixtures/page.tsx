import { supabase } from '@/lib/supabase'
export default async function FixturesPage() {
  const { data } = await supabase.from('fixtures').select('*').order('date')
  const fixtures = data || []
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">FIXTURES</h1>
      <div className="mt-8 space-y-4">
        {fixtures.map((f:any)=>(
          <div key={f.id} className="bg-white rounded-2xl p-6 flex justify-between shadow">
            <div><p className="font-black">{f.home? `KATAKA vs ${f.opponent}`: `${f.opponent} vs KATAKA`}</p><p className="text-sm text-slate-500">{f.date} • {f.time} • {f.venue} • {f.status.toUpperCase()}</p></div>
            <div className="font-black text-[#0a2463]">{f.status==='finished'? `${f.score_home}-${f.score_away}` : 'VS'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}