import React, {useEffect, useMemo} from 'react'
import {RouterProvider} from 'react-router-dom'
import {Skeleton} from '@mui/material'

import Intro from '../features/intro/Intro'
import {useAppDispatch, useAppSelector} from '../app/hooks'
import {RootState} from '../app/store'

import {MainProps} from '../types'
import {router} from "./router";
// import Category from '../features/category/Category'
// import useUrlParameter from '../hooks/useUrlParameter'
// import Play from '../components/play/Play'
// import config from '../config'

interface IProps {
  data: MainProps
}

function MyRoutes({data}: IProps) {
  const {modalIsOpened} = useAppSelector((state: RootState) => state.intro)
  const {content, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />

    // <Routes>
    //   <Route path={`/${config.controller}`}>
    //     <Route index={true} element={<Intro data={data} />} />
    //
    //     <Route path=":section">
    //       <Route index={true} element={<Category data={data} />} />
    //       <Route index={false} path="play/:eid/*" element={<Play data={data} />} />
    //       <Route index={false} path="play/:eid" element={<Play data={data} />} />
    //     </Route>
    //   </Route>
    //
    //   <Route path="*" element={<Intro data={data} />} />
    // </Routes>
  )
}

export default MyRoutes
