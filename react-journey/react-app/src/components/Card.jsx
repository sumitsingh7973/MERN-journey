import React from 'react'

const Card = (props) => {
 
  
  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.users}</h1>
        <p>{props.bio}</p>
        <button>{props.button}</button>
      </div>
  )
}

export default Card
