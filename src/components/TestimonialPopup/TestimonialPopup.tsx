import React, {ReactNode, useState} from 'react'
import {styled} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import BootstrapDialogTitle from '../BootstrapDialogTitle/BootstrapDialogTitle'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import VideoFrame from '../video-player/VideoFrame'
import isValidHttpUrl from '../../utils/isValidHttpUrl'
import Player from "../play/Player";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export type TestimonialProps = {
  className?: string
  setOpen: any
  open: boolean
  item: {
    eid: string
    text: string
    by: string
    title: string
    videoLink: string
    position: string
    embeddedVideoVimeo: string
    embeddedVideoYT: string
    image: {
      medium: string
    }
    imageFeatured: {
      medium: string
    }
  }
}

export default function TestimonialPopup({setOpen, open, item}: TestimonialProps) {
  const {
    content: {category, translation},
  } = useAppSelector((state: RootState) => state.intro)

  const {videoLink, text, position, title} = item

  const matches = useMediaQuery('(min-width:768px)')
  const videoUrl = isValidHttpUrl(videoLink)
  // const testVideoLink = videoUrl || null

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }
  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    // position: 'absolute' as const,
    // bgcolor: 'background.paper',
    // boxShadow: 24,
    // width: 1200,
    px: matches ? 2 : '0 !important',
    m: 0,
    // p: '0 !important',
  }

  const hasPreview = videoUrl

  return (
    <BootstrapDialog
      className="onDemandPopup__root"
      maxWidth={hasPreview ? 'lg' : 'sm'}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin={2} />
      <DialogContent sx={style}>
        <div className={`${hasPreview ? 'xl:px-20 py-8' : 'px-4 xl:px-16 pb-8 pt-0'}`}>
          <div>
            <span dangerouslySetInnerHTML={{__html: title}} />{position && (<>, <span dangerouslySetInnerHTML={{__html: position}} /></>)}
          </div>
          {hasPreview && <Player item={item} />}
          <div className={`grid px-4 md:px-0 gap-4 mt-6`}>
            <div
              className={`open-sans-c text-center leading-snug ${
                hasPreview ? 'text-[1.25rem] xl:text-[2.25rem] md:text-left' : 'text-[1.5rem] xl:text-[1.8rem]'
              }`}
              dangerouslySetInnerHTML={{__html: text}}
            />
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  )
}
