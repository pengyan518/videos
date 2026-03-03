import React from 'react'
import getQueryString from '../../utils/getQueryString'
import config from '../../config'

export type SycEmbedProps = {
  embedId: string
  isShortVideo?: boolean
  onEnd?: () => void
}

const SycEmbed = ({embedId, onEnd, isShortVideo}: SycEmbedProps) => {
  const query = getQueryString(config.videoOptions.syc)

  return (
    <div className="w-full aspect-w-16 aspect-h-9">
       <iframe
        className="absolute w-full h-full top-0 left-0"
        src={`https://www.shenyuncreations.com/embed/${embedId}?${query}`}
        frameBorder="0"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded GJW"
       />
    </div>
  )
}

export default SycEmbed
