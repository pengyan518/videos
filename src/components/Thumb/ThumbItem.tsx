import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from "./ThumbView";

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

export default function ThumbItem({item, sectionName}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName}>
      {(myItem: any) => (
        <ThumbView item={myItem} />
      )}
    </ThumbWrapper>
  )
}
