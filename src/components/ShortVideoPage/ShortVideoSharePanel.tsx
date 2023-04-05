import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {useMediaQuery} from '@mui/material'
import config, {controller, sectionMap} from '../../config'

import {ShortsProps, VideoItemProps} from '../../types'

import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShareButton from '../ShareButton/ShareButton'
import ShareIcon from '../icons/Share'
import {Item} from './styles'
import IconsStore from '../icons/IconsStore'
import Triangle from '../icons/Triangle'
import ShareButtonsPanel from './ShareButtonsPanel'
import Play from '../icons/Play'
import {requestTimeout} from '../../utils/RAFTimeout'

export type ShortVideoSharePanelProps = {
  currentItem: VideoItemProps
  gridClass: string
  shareAreaStyle: object
  isPaused: boolean | null
}

export default function ShortVideoSharePanel({currentItem, gridClass, shareAreaStyle, isPaused}: ShortVideoSharePanelProps) {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)

  const matches = useMediaQuery('(min-width:768px)')

  const ref = useRef<HTMLDivElement>(null)
  // const isHover = useHover(hoverRef)

  useEffect(() => {
    if (isPaused) {
      requestTimeout(() => ref.current && ref.current.classList.add('animate__fadeIn'), 0)
    } else {
      requestTimeout(() => ref.current && ref.current.classList.replace('animate__fadeIn', 'animate__fadeOut'), 0)
      requestTimeout(() => ref.current && ref.current.classList.remove('animate__fadeOut'), 20)
    }
    return () => {
      requestTimeout(() => {
        if (ref.current && ref.current.classList.contains('animate__fadeOut')) ref.current.classList.remove('animate__fadeOut')
      }, 0)
    }
  }, [isPaused])

  const handleShare = useCallback(async () => {
    const shareData = {
      title: currentItem.title,
      text: currentItem.description,
      url: window.location.href,
    }
    if (!matches) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.debug(err)
      }
    }
  }, [currentItem.description, currentItem.title, matches])

  // @ts-ignore

  return (
    <div className="absolute w-screen left-0 top-0 proxima-nova">
      <div className={`w-screen relative grid ${gridClass} justify-center items-center`}>
        <div className="flex items-start w-full justify-center relative" style={shareAreaStyle}>
          <Link className="z-[1]" to={`/${controller}`}>
            <span className="rounded display-none lg:inline-flex items-center justify-center w-full pl-1 pr-[1rem] md:pl-3 md:pr-5 pt-1 pb-2 text-lg text-white bg-[#8f7e64] rounded[1px] hover:bg-[#907042] sm:w-auto sm:mb-0 mr-4 md:mr-6 capitalize">
              <div className="w-6 h-6 md:w-8 md:w-8 md:mt-[-7px]">
                {/* @ts-ignore */}
                <Triangle className="" />
              </div>
              <span className="ml-[-2px] md:ml-[-6px] text-[12px] md:text-[1rem]">{translation.Back}</span>
            </span>
          </Link>
        </div>
        <div className="relative flex items-start" style={shareAreaStyle}>
          <Link className="absolute left-4 top-4 z-10 lg:hidden" to={`/${controller}`}>
            <div className="cursor-pointer w-[40px] h-[40px] bg-[#d1d5db] bg-opacity-70 rounded-full flex justify-center items-center">
              {/* @ts-ignore */}
              <IconsStore className="w-6 h-6 fill-black" name="ChevronLeft" />
            </div>
          </Link>

          <ToggleMute />
          <div className="absolute text-white left-4 bottom-0 md:bottom-4">{currentItem.title}</div>
          <button className="absolute right-4 bottom-0 z-10 md:hidden" onClick={handleShare}>
            <div className="cursor-pointer w-[40px] h-[40px] bg-[#d1d5db] bg-opacity-70 rounded-full flex justify-center items-center">
              {/* @ts-ignore */}
              <IconsStore className="w-6 h-6 fill-black -scale-x-100" name="ShareIcon" />
            </div>
          </button>
          <div
            ref={ref}
            className="absolute text-white w-12 h-12 top-1/2 left-1/2 opacity-0 translate-x-[-50%] translate-y-[-50%] animate__animated">
            <Play className={`drop-shadow-lg`} />
          </div>
        </div>
        <div className="text-center h-screen display-none md:flex items-center">
          <div className="bg-white w-full rounded-xl px-[4vw] py-10 grid items-center text-left" style={shareAreaStyle}>
            <div className="text-lg">{currentItem.descriptionLong}</div>
            <div className="">
              <ShareButtonsPanel />
              <ShareButton>
                <div>
                  <div className="p-[0.4rem] bg-[#c5bfb3] hover:bg-[#9e9685] rounded-lg inline-block cursor-pointer text-white relative z-10">
                    {/* @ts-ignore */}
                    <IconsStore className="w-[2.5vw] h-[2.5vw] -scale-x-100 fill-white" name="ShareIcon" />
                  </div>
                  <div className="mt-2">{translation.Share}</div>
                </div>
              </ShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
