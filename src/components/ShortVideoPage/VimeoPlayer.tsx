import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
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
  const matches = useMediaQuery('(min-width:768px)')
  // const {isMuted} = useAppSelector<ShortsProps>((state: RootState) => state.shorts)
  // const [muted, setMuted] = useState(false)
  //
  // useEffect(()=>{
  //   if(isMuted) return setMuted(true)
  //   return setMuted(false)
  // }, [isMuted])
  const props = {
    height: matches ? 'none' : window.innerHeight,
    responsive: matches,
  }

  return (
    <div className="w-full md:rounded-xl overflow-hidden bg-black">
      <Vimeo video={embeddedVideoVimeo} className="justify-center" controls={false} autoplay loop {...props} />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
