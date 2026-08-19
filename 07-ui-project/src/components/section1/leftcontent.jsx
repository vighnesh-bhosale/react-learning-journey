import React from 'react'
import { MoveUpRight } from 'lucide-react'
import Herotext from './herotext'
import Arrow from './arrow'
const Leftcontent = () => {
  return (
    <div className=' flex flex-col flex-wrap justify-between w-1/3 h-full '>
        <Herotext />
        <Arrow />
    </div>
  )
}

export default Leftcontent
