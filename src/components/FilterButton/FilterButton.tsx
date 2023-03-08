import React, {ReactNode, useCallback} from 'react'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

type ButtonContainerProps = {
  children?: ReactNode
  handleClick: any
  activeTab: any
}
type IProps = {
  text: string
  showPopularView?: boolean
  myClassName?: any
  label: string
}

const ButtonContainer = ({handleClick, activeTab, children}: ButtonContainerProps) => {
  const activeClass = 'text-white hover:text-white hover:no-underline bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none'
  const inActiveClass = 'text-gray-600 bg-white hover:bg-gray-200 hover:no-underline focus:outline-none focus:shadow-none'

  const getClassName = (child: {props: {label: any}}) => {
    return `inline-flex cursor-pointer items-center justify-center whitespace-nowrap px-4 py-[0.45rem] text-[0.85rem] font-medium transition duration-200 z-depth-1 rounded-md ${
      activeTab === child.props.label ? activeClass : inActiveClass
    }`
  }

  return (
    <div className="flex gap-3 items-center mr-4">
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          className: getClassName(child),
          onClick: handleClick(child.props.showPopularView),
        })
      })}
    </div>
  )
}

const TabItem = ({text, ...props}: IProps) => {
  return (
    <a {...props}>
      {text}
    </a>
  )
}

const FilterButton = ({handleClick, activeTab}: ButtonContainerProps) => {
  const {
    content: {translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <ButtonContainer handleClick={handleClick} activeTab={activeTab}>
      <TabItem label="latest" showPopularView={false} text={translation['Recently uploaded']} />
      <TabItem label="popular" showPopularView={true} text={translation.Popular} />
    </ButtonContainer>
  )
}

export default FilterButton
