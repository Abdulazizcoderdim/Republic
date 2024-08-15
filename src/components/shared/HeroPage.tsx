import Swiper from './Swiper'

const HeroPage = () => {
  return (
    <div>
      <Swiper />
      <div className="container py-3">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 items-center">
          <div>
            <h1 className="text-2xl font-bold">3M+</h1>
            <p className="text-neutral-500 text-lg">
              Global investor community
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">2,500+</h1>
            <p className="text-neutral-500 text-lg">Ventures supported</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">31</h1>
            <p className="text-neutral-500 text-lg">Unicorns in portfolio</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">$2.6B+</h1>
            <p className="text-neutral-500 text-lg">Capital raised</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
