import React, {useEffect, useRef, forwardRef, ReactNode} from 'react'

import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ShareButton from '../ShareButton/ShareButton'
import Wrapper from '../templates/Wrapper'

export type PlayProps = {
  item: any
  children: ReactNode
}

const PlayPageTemplate = ({item, children}: PlayProps, ref: React.Ref<any> | undefined) => {
  return (
    <Wrapper className="pb-10 md:pb-48">
      <div className="innerPaddingAlignHeader">
        <Player item={item} ref={ref} />
        <Section width="w-full" xPadding="px-0" yPadding="pb-7 pt-6 md:pt-16">
          <div className="pb-8">
            <div className="md:flex md:justify-between pb-4">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold pb-4 md:pb-0">{item.title}</h2>
              <ShareButton />
            </div>
            <div className="pb-4">{item.description}</div>
          </div>
          {children}
        </Section>
      </div>
    </Wrapper>
  )
}

const PlayTemplate = forwardRef(PlayPageTemplate)

export default PlayTemplate
