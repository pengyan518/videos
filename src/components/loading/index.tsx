import React from 'react'
import Spinner from '../icons/Spinner'
import {LoadingContainer, LoadingType} from './styles'

// <loading height="100vh" width="100%" color="#1976d2" background="rgba(255,255,255,0.3)" />
const Loading: React.FC<LoadingType> = ({background, color, width, height}) => (
  <LoadingContainer className="absolute top-0" width={width} height={height} color={color} background={background}>
    {/*  @ts-ignore */}
    <Spinner className="Main__Spinner w-12 h-12" viewBox="0 0 100 100" />
  </LoadingContainer>
)

export default Loading
