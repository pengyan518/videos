import React, {ReactNode} from 'react'

export type VideoBackgroundProps = {
  src: string
  children: ReactNode
}

export default function VideoBackground({src, children}: VideoBackgroundProps) {
  return (
    <div className="video-background relative w-screen">
      <div className="relative">
        <video className="top-0 left-0 w-full object-cover -z-10" autoPlay loop muted disablePictureInPicture playsInline>
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white/[.06]" />
        <div className="w-screen h-[80px] bottom-0 absolute p-4">{children}</div>
      </div>
    </div>
  )
}
