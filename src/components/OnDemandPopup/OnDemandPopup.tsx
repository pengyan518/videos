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


const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export type OndemandpopupProps = {
  className?: string
  setOpen: any
  open: boolean
  item: {
    eid: string
    onDemandLink: string
    videoLink: string
    imageForVideo: {
      medium: string
    }
  }
}

export default function OnDemandPopup({setOpen, open, item}: OndemandpopupProps) {
  const {
    content: {category, translation},
  } = useAppSelector((state: RootState) => state.intro)

  const {
    onDemandLink,
    videoLink,
    imageForVideo: {medium},
  } = item

  const matches = useMediaQuery('(min-width:768px)')

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

  return (
    <BootstrapDialog className="onDemandPopup__root" maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin={2} />
      <DialogContent sx={style}>
        <div className="xl:px-20 py-8">
          <VideoFrame poster={medium} videoSrc={videoLink} />
          <div className="grid md:grid-cols-[1.5fr_1fr] px-4 md:px-0 gap-4 xl:gap-24 mt-6">
            <div
              className="open-sans-c text-center md:text-left text-[1.25rem] xl:text-[2.25rem] leading-snug"
              dangerouslySetInnerHTML={{__html: translation.watch_this_video_on_demand}}
            />
            <a
              href={onDemandLink}
              target="_blank"
              className="cursor-pointer flex items-center justify-center text-white bg-[#634699] hover:bg-[#2a0c63] hover:no-underline focus:ring-4 focus:outline-none font-medium rounded-[4px] text-base px-2 md:px-12 py-8 text-center dark:bg-[#634699] dark:hover:bg-[#2a0c63]"
              rel="noreferrer">
              <div>
                <span className="open-sans-c uppercase font-bold text-white text-[1rem] md:text-[1.2rem] mr-2">
                  {translation['Access exclusive content']}
                </span>
                <OpenInNewIcon sx={{ fontSize: 18 }} className="mt-[-5px]" />
              </div>
            </a>
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  )
}
