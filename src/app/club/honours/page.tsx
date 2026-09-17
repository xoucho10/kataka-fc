export default function Honours(){
 const honours = [
  {year:"2022", title:"Promotion to Uganda Premier League", desc:"First time in top flight — beat Kyetume FC 1-0 final day"},
  {year:"2019", title:"FUFA Big League Qualifiers", desc:"Eastern Region Champions"},
  {year:"2012", title:"Elgon Cup Winners", desc:"Beat Mbale Heroes in final — Kibirige father played"},
  {year:"2005", title:"Mbale District League", desc:"Unbeaten season — foundation of academy"},
 ]
 return(
 <div className="min-h-screen bg-[#0A1931] text-white p-8 max-w-[900px] mx-auto">
  <h1 className="text-4xl font-black text-[#FFC300]">HONOURS & TROPHIES</h1>
  <p className="text-sm text-gray-400 mt-1">25 years of building — more to come in UPL</p>
  <div className="mt-10 space-y-4">
   {honours.map(h=>(
    <div key={h.year} className="flex gap-6 bg-[#12244A] border border-white/10 rounded-xl p-5">
     <div className="w-16 h-16 bg-[#FFC300] text-black rounded-full flex items-center justify-center font-black">{h.year.slice(-2)}</div>
     <div><h3 className="font-black">{h.title}</h3><p className="text-[10px] text-[#FFC300]">{h.year}</p><p className="text-sm text-gray-300 mt-1">{h.desc}</p></div>
    </div>
   ))}
  </div>
  <div className="mt-10 text-center bg-[#12244A]/60 border border-dashed border-yellow-500/30 p-8 rounded-2xl"><p className="text-6xl">🏆</p><p className="font-black mt-3 text-[#FFC300]">NEXT TARGET: TOP 4 UPL 2024/25</p><p className="text-xs text-gray-400">Currently 4th — W7 D3 L2 — 24 pts — If finish top 4, qualify for CAF Confederation Cup</p></div>
 </div>
 )
}