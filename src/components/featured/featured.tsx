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
      <HeroCard keyName="itemsShenyunTrailers" sectionName="about-shen-yun" sectionTitle="About Shen Yun" />
      <HeroCard keyName="itemsStartsOfShenyun" sectionName="artists" sectionTitle="The Artists" />
      <HeroCard keyName="itemsPersecution" sectionName="artists" />
      <HeroCard keyName="itemsMorefromArtists" sectionName="artists" />
      <HeroCard keyName="itemsReviews" sectionName="reviews" sectionTitle="Reviews" />
      <HeroCard keyName="itemsSyso" sectionName="music" sectionTitle="Music" />
    </div>
  )
}
