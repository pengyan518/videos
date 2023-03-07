import {useCallback, useEffect, useMemo, useState} from 'react'
import useEventListener from './useEventListener'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import sortPopular from '../utils/sortPopular'
import {CategoryProps} from '../types'

// import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'

interface SortPopularProps {
  // category: CategoryProps
  // item: keyof CategoryProps
  categoryData: any[]
}

interface SortPopularResultProps {
  handleClick: any
  content: any[]
  activeTab: string
  // active: boolean
}

function useSortPopular({categoryData}: SortPopularProps): SortPopularResultProps {
  const cContent: any[] = useMemo(() => [...categoryData], [categoryData])
  const popularContent: any[] = useMemo(() => [...[...cContent].sort(sortPopular)], [cContent])
  const [popularView, setShowPopularView] = useState<boolean>(false)
  const [content, setContent] = useState(cContent)
  const [activeTab, setActiveTab] = useState('latest')
  const [active, setActive] = useState(false)

  const handleClick = useCallback(
    (show: boolean | ((prevState: boolean) => boolean)) =>
      ({target}:{target:any}) => {
        const label = target.getAttribute('data-label')
        setShowPopularView(show)
        setActiveTab(label)
        // if (activeTab === label) {
        //   setActive(true)
        // } else {
        //   setActive(false)
        // }
      },
    [activeTab]
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
    activeTab,
  }
}

export default useSortPopular
