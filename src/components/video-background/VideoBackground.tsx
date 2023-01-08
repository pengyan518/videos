import React, {ReactNode} from 'react'

export type VideoBackgroundProps = {
  src: string
  children: ReactNode
}

export default function VideoBackground({src, children}: VideoBackgroundProps) {
  return (
    <div className="video-background relative w-screen overflow-hidden">
      <div className="relative">
        <video className="top-0 left-0 w-full object-cover -z-10" autoPlay loop muted disablePictureInPicture playsInline>
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white/[.06]" />
        <div className="w-screen h-[50px] top-0 relative translate-y-[-100%]">{children}</div>
      </div>
    </div>
  )
}
