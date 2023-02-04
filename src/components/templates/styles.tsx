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
export const Gradient = styled.div`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 450ms;
`

// export const Header = styled.div<LangProps>`
//    br {
//     display: none;
//     @media (min-width: ${({langCode}) => `${config.cnLang.includes(langCode) ? '1600' : '1400'}`}px) {
//       display: block;
//     }
//   }
// `
// export const Figure = styled.div<FigureProps>`
//   &.progressive--not-loaded {
//     background-image: ${({dataLowSrc}) => `url(${dataLowSrc})`};
//   }
//   &.progressive--is-loaded {
//     background-image: ${({dataSrc}) => `url(${dataSrc})`};
//   }
// `
