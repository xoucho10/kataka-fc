import Link from "next/link"

const PLAYERS = [
  { id:1, name:"M. KIBIRIGE", pos:"MIDFIELDER", num:10, apps:12, goals:3, photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=60" },
  { id:2, name:"J. OKETCH", pos:"STRIKER", num:9, apps:12, goals:3, photo:"https://..." },
  { id:3, name:"D. MUSISI", pos:"GOALKEEPER", num:1, apps:12, goals:3, photo:"https://..." },
  { id:4, name:"S. LWANGA", pos:"MIDFIELDER", num:8, apps:12, goals:3, photo:"https://..." },
  { id:5, name:"P. MUGABI", pos:"DEFENDER", num:4, apps:12, goals:3, photo:"https://..." },
  { id:6, name:"R. KASOZI", pos:"WINGER", num:7, apps:12, goals:3, photo:"https://..." },
  { id:7, name:"A. KIZITO", pos:"DEFENDER", num:5, apps:12, goals:3, photo:"https://..." },
  { id:8, name:"F. SSEMAKULA", pos:"STRIKER", num:11, apps:12, goals:3, photo:"https://..." },
]

// In your return:
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {PLAYERS.map(p => (
    <Link key={p.id} href={`/squad/${p.id}`} className="bg-[#13254B] border border-white/10 rounded-2xl p-5 text-center hover:border-[#FFC300]/50 cursor-pointer">
      <div className="w-20 h-20 rounded-full mx-auto overflow-hidden">
        <img src={p.photo} className="w-full h-full object-cover" alt={p.name} />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span></span>
        <span className="bg-[#FFC300] text-black w-7 h-7 flex items-center justify-center rounded-full text-xs font-black">{p.num}</span>
      </div>
      <h3 className="font-black text-white text-sm mt-2">{p.name}</h3>
      <p className="text-[11px] text-[#FFC300]">{p.pos}</p>
      <div className="flex gap-2 justify-center mt-3">
        <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">{p.apps} APPS</span>
        <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full">{p.goals} GOALS</span>
      </div>
    </Link>
  ))}
</div>