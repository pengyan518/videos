import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'
import useMobileDetect from '../../hooks/useMobileDetect'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {setVimeoInstance} from './shortsSlice'
import {RootState} from '../../app/store'

// import {ShortsProps} from '../../types'
// import {useAppSelector} from '../../app/hooks'
// import {RootState} from '../../app/store'

export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading?: () => void
  shareAreaStyle?: any
  setPaused?: any
  clearProgress?: any
}

function VideoPlayer({embeddedVideoVimeo, setPaused, clearProgress}: PlayProps, ref: React.Ref<any> | null) {
  const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const matches = useMediaQuery('(min-width:768px)')
  const {isMobile} = useMobileDetect()
  const dispatch = useAppDispatch()

  const props = {
    height: matches ? 'none' : window.innerHeight,
    responsive: matches,
  }

  const myClass = isMobile() ? '' : 'w-full'
  const class_wrapper = matches ? '' : `flex justify-center h-screen ${!isMobile() ? 'items-center' : ''}`

  // console.debug(Vimeo.vimeoPlayer())

  const onReady = useCallback(
    (player: any) => {
      dispatch(setVimeoInstance(player))
      setTimeout(() => {
        player.getPaused().then((paused: boolean) => {
          clearProgress()
          setPaused(paused)
          console.debug(paused)
        })
      }, 1000)
    },
    [clearProgress, dispatch, setPaused]
  )

  // const onEnd = useCallback(() => {
  //   dispatch(setVimeoInstance(null))
  // }, [dispatch])

  useEffect(() => {
    return () => {
      if (vimeoPlayer) {
        // @ts-ignore
        vimeoPlayer.destroy()
        dispatch(setVimeoInstance(null))
      }
    }
  }, [dispatch, vimeoPlayer])

  // @ts-ignore
  return (
    <div className={`w-full md:rounded-xl overflow-hidden bg-black ${class_wrapper}`}>
      {/* @ts-ignore */}
      <Vimeo
        video={embeddedVideoVimeo}
        className={`justify-center ${myClass}`}
        controls={false}
        autoplay
        loop
        {...props}
        // @ts-ignore
        onReady={onReady}
        // onEnd={onEnd}
      />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
