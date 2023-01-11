import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import {ContentProps, MainProps} from '../../types'
import VideoBackground from '../video-background/VideoBackground'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import Button from '../Button/Button'
import Wrapper from '../templates/Wrapper'

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const TopInfo: React.FC<IProps> = ({data}) => {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
  const {
    // eslint-disable-next-line no-empty-pattern
    category: {},
  } = data
  // @ts-ignore
  return (
    <div className="">
      <VideoBackground src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
        <Wrapper>
          <div className="flex">
            <div>
              Shen Yun—Who We Are | "Shen Yun"—for Chinese, the words evoke a sense of wonder, magic, and the divine. To audiences who have
              seen it, they recall the experience of a lifetime....
            </div>
            {/* @ts-ignore */}
            <Button as="a" href="#" filled>
              <ArrowRightIcon sx={{fontSize: 40}} />
              {translation['Watch the Full Video']}
            </Button>
          </div>
        </Wrapper>
      </VideoBackground>
    </div>
  )
}

export default TopInfo
