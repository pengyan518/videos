import React from 'react'
import getQueryString from '../../utils/getQueryString'
import config from '../../config'

export type GjwEmbedProps = {
  embedId: string
  isShortVideo?: boolean
  onEnd?: () => void
}

const GjwEmbed = ({embedId, onEnd, isShortVideo}: GjwEmbedProps) => {
  const query = getQueryString(config.videoOptions.gjw)

  // const opts: YouTubeProps['opts'] = {
  //   height: '100%',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // }

  return (
    <div className="w-full aspect-w-16 aspect-h-9">
       <iframe
        className="absolute w-full h-full top-0 left-0"
        src={`https://www.ganjingworld.com/embed/${embedId}?${query}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded GJW"
       />
      {/* <YouTube videoId={embedId} className="absolute w-full h-full top-0 left-0" opts={opts} onEnd={onEnd} /> */}
    </div>
  )
}

export default GjwEmbed
