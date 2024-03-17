import React, {useEffect, useRef} from 'react'
import {Link, useParams, Outlet} from 'react-router-dom'

import {MainProps} from '../../types'
import config, {sectionMap} from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import Section from '../../components/templates/Section'
import TopInfo from '../../components/templates/TopInfo'
import ThumbItemWithCaption from '../../components/Thumb/ThumbItemWithCaption'
import TopBreadcrumbs from '../../components/TopBreadcrumbs'
import Footer from '../../components/footer/Footer'
import {setShowPopular} from './categorySlice'
import sortPopular from '../../utils/sortPopular'
import CategorySection from './CategorySection'
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProps = {
  data?: MainProps
  title?: string
  section?: string
}

export default function Category({data}: CategoryProps) {
  const {
    content,
  } = useAppSelector((state: RootState) => state.intro)
  const {currentCategory, showPopular} = useAppSelector((state: RootState) => state.category)
  const dispatch = useAppDispatch()
  const {section} = useParams()
  const myCurrentSection = useRef(null)
  const {category, translation} = content

  // console.debug(data)
  // if (!currentCategory) return <>loading...</>
  if (!category) return null
  if (!section) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (currentCategory) {
      const element = document.getElementById(currentCategory[0])
      element && element.scrollIntoView({block: 'start', inline: 'nearest'})
    }
  }, [currentCategory])



  // @ts-ignore
  const categoryViews = sectionMap[section].content.map((item: any) => <CategorySection item={item} data={category[item]} key={item} />)

  const Inner = () => (
    <div className="innerPaddingAlignHeader">
      <h2 className="text-4xl">{translation[sectionMap[section].title==='Reviews'?'From the Audience':sectionMap[section].title]}</h2>
    </div>
  )
  const BreadcrumbsWrapper = () => (
    <div className="z-[11]">
      <TopBreadcrumbs textColor="white" />
    </div>
  )
  // @ts-ignore
  return (
    <div className="overflow-x-hidden">
      <TopInfo
        poster={sectionMap[section].poster}
        childrenDiv={<Inner />}
        breadcrumb={<BreadcrumbsWrapper />}
        className={`videosCategory__${section}`}
      />
      <div className="overflow-x-hidden xl:w-10/12 2xl:w-[91%] mx-auto">
        <Section xPadding="px-0">
          <div className="innerPaddingAlignHeader">{categoryViews}</div>
        </Section>
      </div>
      <Footer data={content} />
      <Outlet />
    </div>
  )
}
