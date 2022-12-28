import React from 'react'
import config from '../../config'

const ArrowRight: React.FC = props => (
  <svg xmlns={config.xlmns} fill="currentColor" enableBackground="new 0 0 33.3 9" viewBox="0 0 33.3 9" {...props}>
    <path
      clipRule="evenodd"
      d="m0 4.5c0-.3.2-.5.5-.5h31.1l-3.1-3.1c-.2-.2-.2-.5 0-.7.1-.2.5-.2.7-.1l4 4c.2.2.2.5 0 .7l-4 4c-.2.2-.5.2-.7 0s-.2-.5 0-.7l3.1-3.1h-31.1c-.3 0-.5-.2-.5-.5z"
      fillRule="evenodd"
    />
  </svg>
)

export default ArrowRight
