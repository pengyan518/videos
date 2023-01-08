import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'

import {ContentProps, MainProps} from '../../types'
import VideoBackground from '../video-background/VideoBackground'
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const TopInfo: React.FC<IProps> = ({data}) => {
    const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
  const {
    // eslint-disable-next-line no-empty-pattern
    category: {},
  } = data
  // @ts-ignore
  return (
    <div className="">
      <VideoBackground src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
        <div className="flex">
        Shen Yun—Who We Are | "Shen Yun"—for Chinese, the words evoke a sense of wonder, magic, and the divine. To audiences who have seen
        it, they recall the experience of a lifetime....
        <a
            target="_blank"
            href=""
            className="relative inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-3xl shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              {translation['Watch the Full Video']}
            </span>
          </a>
        </div>
      </VideoBackground>
    </div>
  )
}

export default TopInfo
