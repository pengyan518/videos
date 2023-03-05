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
import {setShowPopular} from './categorySlice'
import sortPopular from '../../utils/sortPopular'
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
  const {currentCategory, showPopular} = useAppSelector((state: RootState) => state.category)
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
    // @ts-ignore
    const cContent: any[] = [...category[item]]
    const categoryContent: any[] = showPopular ? cContent.sort(sortPopular) : cContent

    return (
      <>
        {/* @ts-ignore */}
        {categoryContent.length > 0 && (
          <div className="grid">
            <div id={item} className="text-[#524941] uppercase pt-8 pb-4">
              {translation[item]}
            </div>
            <div onClick={() => dispatch(setShowPopular(true))}>Popular</div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" key={item}>
          {
            // @ts-ignore
            categoryContent.map(element => {
              const {eid} = element
              return (
                <div key={eid} className="pb-4 md:pb-8">
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
      <Footer data={data} />
    </div>
  )
}
