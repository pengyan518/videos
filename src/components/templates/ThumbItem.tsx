import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import BootstrapDialogTitle from '../BootstrapDialogTitle/BootstrapDialogTitle'
import config from "../../config";

export type ItemProps = {
  item: {
    eid: string
    onDemandLink: string
    imageForVideo: {
      medium: string
    }
  }
  sectionName: string
}

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function ThumbItem({item, sectionName}: ItemProps) {
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
    <figure className="w-full">
      {onDemandLink ? (
        <>
          <div onClick={handleClickOpen} className="cursor-pointer">
            <img src={medium} alt="" />
          </div>
          <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin={2} />
            <DialogContent>
              <div className="open-sans-c text-2xl mb-8 mx-auto w-3/4 text-center">Watch this video on demand at Shen Yun Creations</div>
              <a
                href={onDemandLink}
                target="_blank"
                className="cursor-pointer block w-full text-white bg-[#634699] hover:bg-[#2a0c63] hover:no-underline focus:ring-4 focus:outline-none font-medium rounded-[4px] text-base px-8 md:px-12 py-8 text-center dark:bg-[#634699] dark:hover:bg-[#2a0c63]"
                rel="noreferrer">
                <div className={``}>
                  <span className="open-sans-c text-white text-[1.8rem] mr-2">Access exclusive content</span>
                  <OpenInNewIcon className="mt-[-8px]" />
                </div>
              </a>
            </DialogContent>
          </BootstrapDialog>
        </>
      ) : (
        <Link to={`/${config.controller}/${sectionName}/play/${eid}`}>
          <img src={medium} alt="" />
        </Link>
      )}
    </figure>
  )
}
