export default function PartnersPage() {
  return (
    <div className="bg-[#0A1931] text-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-black text-[#FFC300]">PARTNER WITH KATAKA FC</h1>
        <p className="text-gray-400 mt-3 max-w-2xl">Join 10,000+ fans, UPL TV exposure, and community impact. Your brand on our chest, our ground, our heart.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { title: "SHIRT SPONSOR", price: "UGX 30M / Season", perks: ["Logo on chest", "UPL TV", "5k jerseys", "Socials 100k reach"] },
            { title: "GROUND SPONSOR", price: "UGX 15M / Season", perks: ["Stadium naming", "Boards", "Tickets 50", "Community events"] },
            { title: "COMMUNITY PARTNER", price: "UGX 5M / Season", perks: ["Youth academy", "CSR projects", "Logo on website", "10 tickets"] },
          ].map((p,i) => (
            <div key={i} className="bg-[#12244A] border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="font-black text-[#FFC300]">{p.title}</h3><p className="text-xl font-black mt-2">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">{p.perks.map((x,j) => <li key={j}>• {x}</li>)}</ul>
              <a href="https://wa.me/256700000000?text=Interested in Kataka FC sponsorship" className="block text-center mt-6 bg-[#FFC300] text-black font-black py-3 rounded-full text-sm">ENQUIRE ON WHATSAPP</a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white text-black rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div><h3 className="font-black text-xl">Ready to sponsor the Eagles?</h3><p className="text-sm">Email: sponsorship@katakafc.com | Tel: +256 700 000 000</p></div>
          <a href="mailto:sponsorship@katakafc.com" className="bg-black text-white px-8 py-3 rounded-full font-black text-sm">SEND PROPOSAL</a>
        </div>
      </div>
    </div>
  )
}