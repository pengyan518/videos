import * as React from 'react'
import {forwardRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
// import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {useAppSelector} from '../../app/hooks'
import {ContentProps} from '../../types'
import {RootState} from '../../app/store'
import config, {controller, sectionMap} from '../../config'

import Triangle from '../icons/Triangle'
import Wrapper from '../templates/Wrapper'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
}

interface BreadCrumbsProps {
  showCurrent?: boolean | string
  textColor?: string
}

const BreadcrumbsDiv = ({showCurrent, textColor}: BreadCrumbsProps, ref: any) => {
  const {section, eid} = useParams()
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {translation} = content

  const matches = useMediaQuery('(min-width:768px)')
  const style = {
    color: textColor || '#877564',
    fontSize: matches ? 16 : 13,
  }

  // @ts-ignore
  const breadcrumbs = [
    <Link key="1" to={`/${controller}/`}>
      <span className="mt-[-1px] inline-flex items-center justify-center w-full pl-1 pr-[1rem] md:pl-3 md:pr-5 py-1 text-lg text-white bg-[#8f7e64] rounded[1px] hover:bg-[#907042] sm:w-auto sm:mb-0 mr-4 md:mr-6 capitalize">
        <div className="w-6 h-6 md:w-8 md:w-8 md:mt-[-7px]">
          {/* @ts-ignore */}
          <Triangle className="" />
        </div>
        <span className="ml-[-2px] md:ml-[-6px] text-[12px] md:text-[1rem]">{translation.Back}</span>
      </span>
      <span>{translation.Videos}</span>
    </Link>,
    <Link key="2" to={`/${controller}/${section}`}>
      {/* @ts-ignore */}
      {translation[sectionMap[section].title]}
    </Link>,
  ]

  return (
    <Wrapper className="py-4 md:py-8" ref={ref}>
      <div className="innerPaddingAlignHeader">
        <Stack spacing={2} className={`open-sans-c uppercase text-xs md:text-base`}>
          <Breadcrumbs sx={style} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
            {showCurrent && (
              <Typography key="3" sx={style}>
                {showCurrent}
              </Typography>
            )}
          </Breadcrumbs>
        </Stack>
      </div>
    </Wrapper>
  )
}

const TopBreadcrumbs = forwardRef(BreadcrumbsDiv)

export default TopBreadcrumbs
