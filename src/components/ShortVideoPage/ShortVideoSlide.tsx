import React, {useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useParams} from 'react-router-dom'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {VideoItemProps} from '../../types'
import swiperOnClick, {onSlideChange, onSlideChangeTransitionEnd} from './swiperOnClick'
// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

export type ShortVideoSlideProps = {
  item: VideoItemProps
  data: VideoItemProps[]
}

// const ButtonContainer = ({handleClick, activeTab, children}) => {
//   const activeClass = 'text-white hover:text-white hover:no-underline bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none'
//   const inActiveClass = 'text-gray-600 bg-white hover:bg-gray-200 hover:no-underline focus:outline-none focus:shadow-none'
//
//   const getClassName = (child: {props: {label: any}}) => {
//     return `inline-flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-[0.45rem] text-[0.85rem] min-w-[82px] font-medium transition duration-200 z-depth-1 rounded-md ${
//       activeTab === child.props.label ? activeClass : inActiveClass
//     }`
//   }
//
//   return (
//     <div className="flex gap-3 items-center mr-4">
//       {React.Children.map(children, (child: any) => {
//         return React.cloneElement(child as React.ReactElement<any>, {
//           className: getClassName(child),
//           onClick: handleClick(child.props.showPopularView),
//         })
//       })}
//     </div>
//   )
// }

interface PlayerProps {
  player: {
    play: any
    paused: any
    pause: any
  }
}

export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const [currentItem, setCurrentItem] = useState(item)
  const matches = useMediaQuery('(min-width:768px)')
  // const swiper = useSwiper()
  const currentSlide = data.indexOf(item)
  const shortPlayerRef = useRef<PlayerProps>(null)

  // useEffect(() => {}, [])

  return (
    <div className="ShortVideoPage">
      <div className="absolute left-0 top-0">
        <ShortPlayer item={currentItem} ref={shortPlayerRef} />
      </div>
      <Swiper
        direction={'vertical'}
        threshold={25}
        slidesPerView={1}
        speed={700}
        mousewheel={{forceToAxis: !0, invert: !1, sensitivity: 0.1}}
        touchStartPreventDefault={false}
        autoHeight={true}
        loop={false}
        spaceBetween={0}
        modules={[Mousewheel, Pagination]}
        onSwiper={swiper => {
          // window.swiper = swiper
        }}
        // onTouchStart={swiperOnClick}
        onAfterInit={swiper => {
          swiper.slideTo(currentSlide)
        }}
        onSlideChangeTransitionStart={() => {
          // window.vimeoPlayer = null
          window.videoJsPlayer = null
          window.youTubePlayer = null
        }}
        onSlideChange={onSlideChange(setCurrentItem, data)}
        // onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        // onClick={swiperOnClick}
        className="mySwiper">
        {data.map(el => (
          <SwiperSlide key={el.eid}>
            {({isActive}) => (
              <div
                className={`cursor-pointer h-screen w-full ${isActive ? 'opacity-10' : ''}`}
                // onTouchStart={swiperOnClick}
                // onTouchMove={swiperOnClick}
                // onTouchEnd={swiperOnClick}
                onClick={swiperOnClick}>
                <img src={el.imageForVideo.original} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
