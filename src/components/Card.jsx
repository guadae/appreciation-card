import React from 'react'
import { useState } from 'react';

const Card = ({id, front, back}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  
  return (
    <>
      <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      key={id}>
      <div className="card-front">{front}</div>
      <div className="card-back">{back}</div>
    </div>
    </>
  )
}

export default Card