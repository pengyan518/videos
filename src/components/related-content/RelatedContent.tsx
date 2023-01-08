import React, {ReactNode, useCallback, useEffect, useState} from 'react'
import useEmblaCarousel, {EmblaOptionsType} from '../carousel'
import {DotButton, PrevButton, NextButton} from './EmblaCarouselArrowsDotsButtons'
import ThumbItem from '../templates/ThumbItem'

export type RelatedContentProps = {
  data: any[]
  section: string
}

export default function RelatedContent({data, section}: RelatedContentProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: "auto",
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

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

  return (
    <div className="related-content relative px-8">
      <div className="">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {/* @ts-ignore */}
            {data.map(item => {
              return (
                <div key={item.eid} className="flex-[0_0_24%]">
                  {/* @ts-ignore */}
                  <ThumbItem item={item} sectionName={section} />
                </div>
              )
            })}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  )
}
