import React from 'react'

const App = () => {
  function submitform(elem){
    elem.preventDefault()
    console.log("form submitted")
  }
  return (
    <div className='parent'>
      <form onSubmit={(elem) =>{
        submitform(elem)
      }

      } >
        <h2>form handling default prevention</h2>
        <input type="text" placeholder='enter username' />
        <button >submit</button>
      </form>
    </div>
  )
}

export default App
