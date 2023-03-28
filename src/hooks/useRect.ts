import {useRef, useEffect, useState} from 'react'
import useResize from './useResize'

const useRect = <T extends HTMLElement>(deps: React.DependencyList = []) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    // top: 0,
  })
  const element = useRef<T>(null)

  const changeSize = () => {

    const rect = element.current?.getBoundingClientRect()
    // const rect = element.current?.clientHeight
    if (rect) {
      setSize({
        width: rect.width,
        height: rect.height,
        // top: rect.top,
      })
    }
  }

  useEffect(() => {
    changeSize()
  }, deps)

  useResize(changeSize)

  return {
    element,
    size,
    // changeSize,
  }
}

export default useRect
