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

export default function Quote({data}: QuoteProps) {
  const {
    info: {
      ext: {photoRelatedData, contentArea},
    },
    translation,
  } = data

  // @ts-ignore
  const [interviewImageV, interviewImageH] = (photoRelatedData && photoRelatedData.length > 1 && photoRelatedData) || [bgsm, bgsm]
  const [_, quote, interviewLink] = contentArea.trim() !== '' && contentArea?.split('##') ? contentArea.split('##') : []
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(interviewImageV.thumb, interviewImageV.original)

  const {
    src: src2,
    ref: ref2,
    blur: blur2,
    isVisible: isVisible2,
  } = useIntersectionObserverProgressiveImg(interviewImageH.thumb, interviewImageH.original)

  if (!photoRelatedData) return null
  if (contentArea.trim() === '') return null
  if (photoRelatedData.length === 1) {
    return <OnlyOneImageView photoRelatedData={photoRelatedData} quote={quote} interviewLink={interviewLink} translation={translation} />
  }
  // const imgV = useRef(null)
  // const imgH = useRef(null)



  return (
    <div className="Quote md:grid lg:grid-cols-2 grid-rows-[1.2fr_1fr] gap-2 pb-8 md:pb-32">
      <div className="row-span-2">
        {interviewImageV && (
          <div className="aspect-w-2 aspect-h-3 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={ref}>
            <Figure
              className={`object-cover ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src}
              alt={interviewImageV.alt}
              onContextMenu={() => false}
            />
          </div>
        )}
      </div>

      <div
        className={`bg-[#e0ccbb] flex items-center py-16 md:py-4 px-14 md:px-32 text-[#877564] OpenSans__font ${
          !interviewImageH ? 'row-span-2' : ''
        }`}>
        <div>
          {quote && <div className="pb-6 italic text-[1.2rem] 2xl:text-[1.6rem]" dangerouslySetInnerHTML={{__html: quote}} />}
          {interviewLink && (
            <div className="text-end">
              <div className="flex items-center justify-end">
                <a href={interviewLink} target="_blank">
                  <span className="pr-4 font-bold text-[#6c5d51]">{translation['Read the Full Interview']}</span>
                </a>
                {/* <div className="w-8 mt-1"> */}
                {/*  <ArrowRight /> */}
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
      {interviewImageV && interviewImageH && (
        <div className="flex justify-end shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]">
          <div className="aspect-w-3 aspect-h-2 w-full " ref={ref2}>
            <img
              className={`object-cover ${isVisible2 && !blur2 ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
              src={src2}
              alt={interviewImageH.alt}
            />
          </div>
        </div>
      )}
    </div>
  )
}
