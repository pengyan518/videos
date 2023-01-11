import React, {ReactNode} from 'react'

type ISectionProps = {
  children: ReactNode
}

const Wrapper = ({children, ...otherProps}: ISectionProps) => {
  return (
    <div className="overflow-x-hidden xl:w-10/12 2xl:w-[91%] mx-auto" {...otherProps}>
      {children}
    </div>
  )
}

export default Wrapper
