import React from 'react'
import {YouTubeProps} from 'react-youtube'
import getQueryString from '../../utils/getQueryString'
import config from '../../config'
import YouTube from '../YouTube/YouTube'

export type YoutubeEmbedProps = {
  embedId: string
  onEnd?: () => void
}

const YoutubeEmbed = ({embedId, onEnd}: YoutubeEmbedProps) => {
  const query = getQueryString(config.videoOptions.youtube)

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      {/* <iframe */}
      {/*  className="absolute w-full h-full top-0 left-0" */}
      {/*  src={`https://www.youtube.com/embed/${embedId}?${query}`} */}
      {/*  frameBorder="0" */}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
      {/*  allowFullScreen */}
      {/*  title="Embedded youtube" */}
      {/* /> */}
      <YouTube videoId={embedId} className="absolute w-full h-full top-0 left-0" opts={opts} onEnd={onEnd} />
    </div>
  )
}

export default YoutubeEmbed
