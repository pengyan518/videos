import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'
import {sectionMap} from '../../config'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    category: {
      itemsFeatured,
      itemsShenyunIntroduction,
      itemsShenyunTrailers,
      itemsReviews,
      itemsEditorsPick,
      itemsSyso,
      itemsStartsOfShenyun,
      itemsPersecution,
      itemsMorefromArtists,
    },
  } = data
  return (
    <div className="featured innerPaddingAlignHeader">
      {Object.entries(sectionMap).map(section => {
        const [sectionUrl, sectionContent] = section
        return (
          <div key={sectionUrl}>
            <div className="mt-0 mb-0 text-center">
              <h2 className="text-2xl md:text-4xl text-[#524941] OpenSans__font">{sectionContent.title}</h2>
            </div>

            {sectionContent.content.map((item: React.Key | null | undefined) => (
              <HeroCard key={item} keyName={item} sectionName={sectionUrl} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
