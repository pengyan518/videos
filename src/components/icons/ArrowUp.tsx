import React from 'react'
import config from '../../config'

const ArrowUp: React.FC = props => (
  <svg xmlns={config.xlmns} fill="currentColor" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24" {...props}>
    <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
  </svg>
)

export default ArrowUp
