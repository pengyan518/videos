import React, {useEffect, useRef} from 'react'
import {MainProps} from '../../types'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import bgsm from '../../assets/images/topArea__bg_sm.jpg'
import imageGeneral from '../../assets/images/whats-new-general.jpg'
import imageGeneralSm from '../../assets/images/wisy-video_sm.jpg'
import {Figure} from './styles'
import ArrowRight from '../Icons/ArrowRight'
import OnlyOneImageView from './OnlyOneImageView'

export type QuoteProps = {
  data: MainProps
}

export default function SmallGallery({data}: QuoteProps) {
  const {
    info: {
      ext: {contentArea, smallGalleryData},
    },
    translation,
  } = data

  // @ts-ignore
  const [interviewImageV, interviewImageV2] = (smallGalleryData && smallGalleryData.length > 1 && smallGalleryData) || [bgsm, bgsm]
  // const [_, quote, interviewLink] = contentArea.trim() !== '' && contentArea?.split('##') ? contentArea.split('##') : []
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(interviewImageV.thumb, interviewImageV.original)

  const {
    src: src2,
    ref: ref2,
    blur: blur2,
    isVisible: isVisible2,
  } = useIntersectionObserverProgressiveImg(interviewImageV2.thumb, interviewImageV2.original)

  if (!smallGalleryData) return null
  if (smallGalleryData.length === 1) {
    return <OnlyOneImageView photoRelatedData={smallGalleryData} />
  }
  // const imgV = useRef(null)
  // const imgH = useRef(null)

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 pb-8 md:pb-32">
      {interviewImageV && (
        <div className="">
          <div className="aspect-w-2 aspect-h-3 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={ref}>
            <Figure
              className={`object-cover ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src}
              alt={interviewImageV.alt}
              onContextMenu={() => false}
            />
          </div>
        </div>
      )}

      {interviewImageV && interviewImageV2 && (
        <div className="">
          <div className="aspect-w-2 aspect-h-3 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={ref2}>
            <img
              className={`object-cover ${isVisible2 && !blur2 ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src2}
              alt={interviewImageV2.alt}
            />
          </div>
        </div>
      )}
    </div>
  )
}
