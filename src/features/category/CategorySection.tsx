import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
import config, {sectionMap} from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ThumbItemWithCaption from '../../components/Thumb/ThumbItemWithCaption'
import sortPopular from '../../utils/sortPopular'
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProps = {
  item: string
  category: any
}

export default function CategorySection({item, category}: CategoryProps) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
  const cContent: any[] = useMemo(()=>([...category[item]]), [category, item])
  const popularContent: any[] = useMemo(()=>([...[...cContent].sort(sortPopular)]), [cContent])
  const [popularView, setShowPopularView] = useState<boolean>(false)
  const [content, setContent] = useState(cContent)

  const {section} = useParams()

  const handleClick = useCallback((show: boolean | ((prevState: boolean) => boolean)) =>()=> {
    return setShowPopularView(show)
  }, [])

  useEffect(()=>{
    if(popularView) {
      // setContent([...cContent].sort(sortPopular))
      setContent(popularContent)
    } else {
      setContent(cContent)
    }
  }, [cContent, popularContent, popularView])

  return (
    <>
      {/* @ts-ignore */}
      {content.length > 0 && (
        <div className="grid">
          <div id={item} className="text-[#524941] uppercase pt-8 pb-4">
            {translation[item]}
          </div>
          <div onClick={handleClick(false)}>Recently uploaded</div>
          <div onClick={handleClick(true)}>Popular</div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2" key={item}>
        {
          // @ts-ignore
          content.map(element => {
            const {eid} = element
            return (
              <div key={eid} className="pb-4 md:pb-8">
                {/* @ts-ignore */}
                <ThumbItemWithCaption item={element} sectionName={section} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
