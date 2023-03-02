import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox, FormControlLabel, Slider } from '@material-ui/core'
import { DoneAllSharp, IndeterminateCheckBoxSharp } from '@material-ui/icons'

export const SettingsElement = ({ name, data, setData }) => {
  const classes = useStyles()
  const checkboxHandle = e => {
    setData({
      ...data,
      [name]: {
        ...data[name],
        isChecked: e.target.checked,
      },
    })
  }

  const sliderHandle = value => {
    setData({
      ...data,
      [name]: {
        ...data[name],
        time: value,
      },
    })
  }

  return (
    <div className={classes.container}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<IndeterminateCheckBoxSharp />}
            checkedIcon={<DoneAllSharp color="primary" />}
            name={name}
            checked={data[name].isChecked}
            onChange={checkboxHandle}
          />
        }
        label={name}
      />
      <Slider
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks
        min={1}
        max={10}
        disabled={!data[name].isChecked}
        value={data[name].time}
        onChange={(_, newValue) => sliderHandle(newValue)}
      />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
  },
}))
