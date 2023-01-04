import React, {useCallback} from 'react'

import DialogTitle from '@mui/material/DialogTitle'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import useMediaQuery from '@mui/material/useMediaQuery'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
  margin?: number
}

export default function BootstrapDialogTitle(props: DialogTitleProps) {
  const {children, onClose, margin, ...other} = props
  const matches = useMediaQuery('(min-width:768px)')
  const style = {
    // position: 'absolute' as const,
    // bgcolor: 'background.paper',
    // boxShadow: 24,
    // width: matches ? 425 : '100%',
    m: margin,
    p: matches ? 2 : 0,
  }

  const styleClose = {
    position: 'absolute',
    right: matches ? 12 : 4,
    top: matches ? 12 : 12,
  }

  return (
    <DialogTitle sx={style} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            ...styleClose,
            color: theme => theme.palette.grey[700],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
