import React, {ReactNode, useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'

import RelatedContent from '../related-content/RelatedContent'

import PlayTemplate from './PlayTemplate'
import NoEidResult from './NoEidResult'
import TopBreadcrumbs from '../TopBreadcrumbs'
import Footer from '../footer/Footer'
import ShortVideoPage from '../ShortVideoPage/ShortVideoPage'
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export type PlayProps = {
  data?: MainProps
}

export default function Play({data}: PlayProps) {
    const {
    content,
    status,
  } = useAppSelector((state: RootState) => state.intro)
  const {category, translation} = content

  const {section, eid} = useParams()

  const itemObject = useRef({content: {title: '', description: ''}, key: '', next: ''})

  const player = useRef<HTMLDivElement | null>(null)

  const breakForOfLoop = (arrayToBreak: {[s: string]: any}) => {
    for (const [key, categoryContent] of Object.entries(arrayToBreak).filter(([k]) => k !== 'itemsEditorsPick' && k !== 'itemsLatest')) {
      // @ts-ignore
      for (const [i, element] of categoryContent.entries()) {
        if (element.eid === eid) {
          itemObject.current.content = element
          itemObject.current.key = key
          itemObject.current.next = i === categoryContent.length - 1 ? categoryContent[0].eid : categoryContent[i + 1].eid
          // break
          return false
        }
      }
    }
    return true
  }

  useEffect(() => {
    if (section !== 'shorts') {
      player.current && player.current.scrollIntoView({block: 'start', inline: 'nearest'})
    } else {
      window.scrollTo(0, 0)
    }
  }, [section, eid])

  if (breakForOfLoop(category))
    return (
      <>
        {/* @ts-ignore */}
        <NoEidResult eid={eid} category={category} section={section} ref={player} />
        <Footer data={content} />
      </>
    )

  if (section === 'shorts') {
    console.debug(itemObject.current.key)
    // @ts-ignore
    return <ShortVideoPage item={itemObject.current.content} data={category[itemObject.current.key]} />
  }

  return (
    <>
      <div className="videosPlay__Breadcrumbs">
        <TopBreadcrumbs showCurrent={itemObject.current.content.title} ref={player} />
      </div>
      {/* @ts-ignore */}
      <PlayTemplate item={itemObject.current.content} next={itemObject.current.next} section={section}>
        {/* @ts-ignore */}
        <RelatedContent data={category[itemObject.current.key].filter(item => item.eid !== eid)} section={section} />
      </PlayTemplate>
      <Footer data={content} />
    </>
  )
}
