import React from 'react'
import {MainProps} from '../../types'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import bgsm from '../../assets/images/topArea__bg_sm.jpg'
import imageGeneral from '../../assets/images/whats-new-general.jpg'
import imageGeneralSm from '../../assets/images/wisy-video_sm.jpg'
import {Figure} from './styles'
import ArrowRight from '../Icons/ArrowRight'

export type QuoteProps = {
  photoRelatedData: any[]
}

export default function OnlyOneImageView({photoRelatedData}: QuoteProps) {

  // const [interviewImageV, interviewImageH] = (photoRelatedData && photoRelatedData.length > 1 && photoRelatedData) || [bgsm, bgsm]
  const [interviewImageVOnly] = photoRelatedData
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(interviewImageVOnly.thumb, interviewImageVOnly.original)


  return (
    <div className="grid grid-cols-1 gap-2 pb-8 md:pb-32">
      <div className="">
        {interviewImageVOnly && (
          <div className="aspect-w-3 aspect-h-2 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={ref}>
            <Figure
              className={`object-cover ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src}
              alt={interviewImageVOnly.alt}
            />
          </div>
        )}
      </div>

    </div>
  )
}
