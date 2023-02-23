import React, {ReactNode, useCallback, useEffect, useState} from 'react'

import ThumbItemWithCaption from '../Thumb/ThumbItemWithCaption'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import Carousel from '../MyCarousel/Carousel'

export type RelatedContentProps = {
  data: any[]
  section: string
}

export default function RelatedContent({data, section}: RelatedContentProps) {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)

  if (!data) return null

  return (
    <Carousel className="flex-[0_0_40%] md:flex-[0_0_24%] last:mr-4" header={<div className={'text-[#524941] py-4 block'}>{translation.Playlist}</div>}>
      {data.map(item => {
        return (
          <div key={item.eid}>
            {/* @ts-ignore */}
            <ThumbItemWithCaption item={item} sectionName={section} />
          </div>
        )
      })}
    </Carousel>
  )
}
