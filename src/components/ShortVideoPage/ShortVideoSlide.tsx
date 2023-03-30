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

export type ShortVideoSlideProps = {
  item: VideoItemProps
  data: VideoItemProps[]
}

export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const {size, element} = useRect<HTMLDivElement>([window.innerWidth])
  const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  const [currentItem, setCurrentItem] = useState(item)
  const [shareAreaStyle, setShareAreaHeight] = useState({
    height: 0,
    overflow: 'hidden',
  })
  const matches = useMediaQuery('(min-width:768px)')
  const navigate = useNavigate()
  // const swiper = useSwiper()
  const currentSlide = data.indexOf(item)
  // const shortPlayerRef = useRef<any>(null)
  const gridClass = matches ? 'md:grid-cols-[1fr_1.6fr_1fr_1fr] gap-2' : 'grid-cols-[0fr_1.6fr_0fr]'

  // const vimeoPlayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (element.current) {
      // eslint-disable-next-line no-nested-ternary
      const height = (): any | number => (matches ? (element.current ? size.width * 1.777 : 0) : window.innerHeight - 120)
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
      // window.vimeoPlayer = null
      // window.videoJsPlayer = null
      // window.youTubePlayer = null
      console.debug('onSlideChangeTransitionStart')
      setCurrentItem(data[e.activeIndex])
    },

    [data]
  )

  const onTransitionEnd = useCallback(() => {
    console.debug('onTransitionEnd')
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

  // const onSlideChangeTransitionEnd = useCallback(() => {
  //   console.debug('onSlideChangeTransitionEnd')
  //   if (window.vimeoPlayer) {
  //     window.vimeoPlayer.getPaused().then((paused: boolean) => {
  //       if (paused) {
  //         window.vimeoPlayer.play()
  //       }
  //     })
  //   }
  // }, [])

  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'MDN',
      text: 'Learn web development on MDN!',
      url: window.location.href,
      // url: "https://developer.mozilla.org",
    }
    if (!matches) {
      try {
        await navigator.share(shareData)
        console.debug('MDN shared successfully')
      } catch (err) {
        console.debug(err)
      }
    }
  }, [matches])

  useEffect(() => {
    window.addEventListener('popstate', event => {
      navigate(`/${config.controller}`)
    })
  }, [navigate])

  return (
    <div className="ShortVideoPage">
      <div className="absolute left-0 top-0">
        <div className={`w-screen relative grid ${gridClass} justify-center`}>
          <div />
          <div className="w-full overflow-hidden" ref={element}>
            <ShortPlayer item={currentItem} />
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
        onTransitionStart={onTransitionStart}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onTransitionEnd={onTransitionEnd}
        // onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        // onClick={swiperOnClick}
        className="mySwiper">
        {data.map(el => (
          <SwiperSlide key={el.eid}>
            {({isActive}) => (
              <SlideWrapper isActive={isActive} gridClass={gridClass}>
                <div>
                  <div />
                  <div className="relative rounded-xl" style={shareAreaStyle}>
                    <img
                      className={`absolute left-0 top-0 object-cover ${isActive ? 'opacity-0' : ''}`}
                      onTouchEnd={handleTouch}
                      onClick={handleClick}
                      src={el.imageForVideo.original}
                    />
                     <button className="absolute left-0 top-0 z-10" onClick={handleShare}>
                      share
                     </button>
                  </div>
                  <div />
                </div>
              </SlideWrapper>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-screen left-0 top-0">
        <div className={`w-screen relative grid ${gridClass} justify-center items-center`}>
          <Link className="z-10 flex items-start" to={`/${controller}`} style={shareAreaStyle}>
            Back
          </Link>
          <div className="relative flex items-start" style={shareAreaStyle}>
            <ToggleMute />
            <div className="absolute text-white left-0 bottom-10">{currentItem.title}</div>
          </div>
          <div className="text-center h-screen display-none md:flex items-center">
            <div className="bg-white w-full rounded-xl z-10" style={shareAreaStyle}>
              {currentItem.descriptionLong}
              <div>Follow us!</div>
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
