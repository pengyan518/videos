import React, {useEffect, useMemo} from 'react'
import {Routes, Route, Outlet, Link, useSearchParams, BrowserRouter} from 'react-router-dom'
import {Skeleton} from '@mui/material'

import Intro from '../features/intro/Intro'
import {useAppDispatch, useAppSelector} from '../app/hooks'
import {RootState} from '../app/store'

import {MainProps} from '../types'
import Category from '../features/category/Category'
import useUrlParameter from '../hooks/useUrlParameter'
import Play from '../components/play/Play'
import config from "../config";

interface IProps {
  data: MainProps
}

function MyRoutes({data}: IProps) {
  const {modalIsOpened} = useAppSelector((state: RootState) => state.intro)
  const {content, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()

  // const [searchParams, setSearchParams] = useSearchParams()
  // const section = useUrlParameter('videos')
  // const eid = useUrlParameter('play')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  // console.debug(`section: ${section}`)
  // console.debug(`eid: ${eid}`)

  return (
    <Routes>
      <Route path={`/${config.controller}`}>
        <Route index={true} element={<Intro data={data} />} />

        <Route path=":section">
          <Route index={true} element={<Category data={data} />} />
          <Route index={false} path="play/:eid/*" element={<Play data={data} />} />
          <Route index={false} path="play/:eid" element={<Play data={data} />} />
        </Route>
      </Route>

      <Route path="*" element={<Intro data={data} />} />
    </Routes>
  )
}

export default MyRoutes
