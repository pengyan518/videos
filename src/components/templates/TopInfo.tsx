import React, {useEffect, useCallback, useState, ChangeEvent, useRef, ReactNode} from 'react'
import VideoBackground from '../video-background/VideoBackground'

import Wrapper from './Wrapper'

interface IProps {
  children: ReactNode
  videoLink: string
}

const TopInfo: React.FC<IProps> = ({videoLink, children}) => {
  return (
    <div className="">
      <VideoBackground src={videoLink}>
        <Wrapper className="flex justify-end p-2">{children}</Wrapper>
      </VideoBackground>
    </div>
  )
}

export default TopInfo
