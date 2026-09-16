import React from 'react'

const App = () => {
  localStorage.clear()
  localStorage.setItem('user','Vighnesh')
  localStorage.getItem('user')
  localStorage.removeItem('user')
  
  return (
    <div>
      vighnesh
    </div>
  )
}

export default App
