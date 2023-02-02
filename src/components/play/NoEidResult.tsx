import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Skeleton} from '@mui/material'

import {MainProps} from '../../types'
import useUrlParameter from '../../hooks/useUrlParameter'
import Player from './Player'
import config from '../../config'
import Section from '../templates/Section'
import ThumbItem from '../Thumb/ThumbItem'
import RelatedContent from '../related-content/RelatedContent'
import ShareButton from '../ShareButton/ShareButton'
import PlayTemplate from './PlayTemplate'
import usePosts from '../../hooks/usePosts'
import Wrapper from '../templates/Wrapper'

export type PlayProps = {
  eid: any
  section: string
  category: any
  children?: ReactNode
}

// eslint-disable-next-line no-empty-pattern
const NoEid = ({eid, section, category}: PlayProps, ref: React.Ref<any> | undefined) => {
  const keyRef = useRef<string>('')
  const [keyName, setKeyName] = useState<string | null>(null)
  const url = `${config.oneVideo}${eid}`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {status, data, error, isFetching} = usePosts(url, [eid])

  const breakForOfLoop = useCallback(
    (contentId: string) => {
      for (const [key, categoryContent] of Object.entries(category)) {
        // @ts-ignore
        for (const element of categoryContent) {
          if (element.contentId === contentId) {
            // keyRef.current = key
            setKeyName(key)
            // break
            return false
          }
        }
      }
      return true
    },
    [category]
  )

  useEffect(() => {
    if (status !== 'loading' && data) {
      breakForOfLoop(data.contentId)
    }
  }, [breakForOfLoop, data, status])

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {status === 'loading' ? (
        <div className="play pb-48">
          <Wrapper className="md:px-8">
            <div className="w-full aspect-w-16 aspect-h-9">
            <Skeleton variant="rectangular" width={'100%'} height={800} />
            </div>
          </Wrapper>
        </div>
      ) : status === 'error' ? ( // @ts-ignore
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data && (
            <PlayTemplate item={data} ref={ref}>
              { keyName && <RelatedContent data={category[keyName]} section={section} categoryName={keyName} />}
            </PlayTemplate>
          )}
        </>
      )}
    </div>
  )
}

const NoEidResult = React.forwardRef(NoEid)

export default NoEidResult
