import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from './ThumbView'
import {VideoItemProps} from "../../types";

export type ItemProps = {
  item: VideoItemProps
  sectionName: any
  categoryName: string
}

export default function ThumbItemWithCaption({item, sectionName, categoryName}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName} className="block hover:no-underline" categoryName={categoryName}>
      {(myItem: any) => (
        <>
          <ThumbView item={myItem} showIcon />
          <div className="pt-4 pr-4">
            <div className="text-[1rem] leading-tight line-clamp-2 font-bold mb-2">{myItem.title}</div>
            <div className="text-sm line-clamp-3" dangerouslySetInnerHTML={{__html: myItem.descriptionLong || `“${myItem.textShort}”`}} />
          </div>
        </>
      )}
    </ThumbWrapper>
  )
}
