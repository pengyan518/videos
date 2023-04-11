import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import toSeconds from '../../utils/toSeconds'

interface LinearDeterminateProps {
  isPaused: boolean | null
  duration: string
}

function MyLinearDeterminate({isPaused, duration}: LinearDeterminateProps, ref: React.Ref<unknown> | undefined) {
  const [progress, setProgress] = useState(0)
  // const [dur, setDuration] = useState(0)
  // const [isPaused, setPaused] = useState<boolean | null>(null)
  // const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const maxSteps = 100
  const diff = 0.5
  const dur = toSeconds(duration)
  // const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN)

  const convertCurrentTime = useCallback((currentTime:number)=> {
    setProgress((currentTime) / ((dur) / maxSteps) * diff)
    console.debug(`Progress: ${(currentTime) / ((dur) / maxSteps) * diff}`)
  },[dur])

  useImperativeHandle(
    ref,
    () => ({
      progress,
      setProgress,
      convertCurrentTime,
    }),
    [convertCurrentTime, progress]
  )

  // let timer: string | number | NodeJS.Timer | undefined
  const timer = useRef<any>(null)

  useEffect(() => {
    if (!isPaused) {
      timer.current = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress === maxSteps) {
            return 0
          }

          return Math.min(oldProgress + diff, maxSteps)
        })
      }, ((dur * 1000) / maxSteps) * diff)
    } else {
      clearInterval(timer.current)
      setProgress(progress)
    }

    return () => {
      clearInterval(timer.current)
      // setProgress(0)
    }
  }, [dur, isPaused])

  // useEffect(() => {
  //   return () => {
  //     clearInterval(timer.current)
  //     setProgress(0)
  //   }
  // }, [])
  const styles = {
    width: '100%',
  }
  const styles2 = {
    borderRadius: 1
  }
  return (
    <div className="absolute left-[0.5rem] right-[0.5rem] top-0">
      <Box sx={styles}>
        <LinearProgress variant="determinate" value={progress} sx={styles2} />
      </Box>
    </div>
  )
}

const LinearDeterminate = forwardRef(MyLinearDeterminate)

export default LinearDeterminate
