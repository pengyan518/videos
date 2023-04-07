import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {useSwiper} from 'swiper/react'
import ChevronRight from '../icons/ChevronRight'

interface SlidePrevButtonProps {
  data: any[]
}
export default function SlidePrevButton({data}: SlidePrevButtonProps) {
  // const swiper = useSwiper()
  const isFirst = window.swiper.activeIndex === 0
  return (
    <button
      className={`display-none md:block rounded-full p-3 absolute flex items-center justify-center cursor-pointer z-10 w-12 h-12 right-4 top-4 z-10 bg-[#beb1a0] hover:bg-[#fff] text-white hover:text-[#beb1a0] ${
        isFirst ? 'opacity-0 cursor-default' : ''
      }`}
      onClick={() => window.swiper.slidePrev()}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full -rotate-90 mt-[-3px]" />
    </button>
  )
}
