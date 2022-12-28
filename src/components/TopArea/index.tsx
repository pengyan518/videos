import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import Logo from './BeigeGrad.svg'
import {Container, Figure, ContentWrapper, Header} from './styles'

// import bg from '../../assets/images/topArea__bg.jpg'
import bg_sm from '../../assets/images/topArea__bg_sm.jpg'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import useRect from '../../hooks/useRect'
import useResize from '../../hooks/useResize'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import {setShowSticky} from '../../features/intro/introSlice'
import config from '../../config'
import useFontSize from '../../hooks/useFontSize'
import StickyHeader from '../StickyHeader'
import useSticky from '../../hooks/useSticky'
import useURLSearchParams from '../../hooks/useURLSearchParams'
import {ContentProps, MainProps} from '../../types'
import TopInfo from "./TopInfo";
import TopBreadcrumbs from "../TopBreadcrumbs";

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const TopArea: React.FC<IProps> = ({data}) => {
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  // const {title, contentExt, langCode} = content

  const {isSticky, element} = useSticky()

  const {size, root, changeSize} = useRect<HTMLDivElement>([])
  const {
    info: {
      ext: {
        imageIdData,
      },
    },
  } = data

  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(imageIdData[0].small, imageIdData[0].original)

  // const stickyPosition = useRef<HTMLDivElement | null>(null)
  // const entry = useIntersectionObserver(root, {})

  // const notShowSticky = !!entry?.isIntersecting
  //
  // const dispatch = useAppDispatch()

  useResize(() => {
    changeSize()
  })


  const city = useURLSearchParams()
  const group = useURLSearchParams('group')

  // @ts-ignore
  return (
    <>
      {(city || group) && isSticky && <StickyHeader isSticky={isSticky} />}
      <div className="">
        <div className="block md:hidden py-4 pl-4"><TopBreadcrumbs /></div>
        <Container className="w-full px-4 md:px-0 grid md:grid-cols-[1.4fr_1fr] mt-16 md:mt-0" dataMinHeight={size.height}>
          <TopInfo data={data} />
          <div className="aspect-w-6 aspect-h-8 mb-8 md:mb-0 shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)]" ref={element}>
            <Figure className={`shadow-[0_35px_60px_-15px_rgba(135,117,100,0.2)] bg-cover ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`} ref={ref} dataSrc={src} dataLowSrc={imageIdData[0].small} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default TopArea
