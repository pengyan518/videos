import React, {ReactNode, useCallback, useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import OnDemandPopup from '../OnDemandPopup/OnDemandPopup'
import {VideoItemProps} from '../../types'
import getFriendlyUrl from '../../utils/getFriendlyUrl'
import TestimonialPopup from '../TestimonialPopup/TestimonialPopup'
import {setArticle, setModalStatus} from '../../features/intro/introSlice'

export type ItemProps = {
  item: VideoItemProps
  sectionName: string
  className?: string
  children: any
  categoryName?: string
}

export default function ThumbWrapper({item, sectionName, className, children, categoryName}: ItemProps) {
  const {
    content: {category, translation},
  } = useAppSelector((state: RootState) => state.intro)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {onDemandLink, eid, title, urlFriendlyName} = item

  const handleClickOpen = () => {
    setOpen(true)
    axios.get(`${config.updateCounter}${eid}`)
  }
  const handleClickTarget = () => {
    dispatch(setModalStatus(true))
    dispatch(setArticle(item))
    navigate(`/reviews/audience-reviews/${eid}`)
    axios.get(`${config.updateCounter}${eid}`)
  }
  const seoUrl = urlFriendlyName || getFriendlyUrl(title)

  const handleClickVideo = useCallback(() => {
    navigate(`/${sectionName}/play/${eid}/${seoUrl}.html`)
    axios.get(`${config.updateCounter}${eid}`)
  }, [eid, navigate, sectionName, seoUrl])

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {onDemandLink ? (
        <>
          <div onClick={handleClickOpen} className={`cursor-pointer ${className || ''}`}>
            {children(item)}
          </div>
          {/* @ts-ignore */}
          <OnDemandPopup setOpen={setOpen} className={className} open={open} item={item} />
        </>
      ) : categoryName === 'itemsReviewIndividuals' ? (
        <>
          <div onClick={handleClickTarget} className={`cursor-pointer ${className || ''}`}>
            {children(item)}
          </div>
          {/* <TestimonialPopup setOpen={setOpen} className={className} open={open} item={item} /> */}
        </>
      ) : (
        <a className={`cursor-pointer ${className || ''}`} onClick={handleClickVideo}>
          {children(item)}
        </a>
      )}
    </>
  )
}
