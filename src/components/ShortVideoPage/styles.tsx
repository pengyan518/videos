import styled, {css} from 'styled-components'
import {LangProps} from '../../types'

export const IconsGroup = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`
export const Item = styled.a<LangProps>`
  display: inline-block;
  fill: #fff;

  ${({langCode}) =>
    langCode === 'il'
      ? css`
          &:first-child {
            margin-right: 0;
          }
        `
      : css`
          &:last-child {
            margin-right: 0;
          }
        `}

  svg {
    transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`
interface GradientProps {
  dataHeight: string
}
export const Gradient = styled.div<GradientProps>`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 450ms;
  height: ${({dataHeight}) => {
    // console.debug(dataHeight)
    return `calc(${dataHeight} + 180px)`
  }};
`

//
export const GJW_Btn = styled.a`
    transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  
  &:hover,
  &:focus {
    border-color: #8b7955;

    span {
      color: #8b7955;
    }
  }
`
