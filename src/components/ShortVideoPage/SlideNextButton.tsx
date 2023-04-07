import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {useSwiper} from 'swiper/react'
import {ChevronRight} from '../icons'

interface SlideNextButtonProps {
  data: any[]
}
export default function SlideNextButton({data}: SlideNextButtonProps) {
  // const swiper = useSwiper()
  const isEnd = window.swiper.activeIndex === data.length - 1
  return (
    <button
      className={`rounded-full p-3 absolute flex items-center justify-center cursor-pointer z-10 w-12 h-12 right-4 bottom-4 bg-[#beb1a0] hover:bg-[#fff] text-white hover:text-[#beb1a0] ${
        isEnd ? 'opacity-0 cursor-default' : ''
      }`}
      onClick={() => window.swiper.slideNext()}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full rotate-90 mt-[4px]" />
    </button>
  )
}
