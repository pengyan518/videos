import styled from 'styled-components'
import bg_sm from '../../assets/images/topArea__bg_sm.jpg'
import {LangProps} from '../../types'
import config from '../../config'

interface FigureProps {
  dataSrc: any
  dataLowSrc: any
}
interface ContainerProps {
  dataMinHeight: number
}
// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
`
export const ContentWrapper = styled.div``

export const HeaderText = styled.div`
  text-shadow: 0 0 5px rgba(0,0,0,90%);
`

export const Header = styled.div<LangProps>`
   br {
    display: none;
    @media (min-width: ${({langCode}) => `${config.cnLang.includes(langCode) ? '1600' : '1400'}`}px) {
      display: block;
    }
  }
`
export const Figure = styled.div<FigureProps>`
  //width: 100%;
  //height: 100%;
  //background-position: 50% 100%;
  //background-size: 100% auto;
  //background-repeat: no-repeat;
  //position: absolute;
  //top: 0;
  //right: 0;
  //bottom: 0;
  //left: 0;
  //z-index: 0;
  &.progressive--not-loaded {
    background-image: ${({dataLowSrc}) => `url(${dataLowSrc})`};
  }
  &.progressive--is-loaded {
    background-image: ${({dataSrc}) => `url(${dataSrc})`};
  }
`
