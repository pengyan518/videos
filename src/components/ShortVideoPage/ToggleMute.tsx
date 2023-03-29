import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// Import Swiper React components

import {ShortsProps, VideoItemProps} from '../../types'
import {setToggleMuted} from './shortsSlice'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from "../../app/store";

export type ToggleMuteProps = {
  item?: VideoItemProps
  data?: VideoItemProps[]
}

export default function ToggleMute({}: ToggleMuteProps) {
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
    <div className="absolute right-0 top-0 z-[11]" onClick={handleMuteClick} onTouchEnd={handleMuteTouch}>
      {isMuted ? <>muted</> : <>X</>}
    </div>
  )
}
