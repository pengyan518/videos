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

    &:hover,
    &:focus {
      fill: #ffe4a7;
    }
  }
`

//
// export const WidthBox = styled(Box)`
//   width: ${({ratio}) => `${ratio * 100}%`};
// `
