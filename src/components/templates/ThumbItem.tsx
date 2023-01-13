import React, {useState} from 'react'
import ThumbWrapper from './ThumbWrapper'

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
        <React.Fragment>
          <img src={myItem.imageForVideo.medium} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </React.Fragment>
      )}
    </ThumbWrapper>
  )
}
