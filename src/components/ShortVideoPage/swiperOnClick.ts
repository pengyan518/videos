function swiperOnClick(swiper: any) {
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
        console.debug(`getPlayerState: ${value}`)
      if (value < 1 || value === 2) {
        window.youTubePlayer.playVideo()
      } else {
        window.youTubePlayer.pauseVideo()
      }
    })
    // if (window.youTubePlayer.getPlayerState() < 1) {
    //   window.youTubePlayer.playVideo()
    // } else {
    //   window.youTubePlayer.pauseVideo()
    // }
  }
}

export default swiperOnClick
