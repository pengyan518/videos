import React, {useCallback} from 'react'
import { useParams } from 'react-router-dom';
import {MainProps} from '../../types'
import ArrowUp from "../icons/ArrowUp";
import ChevronRight from "../icons/ChevronRight";
import ChevronUp from '../icons/ChevronUp';

export type FooterProps = {
  data: MainProps
}

export default function Footer({data}: FooterProps) {
  const {translation, category} = data
  const {section} = useParams()
  const backTop = useCallback(() => window.scrollTo(0, 0), [])

  return (
    <div className="Footer pt-10 pb-20 md:pt-20 md:pb-20 bg-white">
      <footer className="overflow-x-hidden text-[#856a34] OpenSans__font text-[0.8rem] md:text-[1.25rem] text-center">
        {section === 'reviews' && (
          <div className="overflow-x-hidden xl:w-10/12 2xl:w-[91%] mx-auto">
            <div className="mb-[100px] flex justify-end innerPaddingAlignHeader">
            <a href="/reviews/view/featured" className="cursor-pointer flex justify-end" target="_blank">          
              <div className="cursor-pointer py-4 flex items-center gap-2 hover:no-underline" >
              <span className="mt-[-2px] uppercase">{translation['More Reviews']}</span>
              {/* @ts-ignore */}
              <ChevronRight className="w-5 h-5" />
              </div>
            </a>
            </div>
          </div>
        )}
        <div className="mx-auto w-3/12 cursor-pointer" onClick={backTop}>
          <div className="flex items-center justify-center text-center mx-auto flex-col">
            
            
              {/* @ts-ignore */}
            <ChevronUp className="w-5 h-5" />
         
            <div className="uppercase mt-2">{translation['Back to Top']}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
