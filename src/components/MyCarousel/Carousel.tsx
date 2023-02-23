import React, {ReactNode, useCallback, useEffect, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import useEmblaCarousel, {EmblaOptionsType} from '../carousel'
import {DotButton, PrevButton, NextButton} from './EmblaCarouselArrowsDotsButtons'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

export type RelatedContentProps = {
  className: string
  children: React.ReactNode
  header?: React.ReactNode
}

export default function Carousel({className, children, header}: RelatedContentProps) {
  const {
    content: {langCode},
  } = useAppSelector((state: RootState) => state.intro)

  const ilLanguage = langCode === 'il'

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 'auto',
    direction: ilLanguage ? 'rtl' : 'ltr',
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const matches = useMediaQuery('(min-width:768px)')

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  // if (!data) return null

  return (
    <div className="related-content relative md:px-6 md:mx-[-1.5rem]">
      <div className="">
        {header && header}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {React.Children.map(children, (child, index) => {
              if (!React.isValidElement(child)) return null

              return React.cloneElement(child, {
                // @ts-ignore
                className,
              })
            })}
          </div>
        </div>
        {matches && (
          <>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </>
        )}
      </div>
    </div>
  )
}
