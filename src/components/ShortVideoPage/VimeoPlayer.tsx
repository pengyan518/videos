import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
// import axios from 'axios'
import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'


export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading: () => void
}

function VideoPlayer({embeddedVideoVimeo, hideLoading}: PlayProps, ref: React.Ref<any> | null) {

  return <Vimeo video={embeddedVideoVimeo} className="w-full" height={1300} onReady={hideLoading} autoplay />
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
