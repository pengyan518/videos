import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'

import {ContentProps, MainProps} from '../../types'

interface IProps {
  data: MainProps
}

// interface ContentProps {
//   content?: any
//   status?: string
// }

const TopInfo: React.FC<IProps> = ({data}) => {
  const {
    // eslint-disable-next-line no-empty-pattern
    category: {},
  } = data
  // @ts-ignore
  return (
    <div className="flex md:flex-row items-center md:justify-center relative md:px-4">
      Shen Yun—Who We Are  |  "Shen Yun"—for Chinese, the words evoke a sense of wonder, magic, and the divine. To audiences who have seen it, they recall the experience of a lifetime....
    </div>
  )
}

export default TopInfo
