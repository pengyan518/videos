import React, {useEffect, useMemo} from 'react'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import {Skeleton} from '@mui/material'

import Intro from './features/intro/Intro'
import {useAppDispatch, useAppSelector} from './app/hooks'
import {RootState} from './app/store'
import {setContent} from './features/intro/introSlice'
import usePosts from './hooks/usePosts'
import config from './config'
import Loading from './components/loading'
import Featured from './components/featured/featured'

import TopArea from './components/top-area'
import MyRoutes from "./routes/MyRoutes";

function Main() {
  const {content} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  const url = config.videosAPI

  const queryKey = 'profile'
  const {status, data, error, isFetching} = usePosts(url, [queryKey])
  // const containerClass = useMemo(() => `xl:w-10/12 2xl:w-[91%]`, [])

  useEffect(() => {
    if (status !== 'loading' && status !== 'error') {
      // setMainData(JSON.parse(data))
      dispatch(setContent(data))
    }
  }, [data, dispatch, status])

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
        {status === 'loading' ? (
          <div className="grid md:flex gap-x-3 open-sans-c items-center">
            <Skeleton variant="rectangular" width={210} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
          </div>
        ) : status === 'error' ? ( // @ts-ignore
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data && (
              <MyRoutes data={data} />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Main
