import React, {forwardRef, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {useMediaQuery} from '@mui/material'
import config, {controller, sectionMap} from '../../config'

import {ShortsProps, VideoItemProps} from '../../types'

import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShareButton from '../ShareButton/ShareButton'

import IconsStore from '../icons/IconsStore'
import Triangle from '../icons/Triangle'
import ShareButtonsPanel from './ShareButtonsPanel'
import Play from '../icons/Play'
import {requestTimeout} from '../../utils/RAFTimeout'
import LinearDeterminate from '../LinearDeterminate/LinearDeterminate'
import toSeconds from '../../utils/toSeconds'

export type ShortVideoSharePanelProps = {
  title: string
  description: string
  // duration: number
}

function TitleExpanded({title, description}: ShortVideoSharePanelProps) {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)
  // const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const [expanded, setExpanded] = useState<boolean>(false)

  const matches = useMediaQuery('(min-width:768px)')

  const textRef = useRef<HTMLDivElement>(null)
  // const isHover = useHover(hoverRef)

  const handleClick = useCallback(() => {
    setExpanded(!expanded)
    // if(expanded) {
    //   requestTimeout(() => setExpanded(false), 400)
    // } else {
    //   requestTimeout(() => setExpanded(true), 0)
    // }
  }, [expanded])

  useEffect(() => {
    if (expanded) {
      requestTimeout(() => textRef.current && textRef.current.classList.add('animate__fadeInUp'), 0)
    } else {
      requestTimeout(() => textRef.current && textRef.current.classList.replace('animate__fadeInUp', 'animate__fadeOutDown'), 0)
      requestTimeout(() => textRef.current && textRef.current.classList.remove('animate__fadeOutDown'), 400)
    }
    return () => {
      requestTimeout(() => {
        if (textRef.current && textRef.current.classList.contains('animate__fadeOut')) textRef.current.classList.remove('animate__fadeOut')
      }, 0)
    }
  }, [expanded])

  useEffect(() => {
    return () => {
      setExpanded(false)
    }
  }, [title])

  return (
    <div className="cursor-pointer z-[11] fixed text-white left-4 bottom-4 right-[4rem] md:hidden" onClick={handleClick}>
      <div className="">
        {expanded ? (
          <div className="animate__animated" ref={textRef}>
            <span className="" dangerouslySetInnerHTML={{__html: description}} />
            {/* @ts-ignore */}
            <IconsStore className="w-4 h-4 fill-white -rotate-90 ml-2 inline" name="ChevronLeft" />
          </div>
        ) : (
          <>
            <span className="" dangerouslySetInnerHTML={{__html: title}} />
            {/* @ts-ignore */}
            <IconsStore className="w-4 h-4 fill-white rotate-90 ml-2 inline" name="ChevronLeft" />
          </>
        )}
      </div>
    </div>
  )
}

// const ShortVideoSharePanel = forwardRef(MyShortVideoSharePanel)

export default TitleExpanded
