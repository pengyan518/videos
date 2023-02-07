import styled from 'styled-components'
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
export const BreadcrumbWrapper = styled.div`
  @media (min-width: 1600px) {
    padding-left: var(--page-margin);
    padding-right: var(--page-margin);
  }
`
export const Gradient = styled.div`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 450ms;
`
