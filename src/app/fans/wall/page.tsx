import { supabase } from '@/lib/supabase'
export default async function FansWall() {
  const { data } = await supabase.from('fans').select('*').order('created_at',{ascending:false})
  const fans = data || []
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">FANS WALL</h1>
      <p className="text-slate-500">For The People — Voice of Mbale</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {fans.map((f:any)=>(
          <div key={f.id} className="bg-white rounded-2xl shadow p-6 border-l-4 border-yellow-400">
            <p className="font-bold">"{f.message}"</p>
            <p className="text-xs mt-3 text-slate-500">— {f.name} • {f.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}