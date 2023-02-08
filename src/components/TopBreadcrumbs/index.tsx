import * as React from 'react'
import {forwardRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {useAppSelector} from '../../app/hooks'
import {ContentProps} from '../../types'
import {RootState} from '../../app/store'
import config, {controller, sectionMap} from '../../config'
import Wrapper from '../templates/Wrapper'
import Triangle from '../icons/Triangle'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
}

interface BreadCrumbsProps {
  showCurrent?: boolean | string
}

const BreadcrumbsDiv = ({showCurrent}: BreadCrumbsProps, ref: any) => {
  const {section, eid} = useParams()
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {translation} = content

  // const matches = useMediaQuery('(min-width:768px)')
  //
  // const style = {
  //   // position: 'absolute' as const,
  //   // bgcolor: 'background.paper',
  //   // boxShadow: 24,
  //   // width: matches ? 425 : '100%',
  // }

  // @ts-ignore
  const breadcrumbs = [
    <Link key="1" to={`/${controller}/`}>
      <span className="inline-flex items-center justify-center w-full pr-[0.45rem] md:pl-3 md:pr-5 py-1 text-lg text-white bg-[#b7a58b] rounded[1px] hover:bg-[#907042] sm:w-auto sm:mb-0 mr-2 md:mr-6 capitalize">
        <div className="w-8 h-8">
          {/* @ts-ignore */}
          <Triangle className="" />
        </div>
        <span className="ml-[-6px]">{translation.Back}</span>
      </span>
      <span>{translation.Videos}</span>
    </Link>,
    <Link key="2" to={`/${controller}/${section}`}>
      {/* @ts-ignore */}
      {translation[sectionMap[section].title]}
    </Link>,
  ]

  return (
    <Wrapper className="py-8" ref={ref}>
      <div className="innerPaddingAlignHeader">
        <Stack spacing={2} className="open-sans-c uppercase text-[#877564] text-xs md:text-base">
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
            {showCurrent && (
              <Typography key="3" color="text.primary">
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
