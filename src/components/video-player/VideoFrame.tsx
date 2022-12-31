import React, {useEffect, useState, memo, useCallback, useRef, useMemo} from 'react'
import videojs from 'video.js'
import Video from './VideoJs'

interface VideoFrameProps {
  poster: string
  videoSrc: string
}

const VideoFrame = ({videoSrc, poster}: VideoFrameProps) => {
  const playerRef = useRef(null)

  const videoJsOptions = useMemo(
    () => ({
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      poster,
      sources: [
        {
          src: videoSrc,
          type: 'video/mp4',
        },
      ],
    }),
    [poster, videoSrc]
  )
  const handlePlayerReady = (player: {on: (arg0: string, arg1: {(): void; (): void}) => void} | null) => {
    // @ts-ignore
    playerRef.current = player
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    player &&
      player.on('waiting', () => {
        videojs.log('player is waiting')
      })
    // @ts-ignore
    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  // @ts-ignore

  return <Video options={videoJsOptions} onReady={handlePlayerReady} />
}

export default VideoFrame
