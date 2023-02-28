import React, {useCallback, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Section from './Section'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setCurrentCategory} from '../../features/category/categorySlice'
import useHover from '../../hooks/useHover'
import ThumbWrapper from '../Thumb/ThumbWrapper'
import ThumbView from '../Thumb/ThumbView'
import {Gradient, HeroDescription, HeroTitle} from './styles'
import {ChevronRight} from '../icons'
import TimeStamp from './TimeStamp'

export type FeaturedProps = {
  // items: any[]
  sectionTitle?: string
  sectionName: string
  keyName: any
}

export default function HeroCard({sectionTitle, sectionName, keyName}: FeaturedProps) {
  const {
    content: {category, translation},
    status,
  } = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  if (!category[keyName].length) return null

  const [hero, thumb_1, thumb_2, thumb_3] = category[keyName]
  const thumbs = [thumb_1, thumb_2, thumb_3]

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const hoverRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isHover = useHover(hoverRef)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    dispatch(setCurrentCategory([keyName]))
    navigate(`${sectionName}`)
  }, [dispatch, keyName, navigate, sectionName])

  return (
    <Section title={sectionTitle} xPadding="px-0" yPadding="pt-5 pb-10 md:pt-8 md:pb-[4.5rem]">
      <a className="cursor-pointer uppercase py-4 flex items-center gap-2 hover:no-underline" onClick={handleClick}>
        {translation[keyName]}
        {/* @ts-ignore */}
        <ChevronRight className="w4 h-4" />
      </a>
      <div className="grid lg:grid-cols-[1.53fr_1fr] lg:gap-6">
        <div className="w-full pb-4 lg:pb-0">
          <figure className="relative" ref={hoverRef}>
            <ThumbWrapper item={hero} sectionName={sectionName}>
              {(myItem: any) => (
                <>
                  <ThumbView item={myItem} showLargeThumb showIcon parentHover={isHover} />
                  <div className={`w-full flex absolute bottom-0 h-[8rem] md:h-[15rem] px-3 py-2 md:p-4 items-end text-white`}>
                    <Gradient
                      className={`absolute rounded-b-xl w-full h-full left-0 bottom-0 h-[8rem] md:h-[15rem] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] ${
                        isHover ? 'opacity-100' : 'opacity-90'
                      }`}
                    />
                    <div className="flex items-center divide-x rtl:divide-x-reverse text-[1rem] md:text-[1.1rem] divide-white gap-4 text-white relative z-10 w-[86%] transition-all">
                      <HeroTitle className="font-bold md:whitespace-nowrap">{hero.title}</HeroTitle>
                      <HeroDescription
                        isHover={isHover}
                        className={`pl-4 rtl:pl-0 rtl:pr-4 ${isHover ? 'max-h-[40em]' : 'max-h-[30em]'}`}
                        dangerouslySetInnerHTML={{__html: hero.descriptionLong}}
                      />
                    </div>
                    <TimeStamp onDemandLink={myItem.onDemandLink} length={myItem.length} className="m-[0.6rem] md:m-[1.2rem]" />
                  </div>
                </>
              )}
            </ThumbWrapper>
          </figure>
        </div>
        <div className="grid grid-rows-3 gap-3">
          {thumbs
            .filter(item => !!item)
            .map(item => {
              const {descriptionLong, title: itemTitle} = item
              return (
                <div key={item.id}>
                  <ThumbWrapper
                    item={item}
                    sectionName={sectionName}
                    className="grid grid-cols-[1fr_1fr] gap-3 md:gap-4 hover:no-underline">
                    {(myItem: any) => (
                      <>
                        <ThumbView item={myItem} showIcon />
                        <div>
                          <div className="text-[0.8rem] md:text-[1rem] leading-tight line-clamp-2 font-bold mb-2">{itemTitle}</div>
                          <div
                            className="text-[0.8rem] line-clamp-3 md:text-[1rem] leading-[1.3]"
                            dangerouslySetInnerHTML={{__html: descriptionLong}}
                          />
                        </div>
                      </>
                    )}
                  </ThumbWrapper>
                </div>
              )
            })}
        </div>
        <div />
        <div className="cursor-pointer font-bold py-4 flex items-center gap-2 hover:no-underline" onClick={handleClick}>
          <span className="mt-[-2px]">{translation.More}</span>
          {/* @ts-ignore */}
          <ChevronRight className="w4 h-4" />
        </div>
      </div>
    </Section>
  )
}
