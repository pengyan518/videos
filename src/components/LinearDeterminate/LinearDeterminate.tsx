import React, {useEffect, useRef, useState} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'

interface LinearDeterminateProps {
  isPaused: boolean | null
}

export default function LinearDeterminate({isPaused}: LinearDeterminateProps) {
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  // const [isPaused, setPaused] = useState<boolean | null>(null)
  const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const maxSteps = 100
  // const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN)

  useEffect(() => {
    if (vimeoPlayer) {
      vimeoPlayer.getEnded().then((ended: boolean) => {
        // ended = whether or not the video has ended
        if (ended) setProgress(maxSteps)
      })
    }
  }, [vimeoPlayer])

  useEffect(() => {
    if (vimeoPlayer) {
      vimeoPlayer.getDuration().then((dur: number) => {
        // seconds = the current playback position
        setDuration(dur)
      })
    }

    return () => {
      // clearInterval(timer)
    }
  }, [vimeoPlayer])

  // let timer: string | number | NodeJS.Timer | undefined
  const timer = useRef<any>(null)

  useEffect(() => {
    if (!isPaused) {
      timer.current = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress === maxSteps) {
            return 0
          }
          const diff = 1
          return Math.min(oldProgress + diff, maxSteps)
        })
      }, (duration * 1000) / maxSteps)
    } else {
      clearInterval(timer.current)
      setProgress(progress)
    }

    return () => {
      clearInterval(timer.current)
      // setProgress(0)
    }
  }, [duration, isPaused])

  // useEffect(() => {
  //   return () => {
  //     clearInterval(timer.current)
  //     setProgress(0)
  //   }
  // }, [])

  return (
    <Box sx={{width: '100%'}} className="absolute left-0 top-0">
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  )
}
