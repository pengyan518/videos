import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import {ShortsProps, VideoItemProps} from '../../types'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import SlideWrapper from './SlideWrapper'
// import Play from '../icons/Play'
import { requestTimeout } from '../../utils/RAFTimeout'

export type SlideItemProps = {
  el: VideoItemProps
  isActive: boolean
  isPaused: boolean | null
  handleTouch: () => void
  handleClick: () => void
  shareAreaStyle: object
  gridClass: string
}

export default function SlideItem({isActive, el, handleTouch, handleClick, shareAreaStyle, gridClass, isPaused}: SlideItemProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const hoverRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  // const isHover = useHover(hoverRef)

  // useEffect(() => {
  //   if (isPaused) {
  //     requestTimeout(() => ref.current && ref.current.classList.add('animate__fadeIn'), 0)
  //   } else {
  //     requestTimeout(() => ref.current && ref.current.classList.replace('animate__fadeIn', 'animate__fadeOut'), 0)
  //     requestTimeout(() => ref.current && ref.current.classList.remove('animate__fadeOut'), 20)
  //   }
  //   return () => {
  //     requestTimeout(() => {
  //       if (ref.current && ref.current.classList.contains('animate__fadeOut')) ref.current.classList.remove('animate__fadeOut')
  //     }, 0)
  //   }
  // }, [isPaused])

  return (
    <SlideWrapper isActive={isActive} gridClass={gridClass}>
      <div>
        <div />
        <div className="relative md:rounded-xl" style={shareAreaStyle} ref={hoverRef}>
          <img
            className={`absolute left-0 top-0 object-cover `}
            onTouchEnd={handleTouch}
            onClick={handleClick}
            src={el.imageForVideo.original}
          />
        </div>
        <div />
      </div>
    </SlideWrapper>
  )
}
