const staff = [
 {role:"Chairman", name:"Hajji Abdul Lule", since:"2000 - Founder", bio:"Founded Kataka to give Lufumbi youth platform. Businessman from Mbale."},
 {role:"Head Coach", name:"Coach Ssimbwa Sam", since:"2023 - Present", bio:"Former UPL player. Tactics: 4-3-3 attacking. Developing Kibirige to top scorer."},
 {role:"Captain", name:"M. Kibirige #10", since:"2022 - Captain", bio:"7 goals this season, academy graduate, drum heritage ambassador. Target 15 goals."},
 {role:"Team Manager", name:"Wadada Musa", since:"2021", bio:"Handles logistics, tickets, fan engagement at Lufumbi Ground."},
 {role:"Media Officer", name:"You — Management System", since:"2025", bio:"Building 25-page digital platform for club. Next: Mobile app + e-commerce."},
 {role:"Head of Academy", name:"Coach Oketcho", since:"2019", bio:"U13-U20 youth, 60 kids training daily. Producing next Eagles."},
]
export default function ManagementPage(){
 return(
 <div className="min-h-screen bg-[#0A1931] text-white p-8 max-w-[1100px] mx-auto">
  <h1 className="text-4xl font-black text-[#FFC300]">CLUB MANAGEMENT</h1><p className="text-sm text-gray-400 mt-1">People behind the Eagles • For The People, For Lufumbi</p>
  <div className="grid md:grid-cols-2 gap-5 mt-8">
   {staff.map(s=>(
    <div key={s.name} className="bg-[#12244A] border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30">
     <p className="text-[10px] tracking-widest text-[#FFC300]">{s.role.toUpperCase()} • {s.since}</p>
     <h3 className="font-black text-lg mt-2">{s.name}</h3>
     <p className="text-sm text-gray-300 mt-2">{s.bio}</p>
     <p className="text-[10px] text-gray-500 mt-3">Email: {s.name.split(' ')[0].toLowerCase()}@katakafc.com • Lufumbi Office</p>
    </div>
   ))}
  </div>
  <div className="mt-8 bg-[#FFC300] text-black rounded-xl p-5 flex justify-between items-center"><p className="font-black text-sm">Want to join management? Volunteer for matchday at Lufumbi Ground</p><button className="bg-black text-[#FFC300] px-5 py-2 rounded-full text-xs font-black">APPLY NOW</button></div>
 </div>
 )
}