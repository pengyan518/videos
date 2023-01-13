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

export type ItemProps = {
  item: {
    eid: string
    onDemandLink: string
    imageForVideo: {
      medium: string
    }
  }
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

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const {
    onDemandLink,
    eid,
    imageForVideo: {medium},
  } = item
  return (
    <>
      {onDemandLink ? (
        <>
          <div onClick={handleClickOpen} className={`cursor-pointer ${className}`}>
            {children(item)}
          </div>
          <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin={2} />
            <DialogContent>
              <div className="open-sans-c text-2xl mb-8 mx-auto w-3/4 text-center">{translation['Watch this video on demand at Shen Yun Creations']}</div>
              <a
                href={onDemandLink}
                target="_blank"
                className="cursor-pointer block w-full text-white bg-[#634699] hover:bg-[#2a0c63] hover:no-underline focus:ring-4 focus:outline-none font-medium rounded-[4px] text-base px-8 md:px-12 py-8 text-center dark:bg-[#634699] dark:hover:bg-[#2a0c63]"
                rel="noreferrer">
                <div className={``}>
                  <span className="open-sans-c text-white text-[1.8rem] mr-2">{translation['Access exclusive content']}</span>
                  <OpenInNewIcon className="mt-[-8px]" />
                </div>
              </a>
            </DialogContent>
          </BootstrapDialog>
        </>
      ) : (
        <Link className={className} to={`/${config.controller}/${sectionName}/play/${eid}`}>{children(item)}</Link>
      )}
    </>
  )
}