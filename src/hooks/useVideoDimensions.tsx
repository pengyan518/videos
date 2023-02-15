import {RefObject, useCallback, useEffect, useState} from 'react'
import useEventListener from './useEventListener'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

function useVideoDimensions<T extends HTMLVideoElement = HTMLVideoElement>(elementRef: RefObject<T>): number {
  const [value, setValue] = useState({
    width: 0,
    height: 0,
  })

  const handleLoad = useCallback(
    () =>
      setValue({
        // @ts-ignore
        width: elementRef.current.videoWidth,
        // @ts-ignore
        height: elementRef.current.videoHeight,
      }),
    [elementRef]
  )

  useEventListener('loadedmetadata', handleLoad, elementRef)

  useIsomorphicLayoutEffect(() => {
    elementRef && elementRef.current && handleLoad()
  }, [])

  // useEffect(() => {
  //   if (elementRef.current) {
  //     elementRef.current.onloadedmetadata = () => {
  //       // console.log("Video loaded!")
  //       handleLoad()
  //     }
  //   }
  // }, [elementRef, handleLoad])

  return value.width / value.height
}

export default useVideoDimensions
