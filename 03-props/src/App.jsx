import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div className='parent'>
      <Card user ='aditya tikode' age={22} img='https://images.unsplash.com/photo-1783667711521-aaf123ca2f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user ='vighnesh bhosale' age={21} img='https://images.unsplash.com/photo-1782392429107-fd725ad8d10a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user ='abhishek ghongade' age={23}img='https://plus.unsplash.com/premium_photo-1783502098181-e281dca72cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user ='abhishek ghongade' age={23}img='https://plus.unsplash.com/premium_photo-1753198658295-6b4608f12fc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
      
      
      
    </div>
  )
}

export default App
