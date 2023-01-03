import React from 'react'
import {Link} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'

export type PlayProps = {
  item: any
}

export default function Player({item}: PlayProps) {
  const {
    videoLink,
    embeddedVideoYT,
    embeddedVideoVimeo,
    eid,
    imageForVideo: {medium},
  } = item

  const videoStyle = {
    width: '100%',
    height: '100%',
  }

  return (
    <div className="">
      <div>{eid}</div>
      <div>{videoLink}</div>
      <div>{embeddedVideoYT}</div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {embeddedVideoVimeo !== '' ? (
        <div className="w-full">
          <Vimeo video={embeddedVideoVimeo} className="w-full aspect-w-16 aspect-h-9" autoplay />
        </div>
      ) : embeddedVideoYT !== '' ? (
        <YoutubeEmbed embedId={embeddedVideoYT} />
      ) : (
        <VideoFrame poster={medium} videoSrc={videoLink} />
      )}
    </div>
  )
}
