import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import {MainProps} from '../../types'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import Wrapper from '../templates/Wrapper'
import Carousel from '../MyCarousel/Carousel'
// import useSortPopular from '../../hooks/useSortPopular'
// import FilterButton from "../FilterButton/FilterButton";
// import ThumbItemWithCaption from "../Thumb/ThumbItemWithCaption";
import ShortsThumbItem from "../Thumb/ShortsThumbItem";

export type FeaturedProps = {
  data: MainProps
}

export default function Shorts({data}: FeaturedProps) {
  const {
    translation,
    category: {itemsShorts},
  } = data
  if (itemsShorts.length < 2) return null


  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const {handleClick, content, activeTab} = useSortPopular({categoryData: itemsShorts})
  return (
    <Section className="bg-white" width="md:w-full" xPadding="px-0" yPadding="pt-20 pb-24" title={'Live From Tour'}>
      <Wrapper className="innerPaddingAlignHeader">
        <div className="py-3 block md:flex justify-between items-center">
          <div className="uppercase mb-2 md:mb-0">{translation.Shorts}</div>
        </div>

        <Carousel
          className="flex-[0_0_30%] md:flex-[0_0_16.4%] last:mr-4"
          gap="gap-1"
          buttonClass="bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white top-[45%] translate-y-[-50%] shadow-lg"
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
