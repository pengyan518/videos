import React, {useCallback} from 'react'
import {MainProps} from '../../types'
import ArrowUp from '../icons/ArrowUp'

export type FooterProps = {
  data: MainProps
}

export default function Footer({data}: FooterProps) {
  const {translation} = data

  const backTop = useCallback(() => window.scrollTo(0, 0), [])

  return (
    <div className="Footer pt-20 pb-20 bg-white">
      <footer className="overflow-x-hidden text-[#856a34] OpenSans__font text-[0.8rem] md:text-[1.25rem] text-center">
        <div className="mx-auto w-3/12 cursor-pointer" onClick={backTop}>
          <div className="w-4 md:w-12 text-center mx-auto">
            <ArrowUp />
          </div>
          <div className="">{translation['Back to Top']}</div>
        </div>
      </footer>
    </div>
  )
}
