import React from 'react'
import {MoveRight} from 'lucide-react'
import Rightcardcontent from './rightcardcontent'
const Rightcard = (props) => {
    
  return (
    <div className=' flex shrink-0 relative overflow-hidden h-full w-45 bg-red-500 rounded-4xl' >
      <img className = 'h-full w-full object-cover' src={props.img} alt="card img" />
      <Rightcardcontent id={props.id}  tag={props.tag} intro = {props.intro}/>
    </div>
  )
}

export default Rightcard
