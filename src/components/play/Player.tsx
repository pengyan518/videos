import React, {forwardRef} from 'react'
import {Link} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'

import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import Wrapper from '../templates/Wrapper'
import {PlayerWrapper} from "./styles";

export type PlayProps = {
  item: any
}

function Player({item}: PlayProps, ref: React.Ref<any> | null) {
  const {videoLink, embeddedVideoYT, embeddedVideoVimeo, imageForVideo} = item

  //
  return (
    <div className="">
      <div className="" ref={ref}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {embeddedVideoVimeo !== '' ? (
          <div className="w-full">
            <Vimeo video={embeddedVideoVimeo} className="w-full aspect-w-16 aspect-h-9" autoplay />
          </div>
        ) : embeddedVideoYT !== '' ? (
          <YoutubeEmbed embedId={embeddedVideoYT} />
        ) : (
          <VideoFrame poster={imageForVideo?.medium ?? ''} videoSrc={videoLink} />
        )}
      </div>
    </div>
  )
}

const MyPlayer = forwardRef(Player)

export default MyPlayer
