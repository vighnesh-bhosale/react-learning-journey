import React from 'react'
import Rightcard from './rightcard';

const Rightcontent = (props) => {
  console.log(props)
  return (
    <div className=' flex flex-nowrap gap-9 p-3 w-2/3 h-full overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return  <Rightcard key={idx} id ={idx} img ={elem.img} tag ={elem.tag} intro= {elem.intro}/>
      })}
      
    </div>
  )
}

export default Rightcontent
