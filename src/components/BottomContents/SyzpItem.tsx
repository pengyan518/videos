import React, {useRef} from 'react'
// import {ItemProps, MainProps} from '../../types'
import useProgressiveImg from '../../hooks/useProgressiveImg'
import bgsm from '../../assets/images/topArea__bg_sm.jpg'
// import FancyImageHover from '../FancyImageHover'
import Play from '../Icons/Play'
import useHover from '../../hooks/useHover'

type ItemProps = {
  item: {
    img: string
    url: string
  }
  isVisible?: boolean
}

export default function SyzpItem(props: ItemProps) {
  const {img, url} = props.item

  const {src, blur} = useProgressiveImg(bgsm, img, props.isVisible)
  const hoverRef = useRef(null)

  const isHover = useHover(hoverRef)

  return (
    <div className="item" {...props}>
      <a href={url} target="_blank" className={`aspect-w-16 aspect-h-9 w-full block ${isHover ? `shadow-xl` : ``}`} rel="noreferrer" ref={hoverRef}>
        <img
          className={`object-cover w-full h-full ${props.isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
          src={src}
          alt=""
        />

        <Play className={`w-8 h-8 md:w-16 md:h-16 absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] text-white ${isHover ? `drop-shadow-lg` : `drop-shadow`}`} />
      </a>
    </div>
  )
}
