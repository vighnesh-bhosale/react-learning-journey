import React from 'react'
import { MoveRight } from 'lucide-react'
const Rightcardcontent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-5 flex flex-col justify-between'>
        <h3 className='bg-amber-50 w-8 h-8 rounded-full flex justify-center items-center'>{props.id+1}</h3>
        <p className='text-white leading-tight mt-19'>{props.intro}</p>
            
        <div className='flex justify-between'>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-full'><MoveRight size={16} strokeWidth={1.75} /></button>
        </div>
      </div>
  )
}

export default Rightcardcontent
