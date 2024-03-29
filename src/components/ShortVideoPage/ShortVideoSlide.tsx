import React, {ReactNode, SetStateAction, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel} from 'swiper'
import 'swiper/scss/navigation'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {ShortsProps, VideoItemProps} from '../../types'

import useRect from '../../hooks/useRect'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import getFriendlyUrl from '../../utils/getFriendlyUrl'

import ShortVideoSharePanel from './ShortVideoSharePanel'
import {requestTimeout} from '../../utils/RAFTimeout'
import SlideItem from './SlideItem'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'

export type ShortVideoSlideProps = {
  item: VideoItemProps
  data: VideoItemProps[]
}

export default function ShortVideoSlide({item, data}: ShortVideoSlideProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  // const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)

  const {size, element} = useRect<HTMLDivElement>([window.innerWidth])
  const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  const [currentItem, setCurrentItem] = useState(item)
  const [isPaused, setPaused] = useState<boolean | null>(null)
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
  const mySwiperRef = useRef<any>(null)
  const progressBarRef = useRef<any>(null)
  const gridClass = matches ? 'md:grid-cols-[15px_1.5fr_1.3fr_15px] xl:grid-cols-[1fr_1.5fr_1.3fr_1fr] gap-2' : 'grid-cols-[0fr_1.6fr_0fr]'
  // const gridClass = 'grid-cols-[0fr_1.6fr_0fr] md:grid-cols-[15px_1.5fr_1.3fr_15px] lg:grid-cols-[1fr_1.5fr_1.3fr_1fr] md:gap-2'

  // const vimeoPlayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (element.current) {
      // eslint-disable-next-line no-nested-ternary
      const height = (): any | number => (matches ? (element.current ? size.width * 1.7778 : 0) : window.innerHeight)
      setShareAreaHeight({...shareAreaStyle, height: height()})
    }
  }, [element, matches, size.width]) // don't update dependence by Eslint

  // const clearProgress = useCallback(() => {
  //   if (progressBarRef.current) {
  //     progressBarRef.current.setProgress(0)
  //   }
  // }, [])

  const setProgress = useCallback((percent: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.setProgress(percent)
    }
  }, [])

  const onSlideChange = (e: {activeIndex: string | number}) => {
    // console.debug('onSlideChange')
    // console.debug(e.activeIndex)
    window.videoJsPlayer = null
    window.youTubePlayer = null

    // clearProgress()
  }

  const swiperOnClick = useCallback(() => {
    if (window.vimeoPlayer) {
      window.vimeoPlayer.getPaused().then((paused: boolean) => {
        if (paused) {
          window.vimeoPlayer.play()
          setPaused(false)
        } else {
          window.vimeoPlayer.pause()
          setPaused(true)
        }
      })
    }
    if (window.videoJsPlayer) {
      if (window.videoJsPlayer.paused()) {
        window.videoJsPlayer.play()
        setPaused(false)
      } else {
        window.videoJsPlayer.pause()
        setPaused(true)
      }
    }

    if (window.youTubePlayer) {
      window.youTubePlayer.getPlayerState().then((value: number) => {
        if (value < 1 || value === 2) {
          window.youTubePlayer.playVideo()
        } else {
          window.youTubePlayer.pauseVideo()
        }
      })
    }
  }, [])

  const handleTouch = useCallback(() => {
    if (!matches) swiperOnClick()
  }, [matches, swiperOnClick])

  const handleClick = useCallback(() => {
    if (matches) swiperOnClick()
  }, [matches, swiperOnClick])

  const onTransitionStart = useCallback(
    (e: {activeIndex: number}) => {
      mySwiperRef.current && mySwiperRef.current.classList.remove('opacity-0')
      const {eid, title, urlFriendlyName} = data[e.activeIndex]
      const seoUrl = urlFriendlyName || getFriendlyUrl(title)
      window.history.pushState({}, '', `/${config.controller}/shorts/play/${eid}/${seoUrl}.html`)
      axios.get(`${config.updateCounter}${eid}`)
      element.current && element.current.classList.add('opacity-0')
      progressBarRef.current && progressBarRef.current.dom.classList.add('opacity-0')
    },
    [data, element]
  )

  const onSlideChangeTransitionStart = useCallback(
    (e: {activeIndex: number}) => {
      // console.debug('onSlideChangeTransitionStart')
      setCurrentItem(data[e.activeIndex])
      //
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
    element.current && element.current.classList.remove('opacity-0')
    mySwiperRef.current && mySwiperRef.current.classList.add('opacity-0')
    progressBarRef.current && progressBarRef.current.dom.classList.remove('opacity-0')

  }, [element, isMuted])

  const onSlideChangeTransitionEnd = useCallback((e: {activeIndex: number}) => {
    // console.debug('onSlideChangeTransitionEnd')
    setPaused(false)
  }, [])

  const onAfterInit = useCallback((swiper: {slideTo: (arg0: number) => void}) => {
    // console.debug('onAfterInit')
    window.swiper = swiper
    // const swiperDom = document.querySelector('.swiper-wrapper')
    // swiperDom && swiperDom.classList.add('opacity-0')
    requestTimeout(() => swiperRef.current && swiperRef.current.classList.add('animate__fadeIn'), 200)
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', event => {
      navigate(`/`)
    })
  }, [navigate])

  return (
    <div className="ShortVideoPage opacity-0 animate__animated" ref={swiperRef}>
      <div className="absolute left-0 top-0">
        <div className={`w-screen relative grid ${gridClass} justify-center`}>
          <div />
          <div className="w-full overflow-hidden" ref={element}>
            <ShortPlayer item={currentItem} shareAreaStyle={shareAreaStyle} setPaused={setPaused} setProgress={setProgress} />
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
        autoHeight={false}
        height={matches ? window.innerHeight : window.innerHeight + 30}
        loop={false}
        spaceBetween={0}
        modules={[Mousewheel]}
        // onSwiper={swiper => {}}
        onAfterInit={onAfterInit}
        onSlideChange={onSlideChange}
        onTransitionStart={onTransitionStart}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onTransitionEnd={onTransitionEnd}
        onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        initialSlide={currentSlide}
        ref={mySwiperRef}
        className="mySwiper opacity-0">
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
      <ShortVideoSharePanel
        currentItem={currentItem}
        gridClass={gridClass}
        shareAreaStyle={shareAreaStyle}
        isPaused={isPaused}
        ref={progressBarRef}
      />
      {window.swiper && (
        <>
          <SlidePrevButton data={data} />
          <SlideNextButton data={data} />
        </>
      )}
    </div>
  )
}
