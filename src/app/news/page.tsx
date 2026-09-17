import { supabase } from '@/lib/supabase'
import Link from 'next/link'
export default async function NewsPage() {
  const { data } = await supabase.from('news').select('*').order('created_at',{ascending:false})
  const news = data || []
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">LATEST NEWS</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {news.map((n:any)=>(
          <Link key={n.id} href={`/news/${n.slug}`} className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-black text-xl">{n.title}</h3>
            <p className="text-sm text-slate-500 mt-2 line-clamp-3">{n.content}</p>
            <p className="text-xs mt-4 text-[#0a2463] font-bold">{n.created_at?.slice(0,10)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}