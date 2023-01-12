import React, {ReactNode} from 'react'

type ISectionProps = {
  children: ReactNode
  className?: string
}

const Wrapper = ({children, className, ...rest}: ISectionProps) => {
  return (
    <div className={`xl:w-10/12 2xl:w-[91%] mx-auto ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default Wrapper
