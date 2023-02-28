import styled, {css} from 'styled-components'

interface FigureProps {
  dataSrc: any
  dataLowSrc: any
}
interface DescriptionProps {
  isHover: boolean
}
// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div``
export const Gradient = styled.div`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 450ms;
`
export const HeroDescription = styled.div<DescriptionProps>`
  line-height: 1.2em;
  transition: -webkit-line-clamp 0.3s cubic-bezier(.08,.82,.17,1);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({isHover}) => (isHover ? 40 : 1)};
  
      ${({isHover}) =>
      isHover
        ? css`
            
          `
        : css`
            
          `}
  
  @media (min-width: 768px) {
    display: -webkit-box;
    //display: block;
  }
  @media (max-width: 767px) {
    display: none !important;
  }
`
export const HeroTitle = styled.div`
  @media (max-width: 767px) {
    width: 85%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`
// export const Figure = styled.div<FigureProps>`
//   &.progressive--not-loaded {
//     background-image: ${({dataLowSrc}) => `url(${dataLowSrc})`};
//   }
//   &.progressive--is-loaded {
//     background-image: ${({dataSrc}) => `url(${dataSrc})`};
//   }
// `
