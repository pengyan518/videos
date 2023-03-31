import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {Mousewheel, Pagination} from 'swiper'
import config, {controller, sectionMap} from '../../config'

import {ShortsProps, VideoItemProps} from '../../types'

import ToggleMute from './ToggleMute'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShareButton from '../ShareButton/ShareButton'
import ShareIcon from '../icons/Share'
import {Item} from './styles'
import IconsStore from '../icons/IconsStore'

export type ShortVideoSharePanelProps = {}

export default function ShareButtonsPanel({}: ShortVideoSharePanelProps) {
  const {
    content: {translation, langCode},
  } = useAppSelector((state: RootState) => state.intro)

  const getTargetLink = useMemo(() => {
    switch (langCode) {
      case 'en-us':
      case 'da':
        return {
          fb: 'https://www.facebook.com/ShenYunPerformingArts',
          contactUs: 'https://www.shenyun.org/contact-us?lang=en-us',
        }
      case 'il':
        return {
          fb: 'https://www.facebook.com/ShenYunIL/',
          contactUs: `/contact-us`,
        }
      default:
        return {
          fb: 'https://www.facebook.com/ShenYunPerformingArts',
          contactUs: `/contact-us`,
        }
    }
  }, [langCode])

  const icons = [
    ['FacebookIcon', getTargetLink.fb],
    ['TwitterIcon', 'https://twitter.com/shenyun'],
    ['InstagramIcon', 'https://www.instagram.com/shenyunperformingarts/'],
    ['LinkedinIcon', 'https://www.linkedin.com/company/shen-yun-performing-arts'],
    ['YoutubeIcon', 'https://www.youtube.com/c/shenyun'],
  ]

  return (
    <>
      <div>Follow us!</div>
      <div>
        <div className="grid grid-cols-4 gap-4 items-center">
          {icons.map(item => (
            <div key={item[0]}>
              <Item
                className="p-2 bg-[#c5bfb3] hover:bg-[#9e9685] rounded-lg inline-block cursor-pointer"
                langCode={langCode}
                target="_blank"
                href={item[1]}>
                {/* @ts-ignore */}
                <IconsStore className="w-8 h-8 text-white" name={item[0]} />
              </Item>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
