import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
// import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import BootstrapDialogTitle from '../BootstrapDialogTitle/BootstrapDialogTitle'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import VideoFrame from '../video-player/VideoFrame'
import isValidHttpUrl from '../../utils/isValidHttpUrl'
import Player from '../play/Player'
import {setArticle, setModalStatus} from '../../features/intro/introSlice'


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
  // setOpen: any
  // open: boolean
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

export default function TestimonialPopup() {
  const {
    content: {
      category: {itemsReviewIndividuals},
      translation,
    },
    modalIsOpened,
    article: item,
  } = useAppSelector((state: RootState) => state.intro)

  // const {videoLink, text, position, title} = item
  const navigate = useNavigate()

  const matches = useMediaQuery('(min-width:768px)')
  // const videoUrl = isValidHttpUrl(videoLink)
  // const testVideoLink = videoUrl || null
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(setModalStatus(false))
    dispatch(setArticle(null))
    navigate(`/reviews`)
  }

  const style = {
    px: matches ? 2 : '0 !important',
    m: 0,
  }

  const hasPreview = true

  const {section, eid} = useParams()
  const itemObject = useRef({content: item, next: null})

  const getCurrent = useCallback (() => {
      // @ts-ignore
      for (const [i, element] of itemsReviewIndividuals.entries()) {
        if (element.eid === eid) {
          itemObject.current.content = element
          // itemObject.current.key = key
          itemObject.current.next = i === itemsReviewIndividuals.length - 1 ? itemsReviewIndividuals[0] : itemsReviewIndividuals[i + 1]
          // break
          return false
        }
      }
    return true
  }, [eid, itemsReviewIndividuals])

  useEffect(() => {
    if(!item) {
      getCurrent()
      if(!modalIsOpened) dispatch(setModalStatus(true))
    }
  }, [dispatch, getCurrent, item, modalIsOpened])

  if(!itemObject.current.content) return null

  return (
    <BootstrapDialog
      className="testimonialPopup__root"
      maxWidth={hasPreview ? 'lg' : 'sm'}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={modalIsOpened}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin={2} />
      <DialogContent sx={style}>
        <div className={`${hasPreview ? 'xl:px-20 py-8' : 'px-4 xl:px-16 pb-8 pt-0'}`}>
          <div className="mb-4 font-bold text-[1.25rem] xl:text-[2.25rem] leading-snug px-4">
            <span dangerouslySetInnerHTML={{__html: itemObject.current.content.title}} />
            {itemObject.current.content.position && (
              <>
                , <span dangerouslySetInnerHTML={{__html: itemObject.current.content.position}} />
              </>
            )}
          </div>
          {hasPreview && <Player item={itemObject.current.content} />}
          <div className={`grid px-4 md:px-0 gap-4 my-10`}>
            <div
              className={`georgia ${hasPreview ? 'text-[1.25rem] xl:text-[1.75rem] text-left' : 'text-[1.5rem] xl:text-[1.8rem]'}`}
              dangerouslySetInnerHTML={{__html: `“${itemObject.current.content.text}”`}}
            />
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  )
}
