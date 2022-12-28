import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import {Container, Figure, ContentWrapper, Header} from './styles'

import useRect from '../../hooks/useRect'
import {ContentProps, MainProps} from '../../types'
import TopInfo from "./TopInfo";

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

  const {size, root, changeSize} = useRect<HTMLDivElement>([])



  return (
    <>
      <div className="">
        <Container className="w-full px-4 md:px-0 grid md:grid-cols-[1.4fr_1fr] mt-16 md:mt-0" dataMinHeight={size.height}>
          <TopInfo data={data} />
        </Container>
      </div>
    </>
  )
}

export default TopArea
