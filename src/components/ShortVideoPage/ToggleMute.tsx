import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// Import Swiper React components

import {ShortsProps, VideoItemProps} from '../../types'
import {setToggleMuted} from './shortsSlice'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from "../../app/store";
import IconsStore from "../icons/IconsStore";

export type ToggleMuteProps = {
  item?: VideoItemProps
  data?: VideoItemProps[]
}

export default function ToggleMute({}: ToggleMuteProps) {
  // const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  const matches = useMediaQuery('(min-width:768px)')

  const dispatch = useAppDispatch()

  const handleMute = () => {
    if (window.vimeoPlayer) {
      window.vimeoPlayer.getMuted().then((isMute: boolean) => {
        if (isMute) {
          window.vimeoPlayer.setMuted(false)
          dispatch(setToggleMuted(false))
        } else {
          window.vimeoPlayer.setMuted(true)
          dispatch(setToggleMuted(true))
        }
      })
    }
    if (window.videoJsPlayer) {
      if (window.videoJsPlayer.muted()) {
        window.videoJsPlayer.muted(false)
        dispatch(setToggleMuted(false))
      } else {
        window.videoJsPlayer.muted(true)
        dispatch(setToggleMuted(true))
      }
    }
  }

  const handleMuteTouch = useCallback(() => {
    if (!matches) handleMute()
  }, [handleMute, matches])

  const handleMuteClick = useCallback(() => {
    if (matches) handleMute()
  }, [handleMute, matches])

  // if (!shareAreaStyle.height) return <>loading...</>

  return (
    <div className="absolute right-4 top-4 z-[11]" onClick={handleMuteClick} onTouchEnd={handleMuteTouch}>
      <div className="cursor-pointer w-[40px] h-[40px] bg-[#d1d5db] bg-opacity-70 rounded-full flex justify-center items-center">
      {/* @ts-ignore */}
      {isMuted ? <IconsStore className="w-6 h-6 fill-black" name="VolumeMute" /> : <IconsStore className="w-6 h-6 fill-black" name="VolumeUp" />}
      </div>
    </div>
  )
}
