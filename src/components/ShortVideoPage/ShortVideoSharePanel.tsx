import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import ShortPlayer from './ShortPlayer'
import {ShortsProps, VideoItemProps} from '../../types'

import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import getFriendlyUrl from '../../utils/getFriendlyUrl'
import ShareButton from '../ShareButton/ShareButton'
import ShareIcon from '../icons/Share'

export type ShortVideoSharePanelProps = {
  currentItem: VideoItemProps
  gridClass: string
  shareAreaStyle: object
}

export default function ShortVideoSharePanel({currentItem, gridClass, shareAreaStyle}: ShortVideoSharePanelProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  // @ts-ignore
  return (
    <div className="absolute w-screen left-0 top-0">
      <div className={`w-screen relative grid ${gridClass} justify-center items-center`}>
        <Link className="z-10 flex items-start" to={`/${controller}`} style={shareAreaStyle}>
          Back
        </Link>
        <div className="relative flex items-start" style={shareAreaStyle}>
          <ToggleMute />
          <div className="absolute text-white left-0 bottom-10">{currentItem.title}</div>
        </div>
        <div className="text-center h-screen display-none md:flex items-center">
          <div className="bg-white w-full rounded-xl z-10" style={shareAreaStyle}>
            {currentItem.descriptionLong}
            <div>Follow us!</div>
            <ShareButton>
              <div>
                <div className="p-4 bg-[#c5bfb3] hover:bg-[#9e9685] rounded inline-block cursor-pointer">
                  {/* @ts-ignore */}
                  <ShareIcon className="w-6 h-6 text-white" />
                </div>
                <div>{translation.Share}</div>
              </div>
            </ShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}
