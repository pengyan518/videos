import React from 'react'
import config from '../../config'

const ArrowUpShort: React.FC = props => (
  <svg xmlns={config.xlmns} fill="currentColor" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
    />
  </svg>
)

export default ArrowUpShort
