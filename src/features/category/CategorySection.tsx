import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps, CategoryProps, VideoItemProps} from '../../types'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ThumbItemWithCaption from '../../components/Thumb/ThumbItemWithCaption'
import useSortPopular from '../../hooks/useSortPopular'
import FilterButton from '../../components/FilterButton/FilterButton'
import ShortsThumbItem from '../../components/Thumb/ShortsThumbItem'

type ValueOf<T> = T[keyof T]

export type CategoryProp = {
  item: keyof CategoryProps
  data: ValueOf<CategoryProps>
}

export default function CategorySection({item, data}: CategoryProp) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const {section} = useParams()
  const {handleClick, content, activeTab} = useSortPopular({categoryData: data})
  const gridClass = item === 'itemsShorts' ? 'grid grid-cols-3 md:grid-cols-6 gap-2' : 'grid grid-cols-2 md:grid-cols-4 gap-2'

  return (
    <>
      {/* @ts-ignore */}
      {content.length > 0 && (
        <div className="block md:flex justify-between pt-8 pb-4">
          <div id={item} className="text-[#524941] uppercase pb-2 md:pb-0">
            {translation[item]}
          </div>
          <FilterButton handleClick={handleClick} activeTab={activeTab} />
        </div>
      )}

      <div className={gridClass}>
        {
          // @ts-ignore
          content.map(element => {
            const {eid} = element
            return (
              <div key={eid} className="pb-4 md:pb-8">
                {item === 'itemsShorts' ? (
                  <ShortsThumbItem item={element} sectionName={section} />
                ) : (
                  <ThumbItemWithCaption item={element} sectionName={section} categoryName={item} />
                )}
              </div>
            )
          })
        }
      </div>
    </>
  )
}
