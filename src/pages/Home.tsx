import HeroPage from '../components/shared/HeroPage'
import MostTraction from '../components/shared/MostTraction'
import PortfolioWins from '../components/shared/PortfolioWins'

const Home = () => {
  return (
    <main className="pt-20">
      <HeroPage />
      <MostTraction />
      <PortfolioWins />
    </main>
  )
}

export default Home
