import styled from 'styled-components'
import {FigureProps} from "../../types";



// eslint-disable-next-line import/prefer-default-export
export const Figure = styled.img`

`
export const Label = styled.div`
  > br {
    display: none;
    @media (min-width: 1400px) {
      display: block;
    }
  }
`
