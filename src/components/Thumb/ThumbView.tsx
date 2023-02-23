import React, {useEffect, useRef, useState} from 'react'
// import LazyLoad from '../LazyLoad/LazyLoad'
import Lazy from '../LazyLoad/Lazy'
import {requestTimeout} from '../../utils/RAFTimeout'
import {VideoItemProps} from '../../types'
import useHover from '../../hooks/useHover'
import Play from '../icons/Play'
import {ImgWrapper, Gradient} from './styles'

export type ItemProps = {
  item: VideoItemProps
  showIcon?: boolean
  showLargeThumb?: boolean
  showTitle?: boolean
}

export default function ThumbView({item, showIcon, showLargeThumb, showTitle}: ItemProps) {
  const hoverRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const backdrop = useRef<HTMLDivElement>(null)
  const isHover = useHover(hoverRef)

  useEffect(() => {
    if (showIcon) {
      if (isHover) {
        requestTimeout(() => ref.current && ref.current.classList.add('animate__fadeIn'), 0)
        requestTimeout(() => backdrop.current && backdrop.current.classList.add('animate__fadeIn'), 0)
      } else {
        requestTimeout(() => ref.current && ref.current.classList.replace('animate__fadeIn', 'animate__fadeOut'), 0)
        requestTimeout(() => ref.current && ref.current.classList.remove('animate__fadeOut'), 50)

        requestTimeout(() => backdrop.current && backdrop.current.classList.replace('animate__fadeIn', 'animate__fadeOut'), 0)
        requestTimeout(() => backdrop.current && backdrop.current.classList.remove('animate__fadeOut'), 50)
      }
    }
    return () => {
      requestTimeout(() => {
        if (ref.current && ref.current.classList.contains('animate__fadeOut')) ref.current.classList.remove('animate__fadeOut')
      }, 0)
    }
  }, [isHover, showIcon])

  return (
    <div className="relative" ref={hoverRef}>
      <ImgWrapper className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
        <Lazy>
          <img
            src={showLargeThumb ? item.imageForVideo?.original : item.imageForVideo?.medium}
            alt=""
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </Lazy>
      </ImgWrapper>
      <div className="absolute rounded-xl w-full h-full top-0 left-0 opacity-0 bg-slate-900/50 animate__animated" ref={backdrop} />
      {showTitle && (
        <div className={`w-full flex absolute bottom-0 h-[8rem] md:h-[15rem] px-3 py-2 md:px-4 md:py-3 items-end text-white`}>
          <Gradient
            className={`absolute rounded-b-xl w-full h-full left-0 bottom-0 h-[8rem] md:h-[15rem] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] ${
              isHover ? 'opacity-100' : 'opacity-90'
            }`}
          />
          <div className="flex items-center text-[1rem] md:text-[1rem] text-white relative z-10">
            <div className="font-bold">{item.title}</div>
          </div>
        </div>
      )}
      <div
        ref={ref}
        className="absolute text-white w-12 h-12 top-1/2 left-1/2 opacity-0 translate-x-[-50%] translate-y-[-50%] animate__animated">
        <Play className={`drop-shadow-lg`} />
      </div>
    </div>
  )
}
