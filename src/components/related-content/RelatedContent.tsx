import React, {ReactNode, useCallback, useEffect, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import useEmblaCarousel, {EmblaOptionsType} from '../carousel'
import {DotButton, PrevButton, NextButton} from './EmblaCarouselArrowsDotsButtons'
import ThumbItem from '../Thumb/ThumbItem'
import ThumbItemWithCaption from '../Thumb/ThumbItemWithCaption'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

export type RelatedContentProps = {
  data: any[]
  section: string
  categoryName: string
}

export default function RelatedContent({data, section, categoryName}: RelatedContentProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 'auto',
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

  if(!data) return null

  return (
    <div className="related-content relative md:px-6 md:mx-[-1.5rem]">
      <div className="">
        <div className={'text-[#524941] py-4 block'}>{translation.Playlist}</div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {/* @ts-ignore */}
            {data.map(item => {
              return (
                <div key={item.eid} className="flex-[0_0_40%] md:flex-[0_0_24%] last:pr-4">
                  {/* @ts-ignore */}
                  <ThumbItemWithCaption item={item} sectionName={section} />
                </div>
              )
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
