import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'

// import bg from '../../assets/images/topArea__bg.jpg'
import bg_sm from '../../assets/images/topArea__bg_sm.jpg'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import useRect from '../../hooks/useRect'
import {ContentProps, MainProps} from '../../types'

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const MetaArea: React.FC<IProps> = ({data}) => {
  // const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {
    info: {
      ext: {imageIdData, bornPlace, companyDebut, biography, biographyShort},
    },
      translation
  } = data

  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(bg_sm, imageIdData[0].original)

  // @ts-ignore
  return (
    <>
      <div className="mx-auto md:w-[680px] px-4 py-8 md:py-32 font-serif text-base md:text-[1.3rem] leading-6 md:leading-8">
        <div>{translation['Born in']}: {bornPlace}</div>
        <div>{translation['With Shen Yun Since']}: {companyDebut}</div>
        <div dangerouslySetInnerHTML={{__html: biography}} />
      </div>
    </>
  )
}

export default MetaArea
