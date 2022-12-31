import React from 'react'
import {Link, useParams} from 'react-router-dom'

import {MainProps} from '../../types'
// import useUrlParameter from '../../hooks/useUrlParameter'

export type CategoryProps = {
  data: MainProps
  title?: string
  section?: string
}

export default function Category({data, title}: CategoryProps) {
  const {section, eid} = useParams()

  // const section = useUrlParameter('videos')
  // const eid = useUrlParameter('play')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const eid = process.env.NODE_ENV === 'development' ? config.eid : useUrlParameter(window.location.pathname, 'e')
  console.debug(data)

  return (
    <div className="category">
      {title && title}
      <br />
      {section && (
        <>
          {eid} {section}
        </>
      )}
      <br />
      <Link to="/videos">Back</Link>
    </div>
  )
}
