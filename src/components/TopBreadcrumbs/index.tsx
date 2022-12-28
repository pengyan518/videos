import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {useAppSelector} from '../../app/hooks'
import {ContentProps} from '../../types'
import {RootState} from '../../app/store'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
}

export default function TopBreadcrumbs() {
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {categoryDisplay, categoryUrl, info, translation} = content
  const {title} = info

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/artists/" >
      {translation.Artists}
    </Link>,
    <Link underline="hover" key="2" color="inherit" href={`/artists/${categoryUrl}`} >
      {categoryDisplay}
    </Link>,
    <Typography key="3" color="text.primary">
      {title}
    </Typography>,
  ]

  return (
    <Stack spacing={2} className="open-sans-c uppercase text-[#877564] text-xs md:text-base">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
