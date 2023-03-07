import {useCallback, useEffect, useMemo, useState} from 'react'
import useEventListener from './useEventListener'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import sortPopular from '../utils/sortPopular'
import {CategoryProps} from "../types";

// import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'

interface SortPopularProps {
  // category: CategoryProps
  // item: keyof CategoryProps
  categoryData: any[]
}

interface SortPopularResultProps {
  handleClick: any
  content: any[]
}

function useSortPopular({categoryData}: SortPopularProps): SortPopularResultProps {
  const cContent: any[] = useMemo(() => [...categoryData], [categoryData])
  const popularContent: any[] = useMemo(() => [...[...cContent].sort(sortPopular)], [cContent])
  const [popularView, setShowPopularView] = useState<boolean>(false)
  const [content, setContent] = useState(cContent)
  const handleClick = useCallback(
    (show: boolean | ((prevState: boolean) => boolean)) => () => {
      return setShowPopularView(show)
    },
    []
  )

  useEffect(() => {
    if (popularView) {
      setContent(popularContent)
    } else {
      setContent(cContent)
    }
  }, [cContent, popularContent, popularView])

  return {
    handleClick,
    content,
  }
}

export default useSortPopular
