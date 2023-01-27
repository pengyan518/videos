import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'
import ThumbView from "./ThumbView";
import {VideoItemProps} from "../../types";

export type ItemProps = {
  item: VideoItemProps
  sectionName: string
}

export default function ThumbItem({item, sectionName}: ItemProps) {
  return (
    <ThumbWrapper item={item} sectionName={sectionName}>
      {(myItem: any) => (
        <ThumbView item={myItem} showIcon />
      )}
    </ThumbWrapper>
  )
}
