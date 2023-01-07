import React from 'react'
import ThumbItem from '../templates/ThumbItem'
import section from '../templates/Section'

export type RelatedContentProps = {
  data: any[]
}

export default function RelatedContent({data}: RelatedContentProps) {
  return (
    <div className="related-content">
      <div className="grid grid-cols-4 gap-4">
        {/* @ts-ignore */}
        {data.map(item => {
          return (
            <div key={item.eid}>
              {/* @ts-ignore */}
              <ThumbItem item={item} sectionName={section} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
