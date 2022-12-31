import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import VideoFrame from '../video-player/VideoFrame'

export type PlayProps = {
  item: any
}

export default function Player({item}: PlayProps) {
  const {
    videoLink,
    embeddedVideoYT,
    eid,
    imageForVideo: {medium},
  } = item

  return (
    <div className="">
      <div>{eid}</div>
      <div>{videoLink}</div>
      <div>{embeddedVideoYT}</div>
      <VideoFrame poster={medium} videoSrc={videoLink} />
    </div>
  )
}
