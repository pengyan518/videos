import React, {useState} from 'react'

export type ItemProps = {
  item: {
    eid: string
    onDemandLink: string
    imageForVideo: {
      medium: string
    }
  }
}

export default function ThumbView({item}: ItemProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <img src={item.imageForVideo.medium} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
    </div>
  )
}