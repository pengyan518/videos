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
  quote: string
  interviewLink: string
  translation: any
}

export default function OnlyOneImageView({photoRelatedData, interviewLink, quote, translation}: QuoteProps) {

  // const [interviewImageV, interviewImageH] = (photoRelatedData && photoRelatedData.length > 1 && photoRelatedData) || [bgsm, bgsm]
  const [interviewImageVOnly] = photoRelatedData
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(interviewImageVOnly.thumb, interviewImageVOnly.original)

  // const {
  //   src: src2,
  //   ref: ref2,
  //   blur: blur2,
  //   isVisible: isVisible2,
  // } = useIntersectionObserverProgressiveImg(interviewImageH.thumb, interviewImageH.original)



  return (
    <div className="Quote md:grid lg:grid-cols-2 grid-rows-[1.2fr_1fr] gap-2 pb-8 md:pb-32">
      <div className="row-span-2">
        {interviewImageVOnly && (
          <div className="aspect-w-2 aspect-h-3 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={ref}>
            <Figure
              className={`object-cover ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src}
              alt={interviewImageVOnly.alt}
            />
          </div>
        )}
      </div>

      <div
        className={`bg-[#e0ccbb] flex items-center py-16 md:py-4 px-14 md:px-32 text-[#877564] OpenSans__font row-span-2`}>
        <div>
          {quote && <div className="pb-6 italic text-[1.2rem] 2xl:text-[1.6rem]" dangerouslySetInnerHTML={{__html: quote}} />}
          {interviewLink && (
            <div className="text-end">
              <div className="flex items-center justify-end">
                <a href={interviewLink} target="_blank">
                  <span className="pr-4 font-bold text-[#6c5d51]">{translation['Read the Full Interview']}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
