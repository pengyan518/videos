import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps, CategoryProps} from '../../types'
import config, {sectionMap} from '../../config'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ThumbItemWithCaption from '../../components/Thumb/ThumbItemWithCaption'
// import sortPopular from '../../utils/sortPopular'
import useSortPopular from '../../hooks/useSortPopular'
import FilterButton from "../../components/FilterButton/FilterButton";
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProp = {
  item: keyof CategoryProps
  category: CategoryProps
}

export default function CategorySection({item, category}: CategoryProp) {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  const {section} = useParams()
  const {handleClick, content, activeTab} = useSortPopular({categoryData: category[item]})

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
