import React, {useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import config from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ThumbItem from '../../components/templates/ThumbItem'
import Section from '../../components/templates/Section'
import {setCurrentCategory} from './categorySlice'
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

  console.debug(data)
  // if (!currentCategory) return <>loading...</>
  if (!category) return null

  // useEffect(() => {
  //   if (!currentCategory) {
  //    myCurrentSection.current =
  //   }
  // }, [])

  // @ts-ignore
  const categoryViews = config.sectionMap[section].map((item: string | number) => {
    return (
      <>
        <div>{translation[item]}</div>
        <div className="grid grid-cols-4 gap-2">
          {
            // @ts-ignore
            category[item].map(element => {
              const {eid, descriptionLong, title} = element
              return (
                <div key={eid}>
                  {/* @ts-ignore */}
                  <ThumbItem item={element} sectionName={section} />
                  <div>
                    <div>{title}</div>
                    <div dangerouslySetInnerHTML={{__html: descriptionLong}} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
    )
  })

  return (
    <div className="category">
      <Section>
        <div className="">{categoryViews}</div>
        <Link to={`/${config.controller}`}>Back</Link>
      </Section>
    </div>
  )
}
