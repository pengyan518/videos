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
  // const {size, element, changeSize} = useRect<HTMLDivElement>([window.innerWidth])

  // console.debug(size)
  // const element = useRef<HTMLDivElement>(null)
  //
  // const getPlayerSize = useCallback(()=>{
  //   // @ts-ignore
  //   // eslint-disable-next-line no-unsafe-optional-chaining
  //   return element.current?element.current?.getBoundingClientRect().width*1.777:0
  // },[])
  //
  // useImperativeHandle(ref, () => ({videoHeight: getPlayerSize()}), [])

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
    <div className="w-full">
      <Vimeo video={embeddedVideoVimeo} className="justify-center" controls={false} autoplay loop responsive />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
