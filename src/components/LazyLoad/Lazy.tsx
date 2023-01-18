import {Children, createElement, useRef, ReactNode} from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
  children: ReactNode
  elementType?: string
  className?: string
}

const Lazy = ({threshold = 0, rootMargin = '0%', freezeOnceVisible = true, className = '', elementType = 'div', children}: Args) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const options = {
    rootMargin: rootMargin || '0px',
    threshold: threshold || 0,
    freezeOnceVisible,
  }

  const entry = useIntersectionObserver(ref, options)
  const isVisible = !!entry?.isIntersecting

  // console.log(`Render Section ${props.title}`, {isVisible})

  // const elStyles = {height, width}
  const elClasses = `LazyLoad${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`

  return createElement(
    elementType,
    {
      className: elClasses,
      // style: elStyles,
      ref,
    },
    isVisible && Children.only(children)
  )
}
export default Lazy
