import React, {useCallback, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Section from './Section'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setCurrentCategory} from '../../features/category/categorySlice'
import useHover from '../../hooks/useHover'
import ThumbWrapper from '../Thumb/ThumbWrapper'
import ThumbView from '../Thumb/ThumbView'
import {Gradient} from './styles'

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
    <Section title={sectionTitle}>
      <a className="cursor-pointer uppercase py-4 block hover:no-underline" onClick={handleClick}>
        {translation[keyName]}
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-[1.53fr_1fr] gap-6">
        <div className="w-full">
          <figure className="relative" ref={hoverRef}>
            <ThumbWrapper item={hero} sectionName={sectionName}>
              {(myItem: any) => (
                <>
                  <ThumbView item={myItem} showLargeThumb />
                  <div className={`w-full flex absolute bottom-0 h-[8rem] md:h-[15rem] px-3 py-2 md:p-4 items-end  text-white`}>
                    <Gradient
                      className={`absolute w-full h-full left-0 bottom-0 h-[8rem] md:h-[15rem] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)] ${
                        isHover ? 'opacity-100' : 'opacity-75 '
                      }`}
                    />
                    <div className="flex items-center divide-x divide-white gap-4 text-sm text-white relative z-10">
                      <div className="font-bold whitespace-nowrap">{hero.title}</div>
                      <div className="pl-4 hidden md:block" dangerouslySetInnerHTML={{__html: hero.descriptionLong}} />
                    </div>
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
                          <div className="text-[1rem] leading-tight line-clamp-2 font-bold mb-2">{itemTitle}</div>
                          <div className="line-clamp-3 text-[1rem] leading-[1.3]" dangerouslySetInnerHTML={{__html: descriptionLong}} />
                        </div>
                      </>
                    )}
                  </ThumbWrapper>
                </div>
              )
            })}
        </div>
      </div>
    </Section>
  )
}
