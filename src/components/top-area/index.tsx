import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import {Container, Figure, ContentWrapper, Header} from './styles'
import Button from '../Button/Button'
import home_bg from '../../assets/images/home_bg.jpg'
import {ContentProps, MainProps} from '../../types'
import TopInfo from '../templates/TopInfo'

interface IProps {
  data?: MainProps
}

const TopArea: React.FC<IProps> = () => {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <div className="">
      <Container className="w-full md:px-0 grid md:grid-cols-[1.4fr_1fr]">
        {/* http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 */}
        <TopInfo videoLink="" poster={home_bg}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
            <div className="divide-x">
              <span className="pr-2 font-bold">{translation['Shen Yun—Who We Are']}</span>
              <span className="pl-2">{translation.video_index_shenyun_intro_text}</span>
            </div>
            <div className="flex justify-center">
              {/* @ts-ignore */}
              <Button as="a" href="https://www.shenyuncreations.com/" filled>
                <ArrowRightIcon sx={{fontSize: 40}} />
                {translation['Watch the Full Video']}
              </Button>
            </div>
          </div>
        </TopInfo>
      </Container>
    </div>
  )
}

export default TopArea
