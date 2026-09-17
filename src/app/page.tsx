import Hero from '@/components/home/Hero'
import NextMatch from '@/components/home/NextMatch'
import FeaturedPlayers from '@/components/home/FeaturedPlayers'
import SeasonStats from '@/components/home/SeasonStats'
import DrumHeritage from '@/components/home/DrumHeritage'

export default function Home() {
  return (
    <>
      <Hero />
      <NextMatch />
      <SeasonStats />
      <FeaturedPlayers />
      <DrumHeritage />
    </>
  )
}