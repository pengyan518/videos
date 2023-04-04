import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import {ShortsProps, VideoItemProps} from '../../types'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import SlideWrapper from './SlideWrapper'

export type SlideItemProps = {
  el: VideoItemProps
  isActive: boolean
  handleTouch: () => void
  handleClick: () => void
  shareAreaStyle: object
  gridClass: string
}

export default function SlideItem({isActive, el, handleTouch, handleClick, shareAreaStyle, gridClass}: SlideItemProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <SlideWrapper isActive={isActive} gridClass={gridClass}>
      <div>
        <div />
        <div className="relative md:rounded-xl" style={shareAreaStyle}>
          <img
            className={`absolute left-0 top-0 object-cover ${isActive ? 'opacity-0' : ''}`}
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
