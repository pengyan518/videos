import * as React from 'react'
import Popover from '@mui/material/Popover'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {purple} from '@mui/material/colors'
import ShareArea from './ShareArea'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

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

export default function ShareButton() {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)
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
        <Button aria-describedby={id} variant="contained" onClick={handleClick} sx={style} color="secondary">
          {translation.Share}
        </Button>
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
