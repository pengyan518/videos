import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import {ShortsProps, VideoItemProps} from '../../types'

import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShareButton from '../ShareButton/ShareButton'
import ShareIcon from '../icons/Share'
import {Item} from './styles'
import IconsStore from '../icons/IconsStore'
import ShareButtonsPanel from "./ShareButtonsPanel";


export type ShortVideoSharePanelProps = {
  currentItem: VideoItemProps
  gridClass: string
  shareAreaStyle: object
}

export default function ShortVideoSharePanel({currentItem, gridClass, shareAreaStyle}: ShortVideoSharePanelProps) {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)

  const getTargetLink = useMemo(() => {
    switch (langCode) {
      case 'en-us':
      case 'da':
        return {
          fb: 'https://www.facebook.com/ShenYunPerformingArts',
          contactUs: 'https://www.shenyun.org/contact-us?lang=en-us',
        }
      case 'il':
        return {
          fb: 'https://www.facebook.com/ShenYunIL/',
          contactUs: `/contact-us`,
        }
      default:
        return {
          fb: 'https://www.facebook.com/ShenYunPerformingArts',
          contactUs: `/contact-us`,
        }
    }
  }, [langCode])

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
            <ShareButtonsPanel />
            <ShareButton>
              <div>
                <div className="p-2 bg-[#c5bfb3] hover:bg-[#9e9685] rounded-lg inline-block cursor-pointer">
                  {/* @ts-ignore */}
                  <ShareIcon className="w-8 h-8 text-white" />
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
