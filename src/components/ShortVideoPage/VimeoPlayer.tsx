import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
// import axios from 'axios'
import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'


export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading?: () => void
}

function VideoPlayer({embeddedVideoVimeo}: PlayProps, ref: React.Ref<any> | null) {

  return <Vimeo video={embeddedVideoVimeo} className="justify-center" height={window.innerHeight} controls={false} autoplay loop />
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
