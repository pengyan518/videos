import React from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import config from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ThumbItem from '../../components/templates/ThumbItem'
import Section from '../../components/templates/Section'
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProps = {
  data: MainProps
  title?: string
  section?: string
}

export default function Category({data}: CategoryProps) {
  const {currentCategory, status} = useAppSelector((state: RootState) => state.category)
  const dispatch = useAppDispatch()
  const {section} = useParams()

  // const section = useUrlParameter('videos')
  // const eid = useUrlParameter('play')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  console.debug(data)
  if (!currentCategory) return null
  const categoryViews = currentCategory.map(item => {
    const {eid} = item
    return (
      <div key={eid}>
        {/* @ts-ignore */}
        <ThumbItem item={item} sectionName={section} />
      </div>
    )
  })
  return (
    <div className="category">
      <Section>
        <div className="grid grid-cols-4 gap-2">{categoryViews}</div>
        <Link to={`/${config.controller}`}>Back</Link>
      </Section>
    </div>
  )
}
