import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import {MainProps} from '../../types'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import Wrapper from '../templates/Wrapper'
import {ScrollWrapper} from './styles'
import Carousel from '../MyCarousel/Carousel'
import useSortPopular from '../../hooks/useSortPopular'

export type FeaturedProps = {
  data: MainProps
}

export default function EditorsPick({data}: FeaturedProps) {
  const {
    translation,
    category: {itemsEditorsPick},
  } = data
  if (itemsEditorsPick.length === 0) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {handleClick, content} = useSortPopular({categoryData: itemsEditorsPick})
  return (
    <Section className="bg-[#524941]" width="md:w-full" xPadding="px-0" yPadding="pt-8 pb-14">
      <Wrapper className="innerPaddingAlignHeader">
        <div className="uppercase text-white py-4">
          {translation.Featured}
          <div onClick={handleClick(false)}>Recently uploaded</div>
          <div onClick={handleClick(true)}>Popular</div>
        </div>
        {/* <ScrollWrapper className="overflow-x-scroll"> */}
        {/* <div className="flex md:grid md:grid-flow-col md:auto-cols-max gap-4 w-[900px] md:w-auto"> */}
        <Carousel
          className="flex-[0_0_70%] md:flex-[0_0_32.5%] last:mr-4"
          buttonClass="bg-[#3f362f] hover:bg-[#ede4dc] text-[#6c635c] hover:text-[#745c36]">
          {content.map(item => {
            const {id} = item
            return (
              <div className="relative" key={id}>
                <ThumbItem item={item} sectionName="featured" showTitle />
              </div>
            )
          })}
        </Carousel>
        {/* </div> */}
        {/* </ScrollWrapper> */}
      </Wrapper>
    </Section>
  )
}
