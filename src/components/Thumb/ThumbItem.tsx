import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from "./ThumbView";
import {VideoItemProps} from "../../types";

export type ItemProps = {
  item: VideoItemProps
  sectionName: string
  showTitle?: boolean
}

export default function ThumbItem({item, sectionName, showTitle}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName}>
      {(myItem: any) => (
        <ThumbView item={myItem} showIcon showTitle={showTitle} />
      )}
    </ThumbWrapper>
  )
}
