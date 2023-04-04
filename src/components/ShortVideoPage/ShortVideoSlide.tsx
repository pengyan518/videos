import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {ShortsProps, VideoItemProps} from '../../types'
import swiperOnClick, {onSlideChange, handlePause} from './swiperOnClick'
import SlideWrapper from './SlideWrapper'
import useRect from '../../hooks/useRect'
import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import getFriendlyUrl from '../../utils/getFriendlyUrl'
import ShareButton from '../ShareButton/ShareButton'
import ShortVideoSharePanel from './ShortVideoSharePanel'
import {requestTimeout} from '../../utils/RAFTimeout'
import SlideItem from './SlideItem'

export type ShortVideoSlideProps = {
  item: VideoItemProps
  data: VideoItemProps[]
}

export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const {size, element} = useRect<HTMLDivElement>([window.innerWidth])
  const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  const [currentItem, setCurrentItem] = useState(item)
  const [shareAreaStyle, setShareAreaHeight] = useState({
    height: 0,
    maxHeight: '100vh',
    overflow: 'hidden',
  })
  const matches = useMediaQuery('(min-width:768px)')
  const navigate = useNavigate()
  // const swiper = useSwiper()
  const currentSlide = data.indexOf(item)
  const swiperRef = useRef<any>(null)
  const gridClass = matches ? 'md:grid-cols-[15px_1.5fr_1.3fr_15px] lg:grid-cols-[1fr_1.5fr_1.3fr_1fr] gap-2' : 'grid-cols-[0fr_1.6fr_0fr]'
  // const gridClass = 'grid-cols-[0fr_1.6fr_0fr] md:grid-cols-[15px_1.5fr_1.3fr_15px] lg:grid-cols-[1fr_1.5fr_1.3fr_1fr] md:gap-2'

  // const vimeoPlayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (element.current) {
      // eslint-disable-next-line no-nested-ternary
      const height = (): any | number => (matches ? (element.current ? size.width * 1.7778 : 0) : window.innerHeight - 90)
      setShareAreaHeight({...shareAreaStyle, height: height()})
    }
  }, [element, matches, size.width]) // don't update dependence by Eslint

  const handleTouch = useCallback(() => {
    if (!matches) swiperOnClick()
  }, [matches])

  const handleClick = useCallback(() => {
    if (matches) swiperOnClick()
  }, [matches])

  const onTransitionStart = useCallback(
    (e: {activeIndex: number}) => {
      const {eid, title, urlFriendlyName} = data[e.activeIndex]
      const seoUrl = urlFriendlyName || getFriendlyUrl(title)
      window.history.pushState({}, '', `/${config.controller}/shorts/play/${eid}/${seoUrl}.html`)
      axios.get(`${config.updateCounter}${eid}`)
    },

    [data]
  )

  const onSlideChangeTransitionStart = useCallback(
    (e: {activeIndex: number}) => {
      // console.debug(e.activeIndex)
      // console.debug('onSlideChangeTransitionStart')
      setCurrentItem(data[e.activeIndex])
    },

    [data]
  )

  const onTransitionEnd = useCallback(() => {
    // console.debug('onTransitionEnd')
    if (window.vimeoPlayer) {
      if (isMuted) {
        window.vimeoPlayer.setMuted(true)
      } else {
        window.vimeoPlayer.setMuted(false)
      }
    }
    if (window.videoJsPlayer) {
      if (isMuted) {
        window.videoJsPlayer.muted(true)
      } else {
        window.videoJsPlayer.muted(false)
      }
    }
  }, [isMuted])

  const onAfterInit = useCallback(
    (swiper: {slideTo: (arg0: number) => void}) => {
      swiper.slideTo(currentSlide)
      requestTimeout(() => swiperRef.current && swiperRef.current.classList.add('animate__fadeIn'), 300)
    },
    [currentSlide]
  )

  useEffect(() => {
    window.addEventListener('popstate', event => {
      navigate(`/${config.controller}`)
    })
  }, [navigate])

  return (
    <div className="ShortVideoPage opacity-0 animate__animated" ref={swiperRef}>
      <div className="absolute left-0 top-0">
        <div className={`w-screen relative grid ${gridClass} justify-center`}>
          <div />
          <div className="w-full overflow-hidden" ref={element}>
            <ShortPlayer item={currentItem} shareAreaStyle={shareAreaStyle} />
          </div>
          <div />
        </div>
      </div>

      <Swiper
        direction={'vertical'}
        threshold={matches ? 25 : 0}
        slidesPerView={1}
        speed={300}
        mousewheel={{forceToAxis: !0, invert: !1, sensitivity: 0.1}}
        touchStartPreventDefault={false}
        autoHeight={false}
        height={matches ? window.innerHeight : window.innerHeight + 30}
        loop={false}
        spaceBetween={0}
        modules={[Mousewheel, Pagination]}
        onSwiper={swiper => {}}
        onAfterInit={onAfterInit}
        onSlideChange={onSlideChange}
        onTransitionStart={onTransitionStart}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onTransitionEnd={onTransitionEnd}>
        {data.map(el => (
          <SwiperSlide key={el.eid}>
            {({isActive}) => (
              <SlideItem
                el={el}
                isActive={isActive}
                handleTouch={handleTouch}
                handleClick={handleClick}
                shareAreaStyle={shareAreaStyle}
                gridClass={gridClass}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <ShortVideoSharePanel currentItem={currentItem} gridClass={gridClass} shareAreaStyle={shareAreaStyle} />
    </div>
  )
}
