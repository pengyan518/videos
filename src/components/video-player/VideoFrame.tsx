import React, {useEffect, useState, memo, useCallback, useRef, useMemo} from 'react'
import videojs from 'video.js'
import Video from './VideoJs'

interface VideoFrameProps {
  poster?: string
  videoSrc: string
  options?: any
}

const VideoFrame = ({videoSrc, poster, options = {}}: VideoFrameProps) => {
  const playerRef = useRef(null)

  const videoJsOptions = useMemo(
    () => ({
      ...{
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        poster,
        // controlBar: {
        //   pictureInPictureToggle: false,
        // },
        sources: [
          {
            src: videoSrc,
            type: 'video/mp4',
          },
        ],
      },
      ...options,
    }),
    [options, poster, videoSrc]
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

  return (
    <React.Fragment key={videoSrc}>
      <Video options={videoJsOptions} onReady={handlePlayerReady} />
    </React.Fragment>
  )
}

export default VideoFrame
