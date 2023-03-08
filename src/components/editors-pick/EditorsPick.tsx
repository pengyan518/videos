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

  const activeClass = 'text-white bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none'
  const inActiveClass = 'text-gray-600 bg-white border border-gray-200 hover:bg-gray-200 focus:outline-none focus:shadow-none'

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {handleClick, content, activeTab} = useSortPopular({categoryData: itemsEditorsPick})
  return (
    <Section className="bg-[#524941]" width="md:w-full" xPadding="px-0" yPadding="pt-8 pb-14">
      <Wrapper className="innerPaddingAlignHeader">
        <div className="py-4 flex justify-between">
          <span className="uppercase text-white">{translation.Featured}</span>
          <div className="flex gap-4">
            <div
              className={`inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium transition duration-200 shadow-sm rounded-md ${
                activeTab === 'latest' ? activeClass : inActiveClass
              }`}
              data-label="latest"
              onClick={handleClick(false)}>
              {translation['Recently uploaded']}
            </div>
            <div
              className={`inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium transition duration-200 shadow-sm rounded-md ${
                activeTab === 'popular' ? activeClass : inActiveClass
              }`}
              data-label="popular"
              onClick={handleClick(true)}>
              {translation.Popular}
            </div>
          </div>
        </div>

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
