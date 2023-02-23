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
export const ImgWrapper = styled.div`
  box-shadow: 0 4px 7px rgb(0 0 0 / 25%);
`
export const Gradient = styled.div`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 450ms;
`
