import React from 'react'

export default function Mapbook(props) {

  const { onClick } = props

  return (
    <div className="Header__mapbook" onClick={onClick}>
      <span>Mapbook</span>
    </div>

  )


}