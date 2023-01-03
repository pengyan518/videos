import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'
import Section from '../templates/Section'

export type FeaturedProps = {
  data: MainProps
}

export default function EditorsPick({data}: FeaturedProps) {
  const {
    category: {itemsFeatured, itemsShenyunIntroduction, itemsShenyunTrailers, itemsReviews, itemsEditorsPick},
  } = data
  return (
    <Section>
      <div>Editor’s pick</div>
      <div className="grid grid-cols-3 gap-4">
        {itemsEditorsPick.map(item => {
          const {descriptionLong, title: itemTitle} = item
          return (
            <div className="row-span-1" key={item.id}>
              <figure>
                <Link to={`editors-pick/play/${item.eid}`}>
                  <img src={item.imageForVideo.medium} alt="" />
                </Link>
              </figure>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
