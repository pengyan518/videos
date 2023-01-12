import React, {ReactNode} from 'react'
import './button.scss'

export type ButtonProps = {
  as?: any
  children?: ReactNode
  filled?: boolean
  secondary?: boolean
}

const Button = ({as, children, filled, secondary, ...rest}: ButtonProps) => {
  const that = {
    as,
  }
  return (
    <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest}>
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </that.as>
  )
}

Button.defaultProps = {
  as: 'button',
}

export default Button
