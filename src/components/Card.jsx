import React from 'react'
import { useState } from 'react';

const Card = ({id, front, back, name}) => {

  return (
    <>
    <div className="image-container" key={id}>
      <img className="card-front" src={front} alt={name} width="360"/>
      <div className="overlay">
        <div className="overlay-text">{back}</div> 
      </div>
    </div>
    </>
  )
}

export default Card