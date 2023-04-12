import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import {purple, orange} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material/styles'

interface LinearDeterminateProps {
  // isPaused: boolean | null
  duration?: number
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
    secondary: {
      main: '#ff6e40',
      contrastText: '#eedf83',
    },
  },
})

function MyLinearDeterminate({}: LinearDeterminateProps, ref: React.Ref<unknown> | undefined) {
  const [progress, setProgress] = useState(0)
  // const [dur, setDuration] = useState(toSeconds(duration))
  // const [isPaused, setPaused] = useState<boolean | null>(null)
  // const {vimeoPlayer} = useAppSelector((state: RootState) => state.shorts)
  const maxSteps = 100
  const diff = 0.5
  // const dur = toSeconds(duration)
  // const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN)

  // const convertCurrentTime = useCallback(
  //   (currentTime: number) => {
  //     setProgress((currentTime / (duration / maxSteps)) * diff)
  //     // console.debug(`Progress: ${(currentTime) / ((dur) / maxSteps) * diff}`)
  //   },
  //   [duration]
  // )

  // useEffect(()=>{
  //   setDuration(toSeconds(duration))
  // },[duration])

  const progressBarRef = useRef(null)

  useImperativeHandle(
    ref,
    () => ({
      progress,
      setProgress,
      // convertCurrentTime,
      // setDuration,
      dom: progressBarRef.current,
    }),
    [progress]
  )

  // let timer: string | number | NodeJS.Timer | undefined
  // const timer = useRef<any>(null)

  // useEffect(() => {
  //   if (!isPaused) {
  //     timer.current = setInterval(() => {
  //       setProgress(oldProgress => {
  //         if (oldProgress === maxSteps) {
  //           return 0
  //         }
  //
  //         return Math.min(oldProgress + diff, maxSteps)
  //       })
  //     }, ((duration * 1000) / maxSteps) * diff)
  //   } else {
  //     clearInterval(timer.current)
  //     setProgress(progress)
  //   }
  //
  //   return () => {
  //     clearInterval(timer.current)
  //     // setProgress(0)
  //   }
  // }, [duration, isPaused, progress])

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
    borderRadius: 1,
  }
  return (
    <div className="fixed md:absolute left-[0.5rem] right-[0.5rem] bottom-0" ref={progressBarRef}>
      <Box sx={styles}>
        <ThemeProvider theme={theme}>
          <LinearProgress variant="determinate" value={progress} sx={styles2} color="secondary" />
        </ThemeProvider>
      </Box>
    </div>
  )
}

const LinearDeterminate = forwardRef(MyLinearDeterminate)

export default LinearDeterminate
