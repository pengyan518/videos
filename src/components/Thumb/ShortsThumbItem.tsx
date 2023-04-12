import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from './ThumbView'
import {VideoItemProps} from "../../types";

export type ItemProps = {
  item: VideoItemProps
  sectionName: any
}

export default function ShortsThumbItem({item, sectionName}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName} className="block hover:no-underline">
      {(myItem: any) => (
        <>
          <ThumbView item={myItem} showIcon vertical />
          <div className="pt-4 pr-4">
            <div className="text-[0.875rem] leading-tight line-clamp-2 font-bold">{myItem.title}</div>
          </div>
        </>
      )}
    </ThumbWrapper>
  )
}
