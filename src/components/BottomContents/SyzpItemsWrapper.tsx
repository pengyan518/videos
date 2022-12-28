import React, {forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useRef} from 'react'
import useRefs from '../../hooks/useRefs'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import {MainProps} from '../../types'

interface ItemRef {
  top: number
}

interface WrapperProps {
  children?: ReactNode
  data: MainProps
}

const SyzpItemsWrapper = (props: WrapperProps) => {
  const noValidContent = useRef(false)
  const {
    info: {
      title,
      ext: {miscData, position},
    },
  } = props.data

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {freezeOnceVisible: true})
  const isVisible = !!entry?.isIntersecting

  // const myStyle = {
  //   flex: '0 1 33%',
  // }

  const items = React.Children.map(props.children, (child: any) => {
    console.debug(`React.Children.count: ${React.Children.count(child)}`)
    // if(React.Children.count(child)===0) noValidContent.current = true
    if (!React.isValidElement(child)) {
      return null
    }

    return React.cloneElement(child as React.ReactElement<any>, {isVisible})
  })

  if (noValidContent.current) return null

  return (
    <div className="grid grid-cols-2 gap-3.5 justify-center" ref={ref}>
      {items}
    </div>
  )
}

export default SyzpItemsWrapper
