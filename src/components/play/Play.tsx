import React, {useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ThumbItem from '../templates/ThumbItem'

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
    player.current && player.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})

  })

  return (
    <div className="play">
      <Player item={itemObject.current.content} ref={player} />
      <Section>
        <h2>{itemObject.current.content.title}</h2>
        <div>{itemObject.current.content.description}</div>

        <div className="grid grid-cols-4 gap-4">
          {/* @ts-ignore */}
          {category[itemObject.current.key].map(item => {
            return (
              <div key={item.eid}>
                {/* @ts-ignore */}
                <ThumbItem item={item} sectionName={section} />
              </div>
            )
          })}
        </div>

        <Link to={`/${config.controller}`}>Back</Link>
      </Section>
    </div>
  )
}
