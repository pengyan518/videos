import React, {useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import RelatedContent from '../related-content/RelatedContent'
import ShareButton from '../ShareButton/ShareButton'
import PlayTemplate from './PlayTemplate'
import NoEidResult from './NoEidResult'
import TopBreadcrumbs from '../TopBreadcrumbs'
import Footer from '../footer/Footer'
import Wrapper from '../templates/Wrapper'

export type PlayProps = {
  data: MainProps
}

export default function Play({data}: PlayProps) {
  const {category} = data

  const {section, eid} = useParams()

  const itemObject = useRef({content: {title: '', description: ''}, key: ''})

  const player = useRef(null)

  const breakForOfLoop = (arrayToBreak: {[s: string]: unknown} | ArrayLike<unknown>) => {
    for (const [key, categoryContent] of Object.entries(arrayToBreak)) {
      // @ts-ignore
      for (const element of categoryContent) {
        if (element.eid === eid) {
          itemObject.current.content = element
          itemObject.current.key = key
          // break
          return false
        }
      }
    }
    return true
  }

  useEffect(() => {
    // @ts-ignore
    player.current && player.current.scrollIntoView({block: 'start', inline: 'nearest'})
  })

  if (breakForOfLoop(category))
    return (
      <>
        {/* @ts-ignore */}
        <NoEidResult eid={eid} category={category} section={section} ref={player} />
        <Footer data={data} />
      </>
    )

  return (
    <>
      <div className="videosPlay__Breadcrumbs">
        <TopBreadcrumbs showCurrent={itemObject.current.content.title} ref={player} />
      </div>
      <PlayTemplate item={itemObject.current.content}>
        {/* @ts-ignore */}
        <RelatedContent data={category[itemObject.current.key]} section={section} categoryName={itemObject.current.key} />
      </PlayTemplate>
      <Footer data={data} />
    </>
  )
}
