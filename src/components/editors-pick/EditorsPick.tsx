import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'
import Section from '../templates/Section'
import ThumbItem from '../templates/ThumbItem'
import Wrapper from '../templates/Wrapper'

export type FeaturedProps = {
  data: MainProps
}

export default function EditorsPick({data}: FeaturedProps) {

  const {
    translation,
    category: {itemsFeatured, itemsShenyunIntroduction, itemsShenyunTrailers, itemsReviews, itemsEditorsPick},
  } = data
  return (
    <Section className="bg-[#524941] overflow-x-scroll" width="md:w-full">
      <Wrapper className="w-[900px]">
        <div className="uppercase text-white py-4">{translation['Editors pick']}</div>
        <div className="flex md:grid md:grid-cols-3 gap-4">
          {itemsEditorsPick.map(item => {
            const {descriptionLong, title: itemTitle} = item
            return (
              <div className="w-96 md:w-auto" key={item.id}>
                <ThumbItem item={item} sectionName="editors-pick" />
              </div>
            )
          })}
        </div>
      </Wrapper>
    </Section>
  )
}
