import  { useState, useEffect } from 'react'

export const CountDown = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  startPauseMusic,
  isPause,
  soundStopHanldeSoundComponent,
}) => {
  const [paused, setPaused] = useState(isPause)
  const [over, setOver] = useState(false)
  const [[h, m, s], setTime] = useState([hours, minutes, seconds])

  useEffect(() => {
    startPauseMusic(paused)
  }, [paused])

  const tick = () => {
    if (over) {
      startPauseMusic(true)
      setPaused(true)
      soundStopHanldeSoundComponent()
      return
    }
    if (h === 0 && m === 0 && s === 0) {
      setOver(true)
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59])
    } else if (s === 0) {
      setTime([h, m - 1, 59])
    } else {
      setTime([h, m, s - 1])
    }
  }

 
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })
}
