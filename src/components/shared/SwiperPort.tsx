import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const SwiperPort = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        
        className="max-h-[70vh] relative"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
        }}
        spaceBetween={50}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src="/b1.png" className="rounded-3xl w-full md:h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/b2.png" className="rounded-3xl w-full md:h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/b3.png" className="rounded-3xl w-full md:h-full" alt="" />
        </SwiperSlide>
        <div className="absolute z-50 md:w-[150px] w-[80px] bg-gradient-to-l from-white/90 to-transparent pointer-events-none top-0 right-0 h-full "></div>
      </Swiper>
    </>
  )
}

export default SwiperPort
