import React, {useEffect, useCallback, useState, ChangeEvent, useRef, ReactNode} from 'react'
import VideoBackground from '../video-background/VideoBackground'
import Wrapper from './Wrapper'

interface IProps {
  childrenDiv: ReactNode
  videoLink?: string
  poster?: string
  breadcrumb?: ReactNode
}

const TopInfo: React.FC<IProps> = ({videoLink, poster, breadcrumb, childrenDiv}) => {
  return (
    <div className="">
      <VideoBackground
        poster={poster}
        src={videoLink}
        breadcrumb={breadcrumb}
        childrenContent={<Wrapper className="p-2">{childrenDiv}</Wrapper>}
      />
    </div>
  )
}

export default TopInfo
