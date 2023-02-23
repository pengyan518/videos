import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import Wrapper from '../templates/Wrapper'

export type FeaturedProps = {
  data: MainProps
}

export default function EditorsPick({data}: FeaturedProps) {
  const {
    translation,
    category: {itemsFeatured, itemsShenyunIntroduction, itemsShenyunTrailers, itemsReviews, itemsEditorsPick},
  } = data
  if (itemsEditorsPick.length === 0) return null
  return (
    <Section className="bg-[#524941]" width="md:w-full" xPadding="px-0" yPadding="pt-8 pb-14">
      <Wrapper className="innerPaddingAlignHeader">
        <div className="uppercase text-white py-4">{translation.Featured}</div>
        <div className="overflow-x-scroll md:overflow-x-auto">
          <div className="flex md:grid md:grid-cols-3 gap-4 w-[900px] md:w-full">
            {itemsEditorsPick.map(item => {
              const {descriptionLong, title: itemTitle} = item
              return (
                <div className="w-96 md:w-auto" key={item.id}>
                  <ThumbItem item={item} sectionName="featured" showTitle />
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}
