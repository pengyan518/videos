import React, {useEffect, useState, memo, useCallback, useRef, useMemo} from 'react'
import videojs from 'video.js'
import Video from '../VideoPlayer'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setModalStatus} from '../../features/intro/introSlice'

interface ContentProps {
  content?: any
  status?: string
  modalIsOpened: boolean
}
interface VideoFrameProsps {
  poster: string
}
const VideoFrame: React.FC<VideoFrameProsps> = ({poster}) => {
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {
    ext: {videoRelated},
    langCode,
  } = content.info

  const dispatch = useAppDispatch()
  const closeVideo = () => {
    dispatch(setModalStatus(false))
    // document.body.classList.remove('AddBlurFilter')
    // if (document.body.classList.contains('DarkArrow')) document.body.classList.remove('DarkArrow')
  }

  const playerRef = useRef<any>(null)

  const videoJsOptions = useMemo(
    () => ({
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      poster,
      sources: [
        {
          src: videoRelated,
          type: 'video/mp4',
        },
      ],
    }),
    [poster, videoRelated]
  )
  const handlePlayerReady = (player: {on: (arg0: string, arg1: {(): void; (): void}) => void} | null) => {
    playerRef.current = player
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    player &&
      player.on('waiting', () => {
        // videojs.log('player is waiting')
      })
    // @ts-ignore
    player.on('dispose', () => {
      // videojs.log('player will dispose')
    })
  }

  // @ts-ignore

  return <Video options={videoJsOptions} onReady={handlePlayerReady} />
}

export default VideoFrame
