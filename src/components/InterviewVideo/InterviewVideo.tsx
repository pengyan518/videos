import React, {useRef} from 'react'
import {MainProps} from '../../types'
import {Figure, Label} from './styles'
import VideoFrame from './VideoFrame'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
// import useHover from "../../hooks/useHover";

export type InterviewvideoProps = {
  data: MainProps
}

export default function Interviewvideo({data}: InterviewvideoProps) {
  const {
    info: {
      ext: {miscData, videoRelated},
    },
    translation,
  } = data
  const {featured_video_description} = miscData || {}
  const [_, video_description, previewImage, targetLink] = featured_video_description ? featured_video_description.split('##') : []
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {freezeOnceVisible: true})
  const isVisible = !!entry?.isIntersecting

  // console.debug(previewImage === ' ')
  // console.debug(previewImage !== ' ')

  if (!featured_video_description || featured_video_description === '') return null
  if (previewImage === ' ' || previewImage.trim() === '_') return null

  return (
    <div className="InterviewVideo pb-12 md:pb-32">
      <Figure className="aspect-w-16 aspect-h-9 mb-5 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.15)]" dataSrc={previewImage.trim()} ref={ref}>
        {isVisible && <VideoFrame poster={previewImage.trim()} />}
      </Figure>

      <div className="grid md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] items-center justify-between gap-4 md:gap-16 px-4 OpenSans__font">
        {video_description && <div dangerouslySetInnerHTML={{__html: video_description}} />}
        {targetLink && (
          <a
            target="_blank"
            href={targetLink}
            className="relative inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-3xl shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              {translation['Watch the Full Exclusive Video']}
            </span>
            <span className="relative invisible">{translation['Watch the Full Exclusive Video']}</span>
          </a>
        )}
      </div>
    </div>
  )
}
