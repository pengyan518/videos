import React, {ReactNode} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export type VideoBackgroundProps = {
  src?: string
  srcMobile?: string
  poster?: string
  imageFitClass?: string
  childrenContent: ReactNode
  breadcrumb?: ReactNode
}

export default function VideoBackground({src, poster, childrenContent, breadcrumb, imageFitClass='object-cover'}: VideoBackgroundProps) {
  if (!src && !poster) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const matches = useMediaQuery('(min-width:768px)')
  // const videoLink = matches ? src : srcMobile

  return (
    <div className="video-background relative w-screen">
      <div className="relative">
        {src ? (
          <video
            poster={poster}
            className="relative top-0 left-0 w-full object-cover z-0 h-[500px] md:h-auto"
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline>
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div className="relative aspect-w-16 aspect-h-10 md:aspect-w-17 md:aspect-h-4">
            <img src={poster} alt="" className={`top-0 left-0 w-full z-1 ${imageFitClass}`} />
            {breadcrumb}
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-white/[.06] z-10" />
        <div className="w-screen h-full md:h-[18rem] bottom-0 absolute pb-4 grid items-end bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] text-white z-10">
          {childrenContent}
        </div>
      </div>
    </div>
  )
}
