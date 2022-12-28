import React from 'react'
import {ItemProps, MainProps} from '../../types'
import useProgressiveImg from '../../hooks/useProgressiveImg'
import FancyImageHover from '../FancyImageHover'
import imageGeneral from '../../assets/images/whats-new-general.jpg'
import imageGeneralSm from '../../assets/images/wisy-video_sm.jpg'

export default function Item(props: ItemProps) {
  const {
    ext: {imageIdData, introductionShort},
    title,
    url,
  } = props.item

  const imageThumb = imageIdData && imageIdData[0].thumb || imageGeneralSm
  const imageOrinal = imageIdData && imageIdData[0].medium || imageGeneral

  const {src, blur} = useProgressiveImg(imageThumb, imageOrinal, props.isVisible)

  return (
    <div className="item" {...props}>
      <a href={url} target="_blank" className="aspect-w-3 aspect-h-2 w-full block mb-5">
        <FancyImageHover>
          <img
            className={`object-cover w-full h-full ${props.isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
            src={src}
            alt=""
          />
        </FancyImageHover>
      </a>
      <a href={url} target="_blank" className="mb-3 leading-tight font-serif text-lg md:text-2xl leading-tight line-clamp-2 md:line-clamp-none">{title}</a>
      <div className="leading-snug OpenSans__font text-xs md:text-base mr-4 line-clamp-4 md:line-clamp-none" dangerouslySetInnerHTML={{__html: introductionShort}} />
      <div className="pt-2 OpenSans__font">
        <a href={url} target="_blank" className="font-bold text-xs md:text-base">
            {props.translation.Read}
        </a>
      </div>
    </div>
  )
}
