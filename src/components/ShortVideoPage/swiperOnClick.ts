import {SetStateAction, useCallback} from 'react'


const onSlideChange = (e: {activeIndex: string | number}) => {
  // console.debug(e.activeIndex)
  // window.vimeoPlayer = null
  window.videoJsPlayer = null
  window.youTubePlayer = null
}

export default onSlideChange


