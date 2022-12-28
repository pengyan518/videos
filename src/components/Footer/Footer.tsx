import React from 'react'
import {MainProps} from '../../types'
import ArrowRight from '../Icons/ArrowRight'

export type FooterProps = {
  data: MainProps
}

export default function Footer({data}: FooterProps) {
  const {
    translation,
  } = data

  return (
    <div className="Footer pt-20 pb-20 md:w-9/12 mx-auto">
      <footer className="flex justify-between overflow-x-hidden text-[#856a34] OpenSans__font text-[0.8rem] md:text-[1.25rem]">
        <a href="/artists" className="flex items-center">
          <div className="rotate-180 w-4 md:w-12">
            <ArrowRight />
          </div>
          <div className="pl-4">{translation['Return to the Artists']}</div>
        </a>
      </footer>
    </div>
  )
}
