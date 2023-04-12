import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import {MainProps} from '../../types'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import Wrapper from '../templates/Wrapper'
import Carousel from '../MyCarousel/Carousel'
// import useSortPopular from '../../hooks/useSortPopular'
// import FilterButton from "../FilterButton/FilterButton";
// import ThumbItemWithCaption from "../Thumb/ThumbItemWithCaption";
import ShortsThumbItem from '../Thumb/ShortsThumbItem'
import {useAppDispatch} from '../../app/hooks'

import {setCurrentCategory} from '../../features/category/categorySlice'
import {sectionMap} from '../../config'
import {ChevronRight} from '../icons'

export type FeaturedProps = {
  data: MainProps
}

export default function Shorts({data}: FeaturedProps) {
  const {
    translation,
    category: {itemsShorts},
  } = data

  const dispatch = useAppDispatch()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    dispatch(setCurrentCategory([sectionMap.shorts.content]))
    navigate(`shorts`)
  }, [dispatch, navigate])

  if (itemsShorts.length < 2) return null
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const {handleClick, content, activeTab} = useSortPopular({categoryData: itemsShorts})
  return (
    <Section className="bg-white" width="md:w-full" xPadding="px-0" yPadding="pt-20 pb-24" title={translation['Live From Tour']}>
      <Wrapper className="innerPaddingAlignHeader">
        <div className="py-3 block md:flex justify-between items-center">
          <div onClick={handleClick} className="flex cursor-pointer items-center">
            <div className="uppercase mb-0 pr-2">{translation.Shorts}</div>
            {/* @ts-ignore */}
            <ChevronRight className="w4 h-4" />
          </div>
        </div>
        <Carousel
          className="flex-[0_0_30%] md:flex-[0_0_16.32%] last:mr-2"
          gap="gap-[0.35vw]"
          buttonClass="bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white top-[45%] translate-y-[-50%] shadow-[0_5px_5px_-1px_rgba(0,0,0,0.25)]"
          // leftPosition="left-0"
          // rightPosition="right-0"
        >
          {itemsShorts.map(item => {
            const {id} = item
            return (
              <div className="relative" key={id}>
                <ShortsThumbItem item={item} sectionName="shorts" />
              </div>
            )
          })}
        </Carousel>
      </Wrapper>
    </Section>
  )
}
