import React, {createElement, Children, ReactNode} from 'react'
import Popover from '@mui/material/Popover'
import {createTheme, ThemeProvider} from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import {purple} from '@mui/material/colors'
import ShareArea from './ShareArea'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      main: '#c7ae62 !important',
      contrastText: '#fff',
    },
  },
})

interface ShareButtonProps {
  children: ReactNode
}

export default function ShareButton({children}: ShareButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ButtonDom onClick={handleClick}>{children}</ButtonDom>
        {/* <Button aria-describedby={id} variant="contained" onClick={handleClick} sx={style} color="secondary"> */}
        {/*  {translation.Share} */}
        {/* </Button> */}
      </ThemeProvider>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Typography sx={{p: 2}}>
          <ShareArea />
        </Typography>
      </Popover>
    </div>
  )
}

interface Args {
  children: ReactNode
  onClick: any
  elementType?: string
}

const ButtonDom = ({children, onClick, elementType = 'div'}: Args) => {
  return createElement(
    elementType,
    {
      onClick,
    },
    Children.only(children)
  )
}
