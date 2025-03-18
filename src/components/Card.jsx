import React from 'react'

const Card = ({id, name, text}) => {
  return (
    <div class='card' key={id}>
      <div class='card-front'>{name}</div>
      <div class='card-back'>{text}</div>
    </div>
  )
}

export default Card