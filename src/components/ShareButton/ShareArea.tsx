import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramShareButton,
  TumblrShareButton,
  XIcon,
  TwitterShareButton,
} from 'react-share'
import InstagramIcon from '../icons/InstagramIcon'

export type SharebuttonProps = {}

export default function ShareArea({}: SharebuttonProps) {
  const handleInstagramShare = ()=>{
    return window.open('https://www.instagram.com/shenyunperformingarts/', 'myWindow', 'width=630,height=520')
  }
  return (
    <div className="ShareButton flex gap-4">
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      {/* @ts-ignore */}
      <TwitterShareButton
        url={window.location.href}
      >
        <XIcon size={32} round />
      </TwitterShareButton>
      <a className='cursor-pointer' onClick={handleInstagramShare}>
        <InstagramIcon />
      </a>
      <EmailShareButton url={window.location.href}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  )
}
