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

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <Vimeo video={embeddedVideoVimeo} className="justify-center" controls={false} autoplay loop responsive />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
