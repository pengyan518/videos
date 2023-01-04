import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import Section from './Section'
import ThumbItem from "./ThumbItem";

export type FeaturedProps = {
  items: any[]
  sectionTitle?: string
  title: string
  sectionName: string
}

export default function HeroCard({items, sectionTitle, title, sectionName}: FeaturedProps) {
  const [hero, thumb_1, thumb_2, thumb_3] = items
  const thumbs = [thumb_1, thumb_2, thumb_3]
  return (
    <Section title={sectionTitle}>
      <Link to={`${sectionName}`}>{title}</Link>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 col-span-2">
          <ThumbItem item={hero} sectionName={sectionName} />
          <div>{hero.title}</div>
          <div dangerouslySetInnerHTML={{__html: hero.descriptionLong}} />
        </div>

        {thumbs.map(item => {
          const {descriptionLong, title: itemTitle} = item
          return (
            <div className="row-span-1" key={item.id}>
              <div className="grid grid-cols-2 gap-4">
                <ThumbItem item={item} sectionName={sectionName} />
                <div>
                  <div>{itemTitle}</div>
                  <div dangerouslySetInnerHTML={{__html: descriptionLong}} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
