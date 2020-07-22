import React from 'react'

export default function Tweeter(props) {

  const { onClick } = props

  return (
    <div className="Header__tweeter" onClick={onClick}>
      <span>Tweeter</span>
    </div>

  )


}