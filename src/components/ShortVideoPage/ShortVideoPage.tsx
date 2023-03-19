import React, {useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import {Link, useParams} from 'react-router-dom'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'


import config, {controller, sectionMap} from '../../config'
import ShortVideoSlide from "./ShortVideoSlide";
import ShortPlayer from "./ShortPlayer";

export type ShortvideopageProps = {
  item: any
  data: any[]
}

export default function ShortVideoPage({item, data}: ShortvideopageProps) {
  const matches = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const divNames = ['#sy-header-outer-bar-reg', '#shenyun-footer', '#shenyun-footer-bar']
      divNames.forEach(elm => {
        const itemDiv = document.querySelector(elm)
        if (itemDiv) itemDiv.setAttribute('style', 'display:none')
      })
    }
  }, [])
  return (
    <div className="ShortVideoPage">
      <Link to={`/${controller}`}>Back</Link>

      <ShortVideoSlide item={item} data={data} />
    </div>
  )
}
