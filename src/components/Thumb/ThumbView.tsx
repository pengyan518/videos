import React, {useState} from 'react'
import LazyLoad from '../LazyLoad/LazyLoad'
import Lazy from '../LazyLoad/Lazy'
import {VideoItemProps} from '../../types'

export type ItemProps = {
  item: VideoItemProps
}

export default function ThumbView({item}: ItemProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <Lazy>
        <img src={item.imageForVideo.medium} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </Lazy>
    </div>
  )
}
