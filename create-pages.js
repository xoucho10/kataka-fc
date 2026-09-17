const fs = require('fs')
const pages = [
  'src/app/squad/page.tsx','src/app/squad/[id]/page.tsx','src/app/fixtures/page.tsx','src/app/fixtures/[id]/page.tsx','src/app/table/page.tsx','src/app/results/page.tsx',
  'src/app/news/page.tsx','src/app/news/[slug]/page.tsx','src/app/gallery/page.tsx','src/app/gallery/[album]/page.tsx','src/app/videos/page.tsx',
  'src/app/club/history/page.tsx','src/app/club/management/page.tsx','src/app/club/honours/page.tsx','src/app/club/stadium/page.tsx','src/app/academy/page.tsx',
  'src/app/tickets/page.tsx','src/app/tickets/success/page.tsx','src/app/shop/page.tsx','src/app/shop/[id]/page.tsx','src/app/shop/cart/page.tsx',
  'src/app/fans/membership/page.tsx','src/app/fans/wall/page.tsx','src/app/contact/page.tsx','src/app/admin/page.tsx'
]
pages.forEach(p => {
  const dir = p.substring(0, p.lastIndexOf('/'))
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})
  fs.writeFileSync(p, `export default function Page(){ return <div className="p-20 text-center"><h1 className="text-3xl font-bold">${p}</h1><p>Premium Kataka FC - Coming Soon</p></div> }`)
})
console.log('25 pages created OK')