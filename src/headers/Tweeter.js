import React from 'react'
import tweeter from '../images/tweeter.gif'

export default function Tweeter(props) {

  const { onClick } = props

  return (
    <div className="Header__tweeter" onClick={onClick}>
        <img src={tweeter} className="Header__demo"></img>
      <div class="Header__info">
        <h1>Tweeter</h1>
        <p>Project info</p>

      </div>
    </div>

  )


}