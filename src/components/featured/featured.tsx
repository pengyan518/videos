import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    category: {itemsFeatured},
  } = data
  return (
    <div className="featured">
      <div className="grid grid-cols-4">
        {itemsFeatured.map(item => (
          <div key={item.id}>
            <Link to="/videos/about-shen-yun">
              <img src={item.imageForVideo.medium} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
