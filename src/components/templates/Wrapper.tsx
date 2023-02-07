import React, {forwardRef, ReactNode} from 'react'

type ISectionProps = {
  children: ReactNode
  className?: string
}

const WrapperDiv = ({children, className, ...rest}: ISectionProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <div className={`xl:w-10/12 2xl:w-[91%] mx-auto ${className}`} ref={ref} {...rest}>
      {children}
    </div>
  )
}

const Wrapper = forwardRef(WrapperDiv)


export default Wrapper
