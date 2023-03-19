import {useEffect, useState, useRef, useCallback} from 'react'
import debounce from '../utils/debounce'

function useScrollEvent() {
  const [downScrollDirection, setDownScrollDirection] = useState<boolean>(true)
  // const element = useRef(null)

  // const debouncedValue = useDebounce<string>(value, 500)
  let lastScrollTop = 0

  const handleScroll: (fn?: any) => void = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      setDownScrollDirection(true)
    } else if (st < lastScrollTop) {
      // upscroll code
      setDownScrollDirection(false)
      // window.swiper.slidePrev()
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  }, [])

  useEffect(() => {
    // const swiperWrapper = document.querySelector('.swiper-wrapper')
    window.addEventListener('scroll', debounce(handleScroll, 20))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return {downScrollDirection}
}

export default useScrollEvent
