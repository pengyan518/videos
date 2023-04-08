import React, {forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
// import axios from 'axios'
import Vimeo from '@u-wave/react-vimeo'
import {Skeleton, useScrollTrigger} from '@mui/material'

import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import useScrollEvent from '../../hooks/useScrollEvent'
import VimeoPlayer from './VimeoPlayer'
import useRect from '../../hooks/useRect'
import useMobileDetect from '../../hooks/useMobileDetect'

export type PlayProps = {
  item: any
  shareAreaStyle: any
}

function VideoPlayer({item, shareAreaStyle}: PlayProps, ref: React.Ref<any> | null) {
  const [isLoading, setIsLoading] = useState(true)
  const {videoLink, embeddedVideoYT, embeddedVideoVimeo, imageForVideo, eid} = item
  // const {size, element} = useRect<HTMLDivElement>([window.innerWidth])
  // const loading = useRef<HTMLDivElement | null>(null)

  const {isMobile} = useMobileDetect()

  return (
    <div className={`h-screen grid bg-black md:bg-transparent ${isMobile()?'items-start':'items-center'} w-full`}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {embeddedVideoVimeo !== '' ? (
        <VimeoPlayer embeddedVideoVimeo={embeddedVideoVimeo} shareAreaStyle={shareAreaStyle} />
      ) : embeddedVideoYT !== '' ? (
        <YoutubeEmbed embedId={embeddedVideoYT} />
      ) : (
        <VideoFrame
          poster={imageForVideo?.original ?? ''}
          videoSrc={videoLink}
          isShortVideo
          options={{
            autoplay: true,
            playsinline: true,
            controls: false,
            height: window.innerHeight,
            // muted: true,
            loop: true,
          }}
          ref={ref}
        />
      )}
    </div>
  )
}

const ShortPlayer = forwardRef(VideoPlayer)

export default ShortPlayer
