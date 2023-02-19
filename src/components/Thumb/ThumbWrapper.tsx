import React, {ReactNode, useState} from 'react'
import {Link} from 'react-router-dom'
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

  const {
    onDemandLink,
    eid,
    title,
    urlFriendlyName,
    imageForVideo: {medium},
  } = item
  const handleClickOpen = () => {
    setOpen(true)
  }
  const seoUrl = urlFriendlyName || getFriendlyUrl(title)

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
        <Link className={className} to={`/${config.controller}/${sectionName}/play/${eid}/${seoUrl}.html`}>
          {children(item)}
        </Link>
      )}
    </>
  )
}
