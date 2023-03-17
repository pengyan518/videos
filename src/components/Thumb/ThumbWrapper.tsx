import React, {ReactNode, useCallback, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import BootstrapDialogTitle from '../BootstrapDialogTitle/BootstrapDialogTitle'
import config from '../../config'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import OnDemandPopup from '../OnDemandPopup/OnDemandPopup'
import {VideoItemProps} from '../../types'
import getFriendlyUrl from '../../utils/getFriendlyUrl'
import axios from 'axios'

export type ItemProps = {
  item: VideoItemProps
  sectionName: string
  className?: string
  children: any
}

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function ThumbWrapper({item, sectionName, className, children}: ItemProps) {
  const {
    content: {category, translation},
  } = useAppSelector((state: RootState) => state.intro)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const {
    onDemandLink,
    eid,
    title,
    urlFriendlyName,
    imageForVideo: {medium},
  } = item
  const handleClickOpen = () => {
    setOpen(true)
    axios.get(`${config.updateCounter}${eid}`)
  }
  const seoUrl = urlFriendlyName || getFriendlyUrl(title)

  const handleClickVideo = useCallback(() => {
    navigate(`/${config.controller}/${sectionName}/play/${eid}/${seoUrl}.html`)
    axios.get(`${config.updateCounter}${eid}`)
  }, [eid, navigate, sectionName, seoUrl])

  return (
    <>
      {onDemandLink ? (
        <>
          <div onClick={handleClickOpen} className={`cursor-pointer ${className || ''}`}>
            {children(item)}
          </div>
          <OnDemandPopup setOpen={setOpen} className={className} open={open} item={item} />
        </>
      ) : (
        <a className={`cursor-pointer ${className || ''}`} onClick={handleClickVideo}>
          {children(item)}
        </a>
      )}
    </>
  )
}
