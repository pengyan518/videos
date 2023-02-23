import React, {useEffect, useCallback, useState, ChangeEvent, useRef, ReactNode} from 'react'
import VideoBackground from '../video-background/VideoBackground'
import Wrapper from './Wrapper'

interface IProps {
  childrenDiv: ReactNode
  videoLink?: string
  videoLinkMobile?: string
  poster?: string
  className?: string
  breadcrumb?: ReactNode
}

const TopInfo: React.FC<IProps> = ({videoLink, videoLinkMobile, poster, className,breadcrumb, childrenDiv}) => {
  return (
    <div className={className}>
      <VideoBackground
        poster={poster}
        src={videoLink}
        srcMobile={videoLinkMobile}
        breadcrumb={breadcrumb}
        childrenContent={<Wrapper className="p-2 relative">{childrenDiv}</Wrapper>}
      />
    </div>
  )
}

export default TopInfo
