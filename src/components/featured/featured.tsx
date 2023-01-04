import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    category: {itemsFeatured, itemsShenyunIntroduction, itemsShenyunTrailers, itemsReviews, itemsEditorsPick},
  } = data
  return (
    <div className="featured">
      <HeroCard items={itemsShenyunTrailers} title="Trailers" sectionName="about-shen-yun" sectionTitle="About Shen Yun" />
      <HeroCard items={itemsReviews} title="From the Audience" sectionName="reviews" sectionTitle="Reviews" />
    </div>
  )
}
