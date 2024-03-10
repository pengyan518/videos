import React, {ReactNode} from 'react'

type ISectionProps = {
  title?: string
  description?: string
  yPadding?: string
  xPadding?: string
  width?: string
  className?: string
  children: ReactNode
}

const Section = ({width, title, description, xPadding, yPadding, className, children}: ISectionProps) => {
  return (
    <div className={`${width || 'w-full'} mx-auto ${xPadding || 'px-3'} ${yPadding || 'md:py-14'} ${className ?? ''}`}>
      {(title || description) && (
        <div className="mt-0 mb-0 text-center">
          {title && <h2 className="text-2xl md:text-4xl text-[#524941] OpenSans__font">{title}</h2>}
          {description && <div className="mt-4 text-xl md:px-20">{description}</div>}
        </div>
      )}

      {children}
    </div>
  )
}

export default Section
