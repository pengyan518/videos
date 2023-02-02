import React, {useEffect, useRef, forwardRef, ReactNode} from 'react'

import {MainProps, VideoItemProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ShareButton from '../ShareButton/ShareButton'

export type PlayProps = {
  item: any
  children: ReactNode
}

const PlayPageTemplate = ({item, children}: PlayProps, ref: React.Ref<any> | undefined) => {
  return (
    <div className="play pb-48">
      <Player item={item} ref={ref} />
      <Section width="w-full md:w-[91%]">
        <div className="md:px-8 pb-16">
          <div className="md:flex md:justify-between pb-4">
            <h2 className="text-2xl font-bold pb-4">{item.title}</h2>
            <ShareButton />
          </div>
          <div className="pb-4">{item.description}</div>
        </div>
        {children}
      </Section>
    </div>
  )
}

const PlayTemplate = forwardRef(PlayPageTemplate)

export default PlayTemplate
