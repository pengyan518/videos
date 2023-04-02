import React from 'react'
import ArrowRightCircle from '../icons/ArrowRightCircle'
import ArrowRight from '../icons/ArrowRight'
import {ChevronRight} from '../icons'

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<DotButtonPropType> = props => {
  const {selected, onClick} = props

  return <button className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')} type="button" onClick={onClick} />
}

type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
  buttonClass?: string
  leftPosition?: string
  rightPosition?: string
}

export const PrevButton: React.FC<PrevNextButtonPropType> = ({enabled, onClick, buttonClass= 'top-1/2 translate-y-[-50%] bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white', leftPosition='left-[-3vw]'}) => {
  return (
    <button
      className={`rounded-full p-3 ${buttonClass} absolute flex items-center justify-center cursor-pointer z-10 w-12 h-12 ${leftPosition} ${
        !enabled ? 'disabled:opacity-0 cursor-default' : ''
      }`}
      onClick={onClick}
      disabled={!enabled}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full rotate-180" />
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = ({enabled, onClick, buttonClass= 'top-1/2 translate-y-[-50%] bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white', rightPosition='right-[-2.5vw]'}) => {
  // @ts-ignore
  return (
    <button
      className={`rounded-full p-3 ${buttonClass} absolute flex items-center justify-center cursor-pointer z-10 w-12 h-12 ${rightPosition} ${
        !enabled ? 'disabled:opacity-0 cursor-default' : ''
      }`}
      onClick={onClick}
      disabled={!enabled}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full" />
    </button>
  )
}
