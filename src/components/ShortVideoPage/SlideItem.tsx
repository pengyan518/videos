import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'


import {ShortsProps, VideoItemProps} from '../../types'
import generalImage from '../../assets/images/whats-new-general.jpg'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import SlideWrapper from './SlideWrapper'
// import Play from '../icons/Play'

export type SlideItemProps = {
  el: VideoItemProps
  isActive: boolean
  // isPaused: boolean | null
  handleTouch: () => void
  handleClick: () => void
  shareAreaStyle: object
  gridClass: string
}

export default function SlideItem({isActive, el, handleTouch, handleClick, shareAreaStyle, gridClass}: SlideItemProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const hoverRef = useRef<HTMLDivElement>(null)
  // const ref = useRef<HTMLDivElement>(null)
  // const isHover = useHover(hoverRef)
const imageSrc = el.imageForVideo ? el.imageForVideo?.original : generalImage

  return (
    <SlideWrapper isActive={isActive} gridClass={gridClass}>
      <div>
        <div />
        <div className="relative md:rounded-xl" style={shareAreaStyle} ref={hoverRef}>
          <img
            className={`absolute left-0 top-0 object-cover `}
            onTouchEnd={handleTouch}
            onClick={handleClick}
            src={imageSrc}
          />
        </div>
        <div />
      </div>
    </SlideWrapper>
  )
}
