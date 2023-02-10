import React, {useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import config, {sectionMap} from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import Section from '../../components/templates/Section'
import TopInfo from '../../components/templates/TopInfo'
import ThumbItemWithCaption from '../../components/Thumb/ThumbItemWithCaption'
import TopBreadcrumbs from '../../components/TopBreadcrumbs'
import Footer from '../../components/footer/Footer'
import Wrapper from "../../components/templates/Wrapper";
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProps = {
  data: MainProps
  title?: string
  section?: string
}

export default function Category({data}: CategoryProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
  const {currentCategory, status} = useAppSelector((state: RootState) => state.category)
  const dispatch = useAppDispatch()
  const {section} = useParams()
  const myCurrentSection = useRef(null)
  const {category} = data

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
  const categoryViews = sectionMap[section].content.map((item: string) => {
    return (
      <>
        {/* @ts-ignore */}
        {category[item].length > 0 && (
          <div id={item} className="text-[#524941] uppercase py-4 block">
            {translation[item]}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" key={item}>
          {
            // @ts-ignore
            category[item].map(element => {
              const {eid, descriptionLong, title} = element
              return (
                <div key={eid} className="pb-4">
                  {/* @ts-ignore */}
                  <ThumbItemWithCaption item={element} sectionName={section} />
                </div>
              )
            })
          }
        </div>
      </>
    )
  })

  const Inner = () => (
    <div className="innerPaddingAlignHeader">
      <h2 className="text-4xl">{sectionMap[section].title}</h2>
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
      <TopInfo poster={sectionMap[section].poster} childrenDiv={<Inner />} breadcrumb={<BreadcrumbsWrapper />} />
      <div className="overflow-x-hidden xl:w-10/12 2xl:w-[91%] mx-auto">
        <Section xPadding="px-0">
          <div className="innerPaddingAlignHeader">{categoryViews}</div>
          {/* <Link to={`/${config.controller}`}>Back</Link> */}
        </Section>
      </div>
      <Footer data={data} />
    </div>
  )
}
