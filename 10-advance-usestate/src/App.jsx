import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState({user:'Abhi',age:23})
  const clickedbtn = () =>{
    const newnum = {...data}
    newnum.user ='Vighnesh'
    newnum.age = 21
    setdata(newnum)
  }
  return (
    <div className='parent'>
      <h2>{data.user} , {data.age}</h2>
      <button onClick={clickedbtn}>click</button>
    </div>
  )
}

export default App
