import React, {useEffect, useRef, forwardRef, ReactNode} from 'react'
import Button from '@mui/material/Button'
import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ShareButton from '../ShareButton/ShareButton'
import Wrapper from '../templates/Wrapper'
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

interface PlayProps {
  item: any
  next?: string
  section?: string | undefined
  children: ReactNode
}


const style = {
  // position: 'absolute' as const,
  bgcolor: '#c7ae62',
  boxShadow: 0,
  // width: matches ? 425 : '100%',
  fontFamily: 'open-sans-condensed',
  fontSize: 16,
  py: 2,
  px: 8,
}

const PlayPageTemplate = ({item, next, section, children}: PlayProps, ref: React.Ref<any> | undefined) => {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <Wrapper className="pb-10 md:pb-48">
      <div className="innerPaddingAlignHeader">
        {/* @ts-ignore */}
        <Player item={item} ref={ref} next={next} section={section} />
        <Section width="w-full" xPadding="px-0" yPadding="pb-7 pt-6 md:pt-16">
          <div className="pb-8">
            <div className="md:flex md:justify-between pb-4">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold pb-4 md:pb-0">{item.title}</h2>
              <ShareButton>
                <Button variant="contained" sx={style} color="secondary">
                  {translation.Share}
                </Button>
              </ShareButton>
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
