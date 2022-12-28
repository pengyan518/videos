import React, {forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useRef} from 'react'
import useRefs from '../../hooks/useRefs'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

interface ItemRef {
  top: number
}

interface WrapperProps {
  children?: ReactNode
}

const ItemWrapper = (props: WrapperProps) => {
  const [refs, setRefs] = useRefs<ItemRef>()
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {freezeOnceVisible: true})
  const isVisible = !!entry?.isIntersecting

  const myStyle = {
    flex: '0 1 33%',
  }


  const items = React.Children.map(props.children, (child: any, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {style: myStyle, isVisible})
  })

  return (
    <div className="grid grid-cols-2 md:flex gap-3.5 justify-center" ref={ref}>
      {items}
    </div>
  )
}

export default ItemWrapper
