import React from 'react'
import {MainProps} from '../../types'
import Item from './Item'
import ItemWrapper from './ItemWrapper'

export type RelatedcontentsProps = {
  data: MainProps
}
type ItemProps = {
  item: object
}
export default function RelatedContents({data}: RelatedcontentsProps) {
  const {
    info: {
      ext: {contentRelatedData, contentArea, RepertoireHighlights},
    },
      translation
  } = data

  const contentRelated = contentRelatedData ? contentRelatedData.map((item: any) => <Item item={item} key={item.id} translation={translation} />): ''

  if (!contentRelatedData || contentRelatedData.length === 0) return null

  return (
    <div className="RelatedContents md:w-9/12 pb-12 md:pb-48 mx-auto px-4">
      <>
        <h3 className="text-center uppercase py-8 md:py-16 text-[1.5rem] md:text-[2.8rem] leading-tight open-sans-c">{translation['Go Behind the Scenes']}</h3>
        <ItemWrapper>{contentRelated}</ItemWrapper>
      </>
    </div>
  )
}
