import React, {useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {MainProps} from '../../types'
import Section from './Section'
import ThumbItem from './ThumbItem'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setCurrentCategory} from '../../features/category/categorySlice'
import dashed from '../../utils/dashed'

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
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    dispatch(setCurrentCategory([keyName]))
    navigate(`${sectionName}`)
  }, [dispatch, keyName, navigate, sectionName])

  return (
    <Section title={sectionTitle}>
      <a className="cursor-pointer" onClick={handleClick}>
        {translation[keyName]}
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="w-full">
          <figure className="relative">
            <ThumbItem item={hero} sectionName={sectionName} />
            <div className="flex divide-x divide-white gap-4 text-white absolute bottom-0">
              <div>{hero.title}</div>
              <div className="pl-4" dangerouslySetInnerHTML={{__html: hero.descriptionLong}} />
            </div>
          </figure>
        </div>
        <div className="grid grid-rows-3 gap-3">
          {thumbs
            .filter(item => !!item)
            .map(item => {
              const {descriptionLong, title: itemTitle} = item
              return (
                <div className="" key={item.id}>
                  <div className="grid grid-cols-[1fr_1fr] gap-8">
                    <ThumbItem item={item} sectionName={sectionName} />
                    <div>
                      <div>{itemTitle}</div>
                      <div className="line-clamp-3" dangerouslySetInnerHTML={{__html: descriptionLong}} />
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Section>
  )
}
