import React from 'react'
import getQueryString from "../../utils/getQueryString";
import config from "../../config";

export type YoutubeEmbedProps = {
  embedId: string
}

const YoutubeEmbed = ({embedId}: YoutubeEmbedProps) => {
  const query = getQueryString(config.videoOptions.youtube)
  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      <iframe
        className="absolute w-full h-full top-0 left-0"
        src={`https://www.youtube.com/embed/${embedId}?${query}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default YoutubeEmbed
