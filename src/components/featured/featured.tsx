import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    category: {itemsFeatured, itemsShenyunIntroduction, itemsReviews},
  } = data
  return (
    <div className="featured">
      <div className="grid grid-cols-4">
        {itemsReviews.map(item => (
          <div key={item.id}>
            <Link to={`featured/play/${item.eid}`}>
              <img src={item.imageForVideo.medium} alt="" />
            </Link>
          </div>
        ))}
      </div>

      <Link to="featured">sub</Link>
    </div>
  )
}
