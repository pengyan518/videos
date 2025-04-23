import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from './ThumbView'
import {VideoItemProps} from "../../types";
import capitalized from "../../utils/capitalized";

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
            <div className={`text-[1rem] leading-tight line-clamp-2 font-bold ${myItem.position?'':'mb-2'}`}>{myItem.title}</div>
            {myItem.position && <div className="text-sm leading-tight line-clamp-2 mb-2">{ capitalized(myItem.position) }</div>}
            {(myItem.description || myItem.descriptionLong || myItem.textShort) && (
              <div className="text-sm line-clamp-3" dangerouslySetInnerHTML={{__html: myItem.descriptionLong || myItem.description || `“${myItem.textShort}”` }} />
            )}
          </div>
        </>
      )}
    </ThumbWrapper>
  )
}
