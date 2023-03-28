function swiperOnClick() {
  if (window.vimeoPlayer) {
    window.vimeoPlayer
      .getPaused()
      .then((paused: boolean) => {
        if (paused) {
          window.vimeoPlayer.play()
        } else {
          window.vimeoPlayer.pause()
        }
      })
      .catch((error: any) => {
        // an error occurred
      })
  }
  if (window.videoJsPlayer) {
    if (window.videoJsPlayer.paused()) {
      window.videoJsPlayer.play()
    } else {
      window.videoJsPlayer.pause()
    }
    // console.debug(shortPlayerRef.current)
  }

  if (window.youTubePlayer) {
    window.youTubePlayer.getPlayerState().then((value: number) => {
      if (value < 1 || value === 2) {
        window.youTubePlayer.playVideo()
      } else {
        window.youTubePlayer.pauseVideo()
      }
    })
  }
}

export const onSlideChange = (e: {activeIndex: string | number}) => {
  // console.debug(e.activeIndex)
  // window.vimeoPlayer = null
  window.videoJsPlayer = null
  window.youTubePlayer = null
  console.debug('onSlideChange')
  // return setCurrentItem(data[e.activeIndex])

  // if (!window.vimeoPlayer && !window.videoJsPlayer && !window.youTubePlayer) {
  //   return setCurrentItem(data[e.activeIndex])
  // }
  // return onSlideChange(setCurrentItem, data)
}

export const onSlideChangeTransitionStart =
  (setCurrentItem: (arg0: any) => void, data: {[x: string]: any}) => (e: {activeIndex: string | number}) => {
    // console.debug(e.activeIndex)
    // window.vimeoPlayer = null
    // window.videoJsPlayer = null
    // window.youTubePlayer = null
    console.debug('onSlideChangeTransitionStart')
    return setCurrentItem(data[e.activeIndex])

    // if (!window.vimeoPlayer && !window.videoJsPlayer && !window.youTubePlayer) {
    //   return setCurrentItem(data[e.activeIndex])
    // }
    // return onSlideChange(setCurrentItem, data)
  }

export const onSlideChangeTransitionEnd = () => {
  if (window.vimeoPlayer) {
    window.vimeoPlayer.play()
  }
  if (window.videoJsPlayer) {
    window.videoJsPlayer.play()
    // console.debug(shortPlayerRef.current)
  }

  if (window.youTubePlayer) {
    window.youTubePlayer.playVideo()
  }
}

export const handlePause = () => {
  if (window.vimeoPlayer) {
    window.vimeoPlayer.pause()
  }
  if (window.videoJsPlayer) {
    window.videoJsPlayer.pause()
  }
}
export const handleMute = () => {
  if (window.vimeoPlayer) {
    window.vimeoPlayer.getMuted().then((muted: boolean) => {
      // muted = whether muted is turned on or not
      console.debug(muted)
      if (muted) {
        window.vimeoPlayer.setMuted(false)
      } else {
        window.vimeoPlayer.setMuted(true)
      }
    })
  }
  if (window.videoJsPlayer) {
    if (window.videoJsPlayer.volume() === 0) {
      window.videoJsPlayer.volume(0.5)
    } else {
      window.videoJsPlayer.volume(0)
    }
  }
}
export default swiperOnClick
