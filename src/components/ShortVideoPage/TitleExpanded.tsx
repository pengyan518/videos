import React, {forwardRef, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import IconsStore from '../icons/IconsStore'
import {requestTimeout} from '../../utils/RAFTimeout'
import {Gradient} from './styles'

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
  const [expandedHeight, setExpandedHeight] = useState<string>('150px')

  const textRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  // const isHover = useHover(hoverRef)

  const handleClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  useEffect(() => {
    if (textRef.current) {
      setExpandedHeight(window.getComputedStyle(textRef.current).height)
    }
  }, [title])

  useEffect(() => {
    if (expanded) {
      requestTimeout(() => textRef.current && textRef.current.classList.add('animate__fadeInUp'), 0)
      requestTimeout(() => descriptionRef.current && descriptionRef.current.classList.add('animate__fadeOut'), 0)
    } else {
      requestTimeout(() => textRef.current && textRef.current.classList.replace('animate__fadeInUp', 'animate__fadeOutDown'), 0)
      requestTimeout(() => textRef.current && textRef.current.classList.remove('animate__fadeOutDown'), 250)
      requestTimeout(() => descriptionRef.current && descriptionRef.current.classList.remove('animate__fadeOut'), 200)
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
    <>
      <div className="cursor-pointer z-[11] fixed text-white left-4 bottom-4 right-[4rem] md:hidden" onClick={handleClick}>
        <div className="">
          <div className="absolute bottom-0 left-0 animate__animated opacity-0" ref={textRef}>
            <span className="" dangerouslySetInnerHTML={{__html: description}} />
            {/* @ts-ignore */}
            <IconsStore className="w-4 h-4 fill-white -rotate-90 ml-2 inline" name="ChevronLeft" />
          </div>
          <div className="animate__animated" ref={descriptionRef}>
            <span className="" dangerouslySetInnerHTML={{__html: title}} />
            {/* @ts-ignore */}
            <IconsStore className="w-4 h-4 fill-white rotate-90 ml-2 inline" name="ChevronLeft" />
          </div>
        </div>
      </div>
      <Gradient
        dataHeight={expandedHeight}
        className={`absolute rounded-b-xl w-full left-0 bottom-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] ${
          expanded ? 'opacity-100' : 'opacity-10'
        }`}
      />
    </>
  )
}

// const ShortVideoSharePanel = forwardRef(MyShortVideoSharePanel)

export default TitleExpanded
