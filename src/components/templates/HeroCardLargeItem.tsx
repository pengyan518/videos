import React, {useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Section from './Section'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setCurrentCategory} from '../../features/category/categorySlice'
import useHover from '../../hooks/useHover'
import ThumbWrapper from '../Thumb/ThumbWrapper'
import ThumbView from '../Thumb/ThumbView'

export type FeaturedProps = {
  // items: any[]
  sectionTitle?: string
  sectionName: string
  keyName: any
}

export default function HeroCardLargeItem({sectionTitle, sectionName, keyName}: FeaturedProps) {
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
    <div className="w-full">
      <figure className="relative">
        <ThumbWrapper item={hero} sectionName={sectionName} className="">
          {(myItem: any) => (
            <>
              <ThumbView item={myItem} showLargeThumb />
              <div className="w-full flex divide-x divide-white gap-4 text-sm text-white absolute bottom-0 h-[8rem] md:h-[15rem] py-4 px-4 items-end bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)] text-white">
                <div className="font-bold">{hero.title}</div>
                <div className="pl-4" dangerouslySetInnerHTML={{__html: hero.descriptionLong}} />
              </div>
            </>
          )}
        </ThumbWrapper>
      </figure>
    </div>
  )
}
