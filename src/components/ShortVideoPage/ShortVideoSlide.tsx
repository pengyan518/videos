import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useParams} from 'react-router-dom'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {VideoItemProps} from '../../types'
import swiperOnClick, {onSlideChange, onSlideChangeTransitionEnd, onSlideChangeTransitionStart} from './swiperOnClick'
import SlideWrapper from './SlideWrapper'
import useRect from "../../hooks/useRect";
// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

export type ShortVideoSlideProps = {
  item: VideoItemProps
  data: VideoItemProps[]
}


export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const {size, element, changeSize} = useRect<HTMLDivElement>([window.innerWidth])
  const [currentItem, setCurrentItem] = useState(item)
  const [shareAreaStyle, setShareAreaHeight] = useState({
    height: 0,
  })
  const matches = useMediaQuery('(min-width:768px)')
  // const swiper = useSwiper()
  const currentSlide = data.indexOf(item)
  const shortPlayerRef = useRef<any>(null)
  const gridClass = matches ? 'md:grid-cols-[1fr_1.6fr_1fr_1fr] gap-2' : 'grid-cols-[0fr_1.6fr_0fr]'

  // const vimeoPlayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (element.current) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setShareAreaHeight({height: element.current ? size.width * 1.777 : 0})
    }
  }, [element, size.width])

  const handleTouch = useCallback(() => {
    if (!matches) swiperOnClick()
  }, [matches])

  const handleClick = useCallback(() => {
    if (matches) swiperOnClick()
  }, [matches])

  // if (!shareAreaStyle.height) return <>loading...</>
  return (
    <div className="ShortVideoPage">
      <div className="absolute left-0 top-0">
        <div className={`w-screen relative grid ${gridClass} justify-center`}>
          <div />
          <div className="w-full overflow-hidden" ref={element}>
            <ShortPlayer item={currentItem} ref={shortPlayerRef} />
          </div>
          <div />
        </div>
      </div>
      <Swiper
        direction={'vertical'}
        threshold={matches ? 25 : 0}
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
        onSlideChange={onSlideChange}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart(setCurrentItem, data)}
        // onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        // onClick={swiperOnClick}
        className="mySwiper">
        {data.map(el => (
          <SwiperSlide key={el.eid}>
            {({isActive}) => (
              <SlideWrapper isActive={isActive} gridClass={gridClass}>
                <div>
                  <div />
                  <div className="relative h-[calc(100vh-120px)] overflow-hidden">
                    <img
                      className="absolute left-0 top-0 object-cover"
                      onTouchEnd={handleTouch}
                      onClick={handleClick}
                      src={el.imageForVideo.original}
                    />
                  </div>
                  <div />
                </div>
              </SlideWrapper>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-screen h-screen left-0 top-0 ">
        <div className={`w-screen h-screen relative grid ${gridClass} justify-center items-center`}>
          <Link className="z-10" to={`/${controller}`}>
            Back
          </Link>
          <div />
          <div className="text-center h-screen display-none md:flex items-center" >
            <div className="bg-white w-full rounded-xl" style={shareAreaStyle}>Follow us!</div>
          </div>
        </div>
      </div>
    </div>
  )
}
