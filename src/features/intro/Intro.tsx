import React, {useEffect, useMemo, useState} from 'react'
// import {Skeleton} from '@mui/material'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
// import {setContent} from './introSlice'
import TopArea from '../../components/top-area'
import {RootState} from '../../app/store'
import Featured from '../../components/featured/featured'
import {MainProps} from '../../types'
import EditorsPick from '../../components/editors-pick/EditorsPick'
// import Section from '../../components/templates/Section'
import CreationsBanner from '../../components/CreationsBanner/CreationsBanner'
import Footer from '../../components/footer/Footer'
import Shorts from '../../components/Shorts/Shorts'
import isHidden from '../../utils/isHidden'

interface IProps {
  data?: MainProps
}

function Intro({data}: IProps) {
  const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const divNames = ['#sy-header-outer-bar-reg', '#shenyun-footer', '#shenyun-footer-bar']
      divNames.forEach(item => {
        const itemDiv = document.querySelector(item)
        if (itemDiv && isHidden(itemDiv)) itemDiv.setAttribute('style', 'display:block')
      })
    }
  }, [])

  return (
    <>
      <div className="overflow-x-hidden">
        <TopArea />
        <EditorsPick data={content} />

        <div className="overflow-x-hidden xl:w-10/12 2xl:w-[91%] mx-auto mt-[4.5rem]">
          <Featured data={content} />
        </div>
        <Shorts data={content} />
        <CreationsBanner />
        <Footer data={content} />
      </div>
    </>
  )
}

export default Intro
