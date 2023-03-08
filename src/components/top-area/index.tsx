import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import {Container, HeaderText} from './styles'
import Button from '../Button/Button'
import home_bg from '../../assets/images/home_bg.jpg'
import {ContentProps, MainProps} from '../../types'
import TopInfo from '../templates/TopInfo'
import config, {sectionMap} from '../../config'

interface IProps {
  data?: MainProps
}

const TopArea: React.FC<IProps> = () => {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)

  const navigate = useNavigate()

  const handleTaget = () => {
    navigate('about-shen-yun/play/1HWQkr7XsZU')
  }

  const Inner = () => (
    <div className="innerPaddingAlignHeader text-center w-full">
      <div className="inline-block text-center mx-auto pb-10">
        <div className="font-bold text-[1.3rem] md:text-[1.6rem] mb-6 text-shadow-white">{translation['Shen Yun—Who We Are']}</div>
        {/* @ts-ignore */}
        <Button as="a" onClick={handleTaget} filled>
          <ArrowRightIcon sx={{fontSize: 40}} />
          {translation['Watch the Full Video']}
        </Button>
      </div>
    </div>
  )

  return (
    <Container className="w-full md:px-0 grid">
      {/* http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 */}
      <TopInfo
        videoLink={sectionMap['about-shen-yun'].banner}
        videoLinkMobile={sectionMap['about-shen-yun'].bannerMobile}
        poster={home_bg}
        childrenDiv={<Inner />}
      />
    </Container>
  )
}

export default TopArea
