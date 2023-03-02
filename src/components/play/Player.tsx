import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'
import {Skeleton} from '@mui/material'

import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import {PlayerWrapper} from './styles'
import Loading from '../loading'

export type PlayProps = {
  item: any
}

function Player({item}: PlayProps, ref: React.Ref<any> | null) {
  const [isLoading, setIsLoading] = useState(true)
  const {videoLink, embeddedVideoYT, embeddedVideoVimeo, imageForVideo} = item
  // const loading = useRef<HTMLDivElement | null>(null)
  const hideLoading = useCallback(() => {
    // if (loading.current) loading.current.style.display = 'none'
    setIsLoading(false)
  }, [])

  return (
    <div className="">
      <div>
        {/* eslint-disable-next-line no-nested-ternary */}
        {embeddedVideoVimeo !== '' ? (
          <div className="w-full relative">
            {isLoading && (
              <div className="aspect-w-16 aspect-h-9">
                <Skeleton sx={{transform: 'none'}} height="100%" width="100%" />
              </div>
            )}
            <Vimeo video={embeddedVideoVimeo} className="w-full aspect-w-16 aspect-h-9" onReady={hideLoading} autoplay />
            {/*  <Loading height="770px" width="100%" color="#1976d2" background="#000" /> */}
          </div>
        ) : embeddedVideoYT !== '' ? (
          <YoutubeEmbed embedId={embeddedVideoYT} />
        ) : (
          <div ref={ref}>
            <VideoFrame poster={imageForVideo?.original ?? ''} videoSrc={videoLink} />
          </div>
        )}
      </div>
    </div>
  )
}

const MyPlayer = forwardRef(Player)

export default MyPlayer
