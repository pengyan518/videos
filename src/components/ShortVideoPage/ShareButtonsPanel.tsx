import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShareButton from '../ShareButton/ShareButton'
import GJW from '../../assets/svg/gjw.svg'
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
    ['YoutubeIcon', 'https://www.youtube.com/c/shenyun'],
    ['LinkedinIcon', 'https://www.linkedin.com/company/shen-yun-performing-arts'],
    ['PinterestIcon', 'https://www.pinterest.com/shenyun/'],
    ['ShareIcon', ''],
  ]

  return (
    <>
      <div className="font-bold text-[1.5rem] pb-6">{translation['Follow Shen Yun']}!</div>
      <div className="pb-8">
        <div className="flex gap-2 items-center p-4 rounded-lg border-4 border-[#c5bfb3] justify-between">
          <span className="text-[#a19e98] font-bold open-sans-c">{translation['Follow on Gan Jing World']}</span>
          <div className="w-[5rem] h-[2.5rem]">
            <img src={GJW} alt="" />
          </div>
        </div>
      </div>

      <div className="pb-6">
        <div className="flex flex-wrap gap-3 items-center">
          {icons.map((item, index, array) => (
            <div key={item[0]}>
              {index === array.length - 1 ? (
                <ShareButton>
                  <div>
                    <div className="p-[0.4rem] bg-[#c5bfb3] hover:bg-[#9e9685] rounded-lg inline-block cursor-pointer text-white relative z-10">
                      {/* @ts-ignore */}
                      <IconsStore className="w-[2.5vw] h-[2.5vw] -scale-x-100 fill-white" name="ShareIcon" />
                    </div>
                  </div>
                </ShareButton>
              ) : (
                <Item
                  className="p-[0.4rem] bg-[#c5bfb3] hover:bg-[#9e9685] rounded-lg inline-block cursor-pointer relative z-10"
                  langCode={langCode}
                  target="_blank"
                  href={item[1]}>
                  {/* @ts-ignore */}
                  <IconsStore className="w-[2.5vw] h-[2.5vw] text-white" name={item[0]} />
                </Item>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
