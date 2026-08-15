import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar />
      <div className='card'>
        <h1>vighnesh bhosale</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, commodi.</p>
      </div>

      <Card />
      <Card />
      

    </div>
  )
}

export default App
