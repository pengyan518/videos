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

const style = {
  // position: 'absolute' as const,
  bgcolor: '#c7ae62',
  boxShadow: 0,
  // width: matches ? 425 : '100%',
  fontFamily: 'open-sans-condensed',
  fontSize: 16,
  py: 2,
  px: 8,
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

  const style = {
    // position: 'absolute' as const,
    bgcolor: '#c7ae62',
    boxShadow: 0,
    // width: matches ? 425 : '100%',
    fontFamily: 'open-sans-condensed',
    fontSize: 16,
    py: 2,
    px: 8,
  }

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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
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
