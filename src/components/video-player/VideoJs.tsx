import React, {forwardRef, useEffect, useRef} from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// import './vim.css'
import useVideoDimensions from '../../hooks/useVideoDimensions'

interface VideoJSProps {
  options: any
  onReady: any
  isShortVideo?: boolean
  // onEnd?: any
}

export const VideoJS = (props: VideoJSProps, ref: any) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const {options, onReady, isShortVideo} = props

  const ratio = useVideoDimensions(videoRef)

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current

      if (!videoElement) return

      const player: {dispose: () => void} = videojs(videoElement, options, () => {
        onReady && onReady(player)
      })

      playerRef.current = null

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      // const player = playerRef.current
      // // @ts-ignore
      // player.autoplay(options.autoplay)
      // // @ts-ignore
      // player.src(options.sources)
    }
  }, [onReady, options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        // @ts-ignore
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div className={`${!isShortVideo && ratio < 1 ? 'md:w-4/12 mx-auto' : ''} ${isShortVideo ? '' : ''}`}>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className={`rounded-xl overflow-hidden video-js bg-black ${isShortVideo ? 'vjs-9-16' : 'vjs-big-play-centered'}`}
        />
      </div>
    </div>
  )
}
const Video = forwardRef(VideoJS)
export default Video
