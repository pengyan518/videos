import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import axios from 'axios'
import {Skeleton} from '@mui/material'

import Vimeo from '../VimeoPlayer'
import VideoFrame from '../video-player/VideoFrame'
import YoutubeEmbed from '../youtube-embed/youtube-embed'
import {useAppDispatch} from '../../app/hooks'
import {setVimeoInstance} from '../ShortVideoPage/shortsSlice'
import {controller} from '../../config'
// import {PlayerWrapper} from './styles'
// import Loading from '../loading'
// import config from "../../config";

export type PlayProps = {
  item: any
  next?: string
  section?: string | undefined
}

function Player({item, next, section}: PlayProps, ref: React.Ref<any> | null) {
  const [isLoading, setIsLoading] = useState(true)
  const {videoLink, imageForVideo, eid} = item

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  // const loading = useRef<HTMLDivElement | null>(null)
  const onReady = useCallback(
    (player: any) => {
      dispatch(setVimeoInstance(player))
      // if (loading.current) loading.current.style.display = 'none'
      setIsLoading(false)
    },
    [dispatch]
  )

  const onEnd = useCallback(() => {
    // console.debug('onEnded')
    if (next) {
      setTimeout(() => navigate(`/${section}/play/${next}`), 3000)
    }
  }, [navigate, next, section])

  // useEffect(() => {
  //   axios.get(`${config.updateCounter}${eid}`)
  //   console.debug(eid)
  // }, [eid])

  return (
    <div className="">
      <div>
        <div ref={ref}>
          {/* @ts-ignore */}
          <VideoFrame
            poster={imageForVideo?.original ?? ''}
            videoSrc={videoLink}
            options={{
              autoplay: true,
              onEnd,
            }}
          />
        </div>
      </div>
    </div>
  )
}

const MyPlayer = forwardRef(Player)

export default MyPlayer
