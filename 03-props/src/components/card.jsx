import React from 'react'

const Card = (props) => {
  return (
    
    
    <div className='card'>
        <img src= {props.img} alt="profile_img" />
        <h1>{props.user},{props.age}</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur.</p>
        <button className='but'>show profile</button>
    </div>
      
    
  )
}

export default Card
