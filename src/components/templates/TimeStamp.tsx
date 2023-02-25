import React, {useEffect, useRef, useState} from 'react'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

export type ItemProps = {
  onDemandLink: string
  length?: string
  className?: string
}

export default function TimeStamp({onDemandLink, length, className = 'm-[0.75rem]'}: ItemProps) {
  const {
    content: {langCode, translation},
  } = useAppSelector((state: RootState) => state.intro)

  return (
    <>
      {onDemandLink ? (
        <div
          className={`leading-[12px] uppercase absolute z-[10] right-0 bottom-0 text-[12px] text-white rounded-full bg-[#634699] py-[3px] px-[14px] tracking-[0.35px] ${className}`}>
          {translation.Exclusive}
        </div>
      ) : (
        <div
          className={`leading-[12px] uppercase absolute right-0 bottom-0 text-[12px] text-white rounded-lg bg-black/75 py-[3px] px-[10px] tracking-[0.35px] ${className}`}>
          {length}
        </div>
      )}
    </>
  )
}
