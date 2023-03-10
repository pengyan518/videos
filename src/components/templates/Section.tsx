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
        <div className="mb-12 text-center">
          {title && <h2 className="text-4xl text-gray-900 font-bold">{title}</h2>}
          {description && <div className="mt-4 text-xl md:px-20">{description}</div>}
        </div>
      )}

      {children}
    </div>
  )
}

export default Section
