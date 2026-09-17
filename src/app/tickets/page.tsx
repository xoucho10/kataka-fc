'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TicketsPage() {
  const [fixtures, setFixtures] = useState<any[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [selected, setSelected] = useState<any>(null)

  useEffect(()=>{ supabase.from('fixtures').select('*').eq('status','upcoming').then(({data})=> setFixtures(data||[])) },[])

  async function buy() {
    if(!selected || !name || !phone) { alert('Fill all'); return }
    const { error } = await supabase.from('tickets').insert({ fixture_id: selected.id, category:'Ordinary', price:20000, buyer_name:name, phone })
    if(error) alert(error.message)
    else { alert('Ticket booked! FOR THE PEOPLE!'), setName(''), setPhone('') }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-black">BUY TICKETS</h1>
      <p className="text-slate-500">Lufumbi Ground • UGX 20,000 • Ordinary</p>
      <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-4">
        <select className="w-full border p-3 rounded-xl" onChange={e=> setSelected(fixtures.find(f=>f.id===e.target.value))}>
          <option>Select Match</option>
          {fixtures.map((f:any)=><option key={f.id} value={f.id}>{f.opponent} • {f.date}</option>)}
        </select>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" className="w-full border p-3 rounded-xl" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone 07XX" className="w-full border p-3 rounded-xl" />
        <button onClick={buy} className="w-full bg-[#0a2463] text-white py-3 rounded-full font-black">BOOK TICKET • 20K</button>
        <p className="text-xs text-center text-slate-500">Paid at gate • Drum heritage included 🥁</p>
      </div>
    </div>
  )
}