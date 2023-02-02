import React, {useEffect, useRef, useState} from 'react'
// import LazyLoad from '../LazyLoad/LazyLoad'
import Lazy from '../LazyLoad/Lazy'
import {requestTimeout} from '../../utils/RAFTimeout'
import {VideoItemProps} from '../../types'
import useHover from '../../hooks/useHover'
import Play from '../icons/Play'

export type ItemProps = {
  item: VideoItemProps
  showIcon?: boolean
  showLargeThumb?: boolean
}

export default function ThumbView({item, showIcon, showLargeThumb}: ItemProps) {
  const hoverRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isHover = useHover(hoverRef)

  useEffect(() => {
    if (showIcon) {
      if (isHover) {
        requestTimeout(() => ref.current && ref.current.classList.add('animate__fadeIn'), 0)
      } else {
        requestTimeout(() => ref.current && ref.current.classList.replace('animate__fadeIn', 'animate__fadeOut'), 0)
        requestTimeout(() => ref.current && ref.current.classList.remove('animate__fadeOut'), 50)
      }
    }
    return ()=>{
      requestTimeout(() => {
        if(ref.current && ref.current.classList.contains('animate__fadeOut')) ref.current.classList.remove('animate__fadeOut')
      }, 0)
    }
  }, [isHover, showIcon])

  return (
    <div className="relative" ref={hoverRef}>
      <div className="aspect-w-16 aspect-h-9">
        <Lazy>
          <img src={showLargeThumb?item.imageForVideo?.original:item.imageForVideo?.medium} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </Lazy>
      </div>
      <div
        ref={ref}
        className="absolute text-white w-12 h-12 top-1/2 left-1/2 opacity-0 translate-x-[-50%] translate-y-[-50%] animate__animated">
        <Play className={` drop-shadow-lg`} />
      </div>
    </div>
  )
}
