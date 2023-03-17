import React, {useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useParams} from 'react-router-dom'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'
// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'


export type ShortVideoSlideProps = {
  item: any
}

export default function ShortVideoSlide({item}: ShortVideoSlideProps) {
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <div className="ShortVideoPage">
      <Swiper
        direction={'vertical'}
        threshold={0}
        slidesPerView={1}
        mousewheel={true}
        touchStartPreventDefault={false}
        autoHeight={true}
        loop={true}
        spaceBetween={0}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="h-screen w-full">
            <img src="https://live.staticflickr.com/65535/52567927197_2196063742_h.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">
            <img src="https://live.staticflickr.com/65535/52678630970_0cc74bf0e0_w.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
