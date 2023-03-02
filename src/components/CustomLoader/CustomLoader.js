import React from 'react'
import './CustomLoader.css'

export const CustomLoader = ({ typeOfSound }) => {
  return (
    <div className="container">
      <h1>{typeOfSound}</h1>
      <div className="lds-hourglass"></div>
    </div>
  )
}
