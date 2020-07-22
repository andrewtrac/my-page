import React from 'react'

export default function Pathfinder(props) {

  const { onClick } = props

  return (
    <div className="Header__mapbook" onClick={onClick}>
      <span>Pathfinder</span>
    </div>
  )


}