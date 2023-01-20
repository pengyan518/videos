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

export type PlayProps = {
  data: MainProps
}

export default function Play({data}: PlayProps) {
  const {category} = data

  const {section, eid} = useParams()

  const itemObject = useRef({content: {title: '', description: ''}, key: ''})

  // console.debug(params)

  // const section = useUrlParameter('videos')
  // const eid = useUrlParameter('play')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')

  // const items = Object.values(category)
  //   .flat()
  //   .filter(item => item !== null)
  // const index = items.findIndex(item => item.eid === eid)
  // const item = items[index]
  const player = useRef(null)

  for (const [key, categoryContent] of Object.entries(category)) {
    for (const element of categoryContent) {
      if (element.eid === eid) {
        itemObject.current.content = element
        itemObject.current.key = key
        break
      }
    }
  }


  useEffect(() => {
    // @ts-ignore
    player.current && player.current.scrollIntoView({block: 'start', inline: 'nearest'})
  })

  return (
    <div className="play pb-48">
      <Player item={itemObject.current.content} ref={player} />
      <Section width="w-full md:w-[91%]">
        <div className="md:px-8 pb-16">
          <div className="md:flex md:justify-between pb-4">
            <h2 className="text-2xl font-bold pb-4">{itemObject.current.content.title}</h2>
            <ShareButton />
          </div>
          <div className="pb-4">{itemObject.current.content.description}</div>
        </div>
        {/* @ts-ignore */}
        <RelatedContent data={category[itemObject.current.key]} section={section} categoryName={itemObject.current.key} />

        {/* <Link to={`/${config.controller}`}>Back</Link> */}
      </Section>
    </div>
  )
}
