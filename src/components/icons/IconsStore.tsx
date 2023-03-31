import React, {forwardRef} from 'react'
import config from '../../config'
import icons from '../../assets/svg/icons.svg'

export type IconProps = {
  name: string
}

const MyIcon = ({name, ...props}:IconProps, ref: React.Ref<any> | null) => {
  return (
    <svg
      xmlns={config.xlmns} {...props} ref={ref}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  )
}

const IconsStore = forwardRef(MyIcon)
export default IconsStore
