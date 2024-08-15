import Founders from '../components/shared/Founders'
import HeroPage from '../components/shared/HeroPage'
import MostTraction from '../components/shared/MostTraction'
import PortfolioWins from '../components/shared/PortfolioWins'

const Home = () => {
  return (
    <main className="pt-20">
      <HeroPage />
      <MostTraction />
      <PortfolioWins />
      <Founders />
    </main>
  )
}

export default Home
