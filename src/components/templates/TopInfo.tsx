import React, {useEffect, useCallback, useState, ChangeEvent, useRef, ReactNode} from 'react'
import VideoBackground from '../video-background/VideoBackground'
import Wrapper from './Wrapper'

interface IProps {
  children: ReactNode
  videoLink?: string
  poster?: string
}

const TopInfo: React.FC<IProps> = ({videoLink, poster, children}) => {
  return (
    <div className="">
      <VideoBackground poster={poster} src={videoLink}>
        <Wrapper className="flex p-2">{children}</Wrapper>
      </VideoBackground>
    </div>
  )
}

export default TopInfo
