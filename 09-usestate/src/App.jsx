import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increasenum(){
    setnum(num+1)
  }
  function decreasenum(){
    setnum(num-1)
  }
  function resetnum(){
    setnum(0)
  }
  return (
    <div className='main'>
      <h2>{num}</h2>
      <div className='chlid'>
        <button onClick={increasenum}>Increase</button>
        <button onClick={decreasenum}>Decrease</button>
        <button onClick={resetnum}>reset</button>
      </div>
      
    </div>
  )
}

export default App
