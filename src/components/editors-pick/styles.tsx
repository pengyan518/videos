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
export const ScrollWrapper = styled.div`
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`
