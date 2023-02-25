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
}

export const PrevButton: React.FC<PrevNextButtonPropType> = ({enabled, onClick, buttonClass= 'bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white'}) => {
  return (
    <button
      className={`rounded-full p-3 ${buttonClass} absolute flex items-center justify-center top-1/2 translate-y-[-50%] cursor-pointer z-10 w-12 h-12 left-[-3vw] ${
        !enabled ? 'disabled:opacity-0 cursor-default' : ''
      }`}
      onClick={onClick}
      disabled={!enabled}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full rotate-180" />
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = ({enabled, onClick, buttonClass= 'bg-[#fff] hover:bg-[#c7ae62] text-[#9c7a14] hover:text-white'}) => {
  // @ts-ignore
  return (
    <button
      className={`rounded-full p-3 ${buttonClass} absolute flex items-center justify-center top-1/2 translate-y-[-50%] cursor-pointer z-10 w-12 h-12 right-[-2.5vw] ${
        !enabled ? 'disabled:opacity-0 cursor-default' : ''
      }`}
      onClick={onClick}
      disabled={!enabled}>
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full" />
    </button>
  )
}
