import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'

import {ContentProps, MainProps} from '../../types'
import TopBreadcrumbs from '../TopBreadcrumbs'

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const TopInfo: React.FC<IProps> = ({data}) => {
  const {
    info: {
      title,
      ext: {position, topBannerQuote, chineseName},
    },
  } = data
  // @ts-ignore
  return (
    <div className="flex md:flex-row items-center md:justify-center relative md:px-4">
      <div className="absolute top-6 left-[6vw] display-none md:block">
        <TopBreadcrumbs />
      </div>
      <div className="grid w-[80%] mx-auto">
        <div className="grid grid-cols-[1.4rem_8fr] md:grid-cols-[2rem_8fr] lg:grid-cols-[2vw_8fr] gap-6">
          <div className="text-[1.4rem] md:text-[2rem] lg:text-[2vw] text-[#887665] font-bold leading-tight font-serif md:pt-2">
            {chineseName}
          </div>
          <div className="md:pt-0">
            <h1 className="text-[2.25rem] lg:text-[3.7vw] font-serif md:pb-4 leading-[1.1]">{title}</h1>
            <div className="uppercase text-xl lg:text-[1.5vw] text-[#887665] pb-6 md:pb-16 open-sans-c">{position}</div>
            {topBannerQuote !== '' && (
              <div className="lg:text-[1.25rem] leading-tight text-[#887665] font-serif italic display-none md:block md:pr-8">
                “<span dangerouslySetInnerHTML={{__html: topBannerQuote}} />”
              </div>
            )}
          </div>
        </div>

        {topBannerQuote !== '' && (
          <div className="text-[1.125rem] leading-tight pb-4 text-[#887665] font-serif italic block pb-16 md:hidden">
            “<span dangerouslySetInnerHTML={{__html: topBannerQuote}} />”
          </div>
        )}
      </div>
    </div>
  )
}

export default TopInfo
