import React, {useEffect, useMemo, useState} from 'react'
import {Skeleton} from '@mui/material'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {setContent} from './introSlice'
import TopArea from '../../components/TopArea'
import {RootState} from '../../app/store'
// import Video from '../../components/Video/Video'
import Loading from '../../components/Loading'
import usePosts from '../../hooks/usePosts'
import config from '../../config'
import useUrlParameter from '../../hooks/useUrlParameter'

function Intro() {
  const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  const url = config.videosAPI

  const queryKey = 'profile'
  const {status: fetchStatus, data, error, isFetching} = usePosts(url, [queryKey])
  const containerClass = useMemo(() => `xl:w-10/12 2xl:w-[91%]`, [])

  useEffect(() => {
    if (fetchStatus !== 'loading' && fetchStatus !== 'error') {
      // setMainData(JSON.parse(data))
      dispatch(setContent(data))
    }
  }, [data, dispatch, fetchStatus, status])


  if (!content)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading height="100vh" width="100%" color="#c07c45" background="#efe4db" />
      </div>
    )

  return (
    <>
      <div className="overflow-x-hidden" lang={content.langCode}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {fetchStatus === 'loading' ? (
          <div className="grid md:flex gap-x-3 open-sans-c items-center">
            <Skeleton variant="rectangular" width={210} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
          </div>
        ) : fetchStatus === 'error' ? ( // @ts-ignore
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data && (
              <>
                <div className="bg-gradient-to-b from-[#efe4db] to-[#fefefe]">
                  <div className={`overflow-x-hidden ${containerClass} mx-auto`}>
                    <TopArea data={data} />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Intro
