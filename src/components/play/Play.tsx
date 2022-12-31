import React from 'react'
import {Link} from 'react-router-dom'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import Player from "./Player";


export type PlayProps = {
  data: MainProps
}

export default function Play({data}: PlayProps) {
  const {category} = data

  const section = useUrlParameter('videos')
  const eid = useUrlParameter('play')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')

  const items = Object.values(category).flat()
  const index = items.findIndex(item => item.eid === eid)

  return (
    <div className="play">
      <Player item={items[index]} />
      <Link to="/videos">Back</Link>
    </div>
  )
}
