import Link from "next/link"

const NEWS: any = {
  "kataka-beats-bul-2-1": { title:"KATKA STUNS BUL FC 2-1 AT LUFUMBI", cat:"Match Report", content:"What a night at Lufumbi Ground! 5,000 fans, drum beating non-stop. M. Kibirige 78' winner. W7 D3 L2 - 4TH - 24 PTS. For the people. For Lufumbi. For Glory." },
}

export default async function Page({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params
  const item = NEWS[slug] || { title: slug.replaceAll("-"," ").toUpperCase(), cat:"News", content:"Full story from Kataka FC official. Lufumbi Ground, Mbale. Drum is our heartbeat." }
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A1931] p-8 max-w-4xl mx-auto">
      <Link href="/news" className="text-sm font-bold">← BACK TO NEWS</Link>
      <span className="ml-4 bg-[#FFC300] text-black text-xs px-3 py-1 rounded-full font-black">{item.cat}</span>
      <h1 className="text-4xl font-black mt-6">{item.title}</h1>
      <p className="mt-6 leading-relaxed">{item.content}</p>
    </div>
  )
}