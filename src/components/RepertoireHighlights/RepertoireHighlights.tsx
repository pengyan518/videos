import React from 'react'
import {MainProps} from '../../types'

export type RepertoirehighlightsProps = {
  data: MainProps
}

export default function Repertoirehighlights({data}: RepertoirehighlightsProps) {
  const {
    info: {
      ext: {photoRelatedData, contentArea, RepertoireHighlights},
    },
      translation
  } = data
  if (RepertoireHighlights === '') return null
  return (
    <div className="RepertoireHighlights pb-8 md:pb-32 px-4">
      <div className="grid md:grid-cols-2 mx-auto gap-8 md:w-[80%]">
        <div className="text-center uppercase open-sans-c text-[1.5rem] md:text-[2.8rem] leading-tight pt-2 responsive-br md:pl-[4vw]" dangerouslySetInnerHTML={{__html: translation['Repertoire Highlights']}} />
        <div className="font-serif text-[1rem] md:text-xl leading-12 md:leading-10" dangerouslySetInnerHTML={{__html: RepertoireHighlights}} />
      </div>
    </div>
  )
}
