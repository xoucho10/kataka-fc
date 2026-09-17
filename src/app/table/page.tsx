export default function TablePage() {
  const table = [
    { pos:1, club:'Vipers SC', pld:12, gd:12, pts:28 },
    { pos:2, club:'SC Villa', pld:12, gd:8, pts:26 },
    { pos:3, club:'BUL FC', pld:12, gd:6, pts:25 },
    { pos:4, club:'KATAKA FC', pld:12, gd:5, pts:24, highlight:true },
    { pos:5, club:'KCCA FC', pld:12, gd:3, pts:22 },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-black">UPL TABLE</h1>
      <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">
        <div className="grid grid-cols-5 bg-[#0a2463] text-white p-4 font-bold text-sm"><p>POS</p><p>CLUB</p><p>PLD</p><p>GD</p><p>PTS</p></div>
        {table.map(t=>(
          <div key={t.pos} className={`grid grid-cols-5 p-4 text-sm ${t.highlight? 'bg-yellow-100 font-black border-l-4 border-yellow-400':''}`}><p>{t.pos}</p><p>{t.club}</p><p>{t.pld}</p><p>{t.gd}</p><p>{t.pts}</p></div>
        ))}
      </div>
      <p className="mt-4 text-center font-bold text-[#0a2463]">KATAKA FC 4TH PLACE • W7 D3 L2 • FOR THE PEOPLE!</p>
    </div>
  )
}