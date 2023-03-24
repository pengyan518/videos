import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// Import Swiper React components

import swiperOnClick, {onSlideChange, onSlideChangeTransitionEnd, onSlideChangeTransitionStart} from './swiperOnClick'


export type SlideWrapperProps = {
  isActive: boolean
  children: ReactNode
}

const SlideWrapper = ({isActive, children}: SlideWrapperProps) => {
  const matches = useMediaQuery('(min-width:768px)')

  const getClassName = (child: {props: {label: any}}) => {
    return `cursor-pointer h-screen w-full grid grid-cols-[1fr_1.6fr_1fr] justify-center items-center ${isActive ? 'opacity-0' : ''}`
  }
  // const handleTouch = useCallback(() => {
  //   if (!matches) swiperOnClick()
  // }, [matches])
  //
  // const handleClick = useCallback(() => {
  //   if (matches) swiperOnClick()
  // }, [matches])

  return (
    <div className="">
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          className: getClassName(child),
          // onClick: handleClick,
          // onTouchStart: handleTouch,
        })
      })}
    </div>
  )
}

export default SlideWrapper
