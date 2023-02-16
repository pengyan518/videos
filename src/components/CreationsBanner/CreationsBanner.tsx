import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import bg from '../../assets/images/zuopin_banner.jpg'
import bgMobile from '../../assets/images/SYZP_mobile_en.jpg'
import bg_sm from '../../assets/images/zuopin_banner_lower.jpg'
import {Figure} from './styles'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import Wrapper from '../templates/Wrapper'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ArrowRight from '../icons/ArrowRight'

// export type CreationsbannerProps = {}

export default function CreationsBanner() {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
  const matches = useMediaQuery('(min-width:768px)')
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(bg_sm, matches ? bg : bgMobile)

  return (
    <div className="CreationsBanner bg-white py-20">
      <Wrapper className="my-4">
        <div className="innerPaddingAlignHeader">
          <a
            target="_blank"
            href="https://www.shenyuncreations.com/"
            className="aspect-w-8 aspect-h-11 md:aspect-w-16 md:aspect-h-6 mb-8 md:mb-0 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)] block overflow-hidden rounded-xl">
            <Figure
              ref={ref}
              dataLowSrc={bg_sm}
              dataSrc={src}
              className={`grid items-end md:grid-cols-[1.4fr_1fr] shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)] bg-center bg-cover overflow-hidden rounded-xl ${
                isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'
              }`}>
              <div className="pb-[2rem] md:pb-[4vw]">
                <div className="text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] text-center text-white open-sans-c uppercase pt-4 font-bold" dangerouslySetInnerHTML={{__html: translation['Shen Yun’s Video Platform']}} />
                <div className="text-[0.9rem] xl:text-[1.2rem] 2xl:text-[1.5rem] text-center text-white open-sans-c uppercase text-[0.9rem] xl:text-[1.2rem] mt-4 mb-3 md:mb-5" dangerouslySetInnerHTML={{__html: translation.creationInfo}} />
                <div className="xl:text-[1.2rem] 2xl:text-[1.5rem] text-center flex items-center justify-center text-[#fcf1a9] hover:text-[#f1cd3c] transition-colors">
                  <span className="mr-2 font-bold">{translation.Explore}</span>
                  <div className="w-8 mt-1">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Figure>
          </a>
        </div>
      </Wrapper>
    </div>
  )
}
