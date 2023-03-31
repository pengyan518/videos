import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
// import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'
// import {ShortsProps} from '../../types'
// import {useAppSelector} from '../../app/hooks'
// import {RootState} from '../../app/store'

export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading?: () => void
}

function VideoPlayer({embeddedVideoVimeo}: PlayProps, ref: React.Ref<any> | null) {
  // const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  // const [muted, setMuted] = useState(false)
  //
  // useEffect(()=>{
  //   if(isMuted) return setMuted(true)
  //   return setMuted(false)
  // }, [isMuted])

  return (
    <div className="w-full rounded-xl overflow-hidden bg-black">
      <Vimeo video={embeddedVideoVimeo} className="justify-center" controls={false} autoplay loop responsive />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
