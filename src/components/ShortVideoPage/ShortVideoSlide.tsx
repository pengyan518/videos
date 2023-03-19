import React, {useEffect, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useParams} from 'react-router-dom'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {VideoItemProps} from '../../types'
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

export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const [currentItem, setCurrentItem] = useState(item)
  const matches = useMediaQuery('(min-width:768px)')
  // const swiper = useSwiper()
  const currentSlide = data.indexOf(item)

  // useEffect(() => {}, [])

  return (
    <div className="ShortVideoPage">
      <div className="absolute left-0 top-0">
        <ShortPlayer item={currentItem} />
      </div>
      <Swiper
        direction={'vertical'}
        threshold={25}
        slidesPerView={1}
        mousewheel={{forceToAxis: !0, invert: !1, sensitivity: 0.1}}
        touchStartPreventDefault={false}
        autoHeight={true}
        loop={false}
        spaceBetween={0}
        modules={[Mousewheel, Pagination]}
        onSwiper={swiper => {
          // window.swiper = swiper
        }}
        onTouchStart={(swiper, e) => {
          console.debug(`swiper: ${e}`)
        }}
        onAfterInit={swiper => {
          swiper.slideTo(currentSlide)
        }}
        onSlideChange={e => {
          console.debug(e.activeIndex)
          setCurrentItem(data[e.activeIndex])
        }}
        onClick={(swiper, e) => {
          window.vimeoPlayer
            .getPaused()
            .then((paused: boolean) => {
              if (paused) {
                window.vimeoPlayer.play()
              } else {
                window.vimeoPlayer.pause()
              }
            })
            .catch((error: any) => {
              // an error occurred
            })
        }}
        className="mySwiper">
        {data.map(el => (
          <SwiperSlide key={el.eid}>
            {({isActive}) => (
              <div className={`h-screen w-full ${isActive?'opacity-0':''}`}>
                <img src={el.imageForVideo.original} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
