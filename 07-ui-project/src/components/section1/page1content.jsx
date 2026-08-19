import React from 'react'
import Rightcontent from './rightcontent'
import Leftcontent from './leftcontent'
const Page1content = (props) => {
  return (
    <div className='flex w-full h-[80vh] gap-10 py-5 px-5'>
      <Leftcontent />
      <Rightcontent users = {props.users}/>
    </div>
  )
}

export default Page1content
