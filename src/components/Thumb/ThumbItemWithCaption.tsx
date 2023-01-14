import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from './ThumbView'

export type ItemProps = {
  item: {
    eid: string
    onDemandLink: string
    imageForVideo: {
      medium: string
    }
  }
  sectionName: string
}

export default function ThumbItemWithCaption({item, sectionName}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName} className="block">
      {(myItem: any) => (
        <>
          <ThumbView item={myItem} />
          <div className="pt-4">
            <div className="font-bold text-sm pb-2">{myItem.title}</div>
            <div className="line-clamp-4 text-sm" dangerouslySetInnerHTML={{__html: myItem.descriptionLong}} />
          </div>
        </>
      )}
    </ThumbWrapper>
  )
}
