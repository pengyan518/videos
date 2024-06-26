import React, {useEffect, useState, memo, useCallback, useRef, useMemo, forwardRef, useImperativeHandle} from 'react'

import Video from './VideoJs'

interface VideoFrameProps {
  poster?: string
  videoSrc: string
  isShortVideo?: boolean
  options?: any
  setPaused?: any
}

const VideoFrameDiv = (
  {videoSrc, poster, isShortVideo = false, options = {}}: VideoFrameProps,
  ref: React.Ref<unknown> | undefined
) => {
  const playerRef = useRef(null)

  const videoJsOptions = useMemo(
    () => ({
      ...{
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        // muted: true,
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
    window.videoJsPlayer = player
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    player &&
      player.on('waiting', () => {
      })
    // @ts-ignore
    player.on('timeupdate', (result) => {
      if (options.onTimeupdate) options.onTimeupdate(result.target.player.cache_)
    })
    // @ts-ignore
    player.on('ended', () => {
      if (options.onEnd) options.onEnd()
    })
  }

  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     player: playerRef.current ? playerRef.current : window.videoJsPlayer,
  //   }),
  //   []
  // )

  return (
    <React.Fragment key={videoSrc}>
      <div className="w-full">
        <Video options={videoJsOptions} onReady={handlePlayerReady} isShortVideo={isShortVideo} />
      </div>
    </React.Fragment>
  )
}

const VideoFrame = forwardRef(VideoFrameDiv)

export default VideoFrame
