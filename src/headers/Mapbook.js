import React from 'react'
import tweeter from '../images/tweeter.gif'

export default function Mapbook(props) {

  const { onClick } = props

  return (
    <div className="Header__tweeter" onClick={onClick}>
        <img src={tweeter} className="Header__demo"></img>
      <div class="Header__info">
        <h3>Mapbook</h3>
        <p>TBD</p>
      </div>
    </div>

  )


}