import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
// import axios from 'axios'
import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'
import useRect from '../../hooks/useRect'
// import useResize from '../../hooks/useResize'

export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading?: () => void
}

function VideoPlayer({embeddedVideoVimeo}: PlayProps, ref: React.Ref<any> | null) {
  const {size, element} = useRect<HTMLDivElement>([window.innerWidth])

  console.debug(size)

  useImperativeHandle(ref, () => ({videoHeight: size.height}), [window.innerWidth])

  // useEffect(() => {
  //   if (window.vimeoPlayer) {
  //     window.vimeoPlayer
  //       .getVideoHeight()
  //       .then((height: number) => {
  //         console.debug(`height: ${height}`)
  //       })
  //       .catch((error: string) => {
  //         // an error occurred
  //       })
  //   }
  // }, [window.innerWidth])

  return (
    <div ref={element}>
      <Vimeo video={embeddedVideoVimeo} className="justify-center" controls={false} autoplay loop responsive />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
