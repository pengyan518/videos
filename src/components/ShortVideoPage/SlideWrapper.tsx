import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// Import Swiper React components


export type SlideWrapperProps = {
  isActive: boolean
  gridClass: string
  children: ReactNode
}

const SlideWrapper = ({isActive, gridClass, children}: SlideWrapperProps) => {
  const matches = useMediaQuery('(min-width:768px)')

  const getClassName = (child: {props: {label: any}}) => {
    return `cursor-pointer w-full h-screen grid ${gridClass} justify-center items-center`
  }

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
