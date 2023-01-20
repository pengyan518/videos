import React, {forwardRef} from 'react'
import {Link} from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import Wrapper from '../templates/Wrapper'

export type PlayProps = {
  item: any
}

function Player({item}: PlayProps, ref: React.Ref<any> | null) {
  const {
    videoLink,
    embeddedVideoYT,
    embeddedVideoVimeo,
    onDemandLink,
    eid,
    imageForVideo: {medium},
  } = item

  //
  return (
    // @ts-ignore
    <div className="bg-black" ref={ref}>
      <Wrapper className="md:px-8">
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
      </Wrapper>
    </div>
  )
}

const MyPlayer = forwardRef(Player)

export default MyPlayer
