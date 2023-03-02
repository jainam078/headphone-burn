import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CountDown } from '../CountDown/CountDown'

export const SoundComponent = ({ typeOfSound, data, soundStopHanlde }) => {
  const audioRef = useRef()
  const classes = useStyles()
  const { isPause, time } = data

  const startPauseMusic = isPauseData => {
    isPauseData ? audioRef.current.pause() : audioRef.current.play()
  }
  useEffect(() => {
    isPause ? audioRef.current.pause() : audioRef.current.play()
  }, [isPause])

  const soundStopHanldeSoundComponent = () => {
    soundStopHanlde(typeOfSound)
  }
  return (
    <>
      <CountDown
        hours={time}
        startPauseMusic={startPauseMusic}
        className={classes.hide}
        isPause={isPause}
        soundStopHanldeSoundComponent={soundStopHanldeSoundComponent}
      />
      <audio
        loop
        src={`./audio/${typeOfSound}.mp3`}
        ref={audioRef}
        className={classes.hide}
      />
    </>
  )
}

const useStyles = makeStyles({
  root: {
    width: ' 15%',
    margin: '10px',
    backgroundColor: '#eee',
    minWidth: '230px',
  },
  title: {
    fontSize: 14,
  },
  hide: {
    display: 'none',
  },
})
