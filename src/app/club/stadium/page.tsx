export default function Stadium(){
 return(
 <div className="min-h-screen bg-[#0A1931] text-white p-8 max-w-[1000px] mx-auto">
  <h1 className="text-4xl font-black text-[#FFC300]">LUFUMBI GROUND</h1><p className="text-sm text-gray-400">Home of the Eagles — 2000 capacity — Drum echoes</p>
  <div className="mt-8 grid md:grid-cols-2 gap-6">
   <div className="h-80 bg-[#12244A] border border-white/10 rounded-2xl flex items-center justify-center text-gray-500">Stadium Image / Map — Insert /stadium.jpg in public/</div>
   <div className="space-y-4">
    <div className="bg-[#12244A] p-5 rounded-xl border border-white/10"><p className="text-[11px] text-[#FFC300]">CAPACITY & LOCATION</p><p className="font-bold mt-1">2000 seats — Mbale City, Eastern Uganda • 4km from Mbale Town</p><p className="text-xs text-gray-400 mt-2">Main stand: 500 covered • Open terraces: 1500 • Drum corner for ultras behind goal</p></div>
    <div className="bg-[#12244A] p-5 rounded-xl border border-white/10"><p className="text-[11px] text-[#FFC300]">MATCHDAY EXPERIENCE</p><p className="text-xs text-gray-300 mt-1">Gate opens 12:00 EAT • Drum beating starts 14:00 • Kickoff 15:00 / 16:00 • Ticket: 5k ordinary, 10k VIP, 20k VVIP drum side. Kids free with adult. Roasted maize, chapati, passion juice available.</p></div>
    <div className="bg-[#12244A] p-5 rounded-xl border border-white/10"><p className="text-[11px] text-[#FFC300]">HOW TO GET THERE</p><p className="text-xs text-gray-300 mt-1">Boda: 3k from Mbale taxi park • Taxi: Mbale — Lufumbi • Private car parking available. Google Maps: Lufumbi Ground Kataka FC</p></div>
   </div>
  </div>
 </div>
 )
}