import React, {useEffect, useMemo} from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Intro from '../features/intro/Intro'
import Category from '../features/category/Category'
import Play from '../components/play/Play'
import config from '../config'
import TestimonialPopup from "../components/TestimonialPopup/TestimonialPopup";

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Intro />,
      // children: [
      // ],
    },
    {
      path: `:section`,
      element: <Category />,
        children: [
          {
            path: 'audience-reviews/:eid',
            element: <TestimonialPopup />,
          },
        ],
    },

    {
      path: `:section/play/:eid/*`,
      element: <Play />,
    },
    {
      path: `:section/play/:eid`,
      element: <Play />,
    },

    {
      path: '*',
      element: <Intro />,
    },
  ],
  {
    basename: `/${config.controller}`,
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  }
)
