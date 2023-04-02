import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Player from '@vimeo/player'
import Vimeo from '../VimeoPlayer'
import useMobileDetect from "../../hooks/useMobileDetect";

// import {ShortsProps} from '../../types'
// import {useAppSelector} from '../../app/hooks'
// import {RootState} from '../../app/store'

export type PlayProps = {
  embeddedVideoVimeo: string
  hideLoading?: () => void
  shareAreaStyle?: any
}

function VideoPlayer({embeddedVideoVimeo, shareAreaStyle}: PlayProps, ref: React.Ref<any> | null) {
  const matches = useMediaQuery('(min-width:768px)')
  const {isMobile} = useMobileDetect()
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



  const myClass = isMobile()? '' : 'w-full'
  const class_warpper = matches ? '' : `flex justify-center h-screen ${!isMobile()?'items-center':''}`

  return (
    <div className={`w-full md:rounded-xl overflow-hidden bg-black ${class_warpper}`}>
      <Vimeo video={embeddedVideoVimeo} className={`justify-center ${myClass}`} controls={false} autoplay loop {...props} />
    </div>
  )
}

const VimeoPlayer = forwardRef(VideoPlayer)

export default VimeoPlayer
