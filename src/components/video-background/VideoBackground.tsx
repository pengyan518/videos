import React, {ReactNode} from 'react'

export type VideoBackgroundProps = {
  src?: string
  poster?: string
  childrenContent: ReactNode
  breadcrumb?: ReactNode
}

export default function VideoBackground({src, poster, childrenContent, breadcrumb}: VideoBackgroundProps) {
  if (!src && !poster) return null
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
          <div className="relative aspect-w-16 aspect-h-10 md:aspect-h-5">
            <img src={poster} alt="" className="top-0 left-0 w-full object-cover z-1" />
            {breadcrumb}
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-white/[.06] z-10" />
        <div className="w-screen h-[18rem] bottom-0 absolute pb-4 grid items-end bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] text-white z-10">
          {childrenContent}
        </div>
      </div>
    </div>
  )
}
