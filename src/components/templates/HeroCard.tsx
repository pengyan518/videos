import React, {useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {MainProps} from '../../types'
import Section from './Section'
import ThumbItem from './ThumbItem'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setCurrentCategory} from "../../features/category/categorySlice";

export type FeaturedProps = {
  items: any[]
  sectionTitle?: string
  title: string
  sectionName: string
}

export default function HeroCard({items, sectionTitle, title, sectionName}: FeaturedProps) {
  const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  if (!items.length) return null

  const [hero, thumb_1, thumb_2, thumb_3] = items
  const thumbs = [thumb_1, thumb_2, thumb_3]

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    dispatch(setCurrentCategory(items))
    navigate(`${sectionName}`)
  }, [dispatch, items, navigate, sectionName])

  return (
    <Section title={sectionTitle}>
      <a className="cursor-pointer" onClick={handleClick}>{title}</a>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 col-span-2">
          <figure className="relative">
            <ThumbItem item={hero} sectionName={sectionName} />
            <div className="flex divide-x divide-white gap-4 text-white absolute bottom-0">
              <div>{hero.title}</div>
              <div className="pl-4" dangerouslySetInnerHTML={{__html: hero.descriptionLong}} />
            </div>
          </figure>
        </div>

        {thumbs
          .filter(item => !!item)
          .map(item => {
            const {descriptionLong, title: itemTitle} = item
            return (
              <div className="row-span-1" key={item.id}>
                <div className="grid grid-cols-2 gap-4">
                  <ThumbItem item={item} sectionName={sectionName} />
                  <div>
                    <div>{itemTitle}</div>
                    <div dangerouslySetInnerHTML={{__html: descriptionLong}} />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </Section>
  )
}
