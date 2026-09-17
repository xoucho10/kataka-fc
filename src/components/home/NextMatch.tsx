import { supabase } from '@/lib/supabase'

export default async function NextMatch() {
  const { data } = await supabase.from('fixtures').select('*').eq('status','upcoming').order('date').limit(1)
  const match = data && data[0]
  return (
    <section className="mx-auto max-w-7xl px-4 -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-between items-center">
        <div>
          <p className="text-xs font-bold text-slate-500">NEXT MATCH</p>
          <h3 className="text-2xl font-black">{match? `KATAKA FC vs ${match.opponent}` : 'KATAKA FC vs VIPERS SC'}</h3>
          <p className="text-sm text-slate-600">{match? `${match.date} • ${match.time} • ${match.venue}` : 'SEP 21 • 16:00 • LUFUMBI GROUND'}</p>
        </div>
        <div className="text-right">
          <p className="bg-[#0a2463] text-white px-4 py-2 rounded-full font-bold text-sm">UPL</p>
          <a href="/tickets" className="block mt-2 text-xs font-black text-[#0a2463]">BUY TICKET →</a>
        </div>
      </div>
    </section>
  )
}