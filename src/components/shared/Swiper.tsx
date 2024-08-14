import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      className="h-[70vh]"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="bg-[#F2F2F2] h-full">
          <div className="w-full h-full container">
            <div className="flex justify-between items-center h-full">
              <div className="flex flex-col gap-4">
                <p className="text-5xl font-medium">
                  Be a part of the world's <br /> most ambitious ventures
                </p>
                <p className="text-neutral-500 text-xl">
                  Republic’s financial ecosystem unlocks private markets for
                  investors and institutions across the globe.
                </p>
                <button className="text-lg font-bold bg-blue-600 text-white pt-2 pb-3 hover:bg-blue-500 transition rounded-md w-44">
                  Start investing
                </button>
              </div>
              <img
                className="max-lg:hidden"
                src="https://seedrs.imgix.net/uploads/banner_content/foreground_image_desktop/1161/9ti2tyrnfij0vvpb4ay18kndbawmr4n/b2-f1ma.png?bri=0&s=eb2b93f2b82151335b7b47a914cb5a45"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#06206A] h-full">
          <div className="w-full h-full container">
            <div className="flex justify-between items-center h-full">
              <div className="flex text-white flex-col gap-4">
                <img
                  src="https://seedrs.imgix.net/uploads/banner_content/logo/1162/anc0trnk1x9o4vdc9rv58g4wuygy4m3/notelogo.png?bri=0&s=89a8e31e8b97e783c0e93b9bddf2ee48"
                  alt="Banner image"
                />
                <p className="text-neutral-500 text-xl">
                  One asset, broad exposure to venture & crypto. Fueled by
                  Republic’s thriving ecosystem.
                </p>
                <button className="text-lg text-black font-bold bg-white border-2 border-neutral-300 pb-2 pt-1.5 hover:text-blue-600 hover:border-blue-600 transition rounded-md w-36">
                  Learn more
                </button>
              </div>
              <img
                width={500}
                height={500}
                className="max-lg:hidden"
                src="https://seedrs.imgix.net/uploads/banner_content/foreground_image_desktop/1162/anc0trnk1x9o4vdc9rv58g4wuygy4m3/b1-f1cnew.png?bri=0&s=ac54cf59d92c7373b2947f09e2026be4"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#F2F2F2] h-full">
          <div className="w-full h-full container">
            <div className="flex justify-between items-center h-full">
              <div className="flex flex-col gap-4">
                <p className="text-5xl font-medium">
                  Discover alternate <br /> investment opportunities
                </p>
                <p className="text-neutral-500 text-xl">
                  Invest in real estate, healthcare, and more through Republic's
                  partners.
                </p>
                <button className="text-lg font-bold bg-white border-2 border-neutral-300 p-2 hover:text-blue-600 hover:border-blue-600 transition rounded-md w-36">
                  Learn more
                </button>
              </div>
              <img
                className="max-lg:hidden"
                src="https://seedrs.imgix.net/uploads/banner_content/foreground_image_desktop/1161/9ti2tyrnfij0vvpb4ay18kndbawmr4n/b2-f1ma.png?bri=0&s=eb2b93f2b82151335b7b47a914cb5a45"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

//
