import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
// import axios from 'axios'
import Vimeo from '@u-wave/react-vimeo'
import {Skeleton, useScrollTrigger} from '@mui/material'

import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import useScrollEvent from '../../hooks/useScrollEvent'
import VimeoPlayer from './VimeoPlayer'

export type PlayProps = {
  item: any
}

function VideoPlayer({item}: PlayProps, ref: React.Ref<any> | null) {
  const [isLoading, setIsLoading] = useState(true)
  const {videoLink, embeddedVideoYT, embeddedVideoVimeo, imageForVideo, eid} = item
  // const loading = useRef<HTMLDivElement | null>(null)
  const hideLoading = useCallback(() => {
    // if (loading.current) loading.current.style.display = 'none'
    setIsLoading(false)
  }, [])

  const {downScrollDirection} = useScrollEvent()

  return (
    <div className="h-screen">
      {/* eslint-disable-next-line no-nested-ternary */}
      {embeddedVideoVimeo !== '' ? (
        <VimeoPlayer embeddedVideoVimeo={embeddedVideoVimeo} />
      ) : embeddedVideoYT !== '' ? (
        <YoutubeEmbed embedId={embeddedVideoYT} />
      ) : (
        <VideoFrame
          poster={imageForVideo?.original ?? ''}
          videoSrc={videoLink}
          isShortVideo
          options={{autoplay: true, playsinline: true, controls: false, height: window.innerHeight, loop: true}}
          ref={ref}
        />
      )}
    </div>
  )
}

const ShortPlayer = forwardRef(VideoPlayer)

export default ShortPlayer
