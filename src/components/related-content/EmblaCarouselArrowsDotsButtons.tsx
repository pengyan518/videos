import React from 'react'
import {ChevronRight} from "../icons";

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}

type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className={`absolute flex items-center justify-center top-1/2 translate-y-[-50%] cursor-pointer z-10 w-8 h-8 left-[-0.6rem] ${!enabled?'disabled:opacity-30 cursor-default':''}`}
      onClick={onClick}
      disabled={!enabled}
    >
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full rotate-180" viewBox="0 0 16 16" />
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  // @ts-ignore
  return (
    <button
      className={`absolute flex items-center justify-center top-1/2 translate-y-[-50%] cursor-pointer z-10 w-8 h-8 right-[0] ${!enabled?'disabled:opacity-30 cursor-default':''}`}
      onClick={onClick}
      disabled={!enabled}
    >
      {/* @ts-ignore */}
      <ChevronRight className="w-full h-full" viewBox="0 0 16 16" />
    </button>
  )
}
