import React from 'react'

import bg from '../../assets/images/zuopin_banner.jpg'
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
  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(bg_sm, bg)

  return (
    <div className="CreationsBanner">
      <Wrapper>
        <a
          target="_blank"
          href="https://www.shenyuncreations.com/"
          className="aspect-w-16 aspect-h-6 mb-8 md:mb-0 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)] block">
          <Figure
            ref={ref}
            dataLowSrc={bg_sm}
            dataSrc={src}
            className={`grid grid-cols-2 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)] bg-center bg-cover ${
              isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'
            }`}>
            <div>
              <div className="text-center text-white mt-[44%]" dangerouslySetInnerHTML={{__html: translation.creationInfo}} />
              <div className="text-center text-white flex items-center justify-center">
                <span className="mr-2">{translation.Explore}</span>
                <div className="w-8 mt-1">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </Figure>
        </a>
      </Wrapper>
    </div>
  )
}
