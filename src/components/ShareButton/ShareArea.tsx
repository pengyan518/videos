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
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

export type SharebuttonProps = {}

export default function ShareArea({}: SharebuttonProps) {
  return (
    <div className="ShareButton flex gap-4">
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      {/* @ts-ignore */}
      <TwitterShareButton
        url={window.location.href}
        // quote={'Dummy text!'}
        // hashtag="#muo"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton url={window.location.href} media={''}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <EmailShareButton url={window.location.href}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  )
}
