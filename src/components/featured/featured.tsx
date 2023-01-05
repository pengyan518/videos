import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    category: {itemsFeatured, itemsShenyunIntroduction, itemsShenyunTrailers, itemsReviews, itemsEditorsPick, itemsSyso, itemsStartsOfShenyun, itemsPersecution, itemsMorefromArtists},
  } = data
  return (
    <div className="featured">
      <HeroCard items={itemsShenyunTrailers} title="Trailers & Intro" sectionName="about-shen-yun" sectionTitle="About Shen Yun" />
      <HeroCard items={itemsStartsOfShenyun} title="Stars of Shen Yun" sectionName="artists" sectionTitle="The Artists" />
      <HeroCard items={itemsPersecution} title="Stories of Persecution" sectionName="artists" />
      <HeroCard items={itemsMorefromArtists} title="More from the artists" sectionName="artists" />
      <HeroCard items={itemsReviews} title="From the Audience" sectionName="reviews" sectionTitle="Reviews" />
      <HeroCard items={itemsSyso} title="Shen Yun Symphony Orchestra" sectionName="music" sectionTitle="Music" />
    </div>
  )
}
