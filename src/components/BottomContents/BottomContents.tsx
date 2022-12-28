import React, {useRef, useState} from 'react'
import {MainProps} from '../../types'
import SyzpItem from './SyzpItem'
import SyzpItemsWrapper from './SyzpItemsWrapper'
import syzp from '../../assets/svg/syzp.svg'

export type BottomcontentsProps = {
  data: MainProps
}

export default function BottomContents({data}: BottomcontentsProps) {
  // const noValidContent = useRef(false)
  const {
    info: {
      title,
      ext: {miscData, position},
    },
      translation
  } = data
  const {syzp_videos} = miscData || {}
  const items = syzp_videos ? syzp_videos.split('###').slice(1) : []
  const myItem = items.filter(item => {
    const [img, url] = item.includes('##') ? item.split('##') : []
    return item.includes('##') && img.trim() !== '_' && img !== ' '
  })

  const syzpItems = myItem.map((item, i) => {
    const [img, url] = item.includes('##') ? item.split('##') : []
    if (!item.includes('##')) {
      return null
    }
    if (img.trim() === '_' || img === ' ') {
      return null
    }
    return <SyzpItem key={i} item={{img, url}} />
  })

  if (!syzp_videos || syzp_videos === '') return null
  // if (noValidContent.current) return null

  if (!myItem.length) return null

  return (
    <div className="BottomContents pt-16 pb-24 md:w-9/12 mx-auto">
      <header className="grid grid-cols-[1fr_3fr] md:flex divide-x divide-[#baa787] mb-10">
        <a className="w-44 pr-4 md:pr-10" href="https://www.shenyuncreations.com/" target="_blank">
          <img src={syzp} alt="" />
        </a>
        <div className="pl-4 md:pl-10 flex justify-end flex-col">
          <div className="md:h-5 OpenSans__font">
            {translation['More from']}
          </div>
        </div>
      </header>
      <SyzpItemsWrapper data={data}>{syzpItems}</SyzpItemsWrapper>
    </div>
  )
}
