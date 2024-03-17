import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import HeroCard from '../templates/HeroCard'
import {sectionMap} from '../../config'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

export type FeaturedProps = {
  data: MainProps
}

export default function Featured({data}: FeaturedProps) {
  const {
    content: {category, translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <div className="featured innerPaddingAlignHeader">
      {Object.entries(sectionMap)
        .filter(item => item[0] !== 'featured' && item[0] !== 'shorts' && item[0] !== 'latest-videos')
        .map(section => {
          const [sectionUrl, sectionContent] = section
          return (
            <div key={sectionUrl}>
              {category[sectionContent.content[0]]?.length && (
                <div className="mt-0 mb-0 text-center">
                  <h2 className="text-2xl md:text-4xl text-[#524941] OpenSans__font">{translation[sectionContent.title]}</h2>
                </div>
              )}
              {sectionContent.content.filter((item:string)=>item!=='itemsReviewIndividuals')
                  .map((item: React.Key | null | undefined) => (
                <HeroCard key={item} keyName={item} sectionName={sectionUrl} />
              ))}
            </div>
          )
        })}
    </div>
  )
}
