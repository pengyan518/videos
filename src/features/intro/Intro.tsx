import React, {useEffect, useMemo, useState} from 'react'
import {Skeleton} from '@mui/material'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {setContent} from './introSlice'
import TopArea from '../../components/top-area'
import {RootState} from '../../app/store'
import Featured from '../../components/featured/featured'
import {MainProps} from '../../types'
import EditorsPick from "../../components/editors-pick/EditorsPick";

interface IProps {
  data: MainProps
}

function Intro({data}: IProps) {
  const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')

  return (
    <>
      <div className="overflow-x-hidden" lang={content.langCode}>
        <div>
          <TopArea data={data} />
          <EditorsPick data={data} />
          <Featured data={data} />
        </div>
      </div>
    </>
  )
}

export default Intro
