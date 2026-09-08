import React, { useState } from 'react'

const App = () => {
    const [title, settitle] = useState('')

  function submitform(elem){
    elem.preventDefault()
    console.log("form submitted",title)
    settitle('')
  }
  return (
    <div className='parent'>
      <form onSubmit={(elem) =>{
        submitform(elem)
      }

      } >
        <h2>handle input with two way binding</h2>
        <input type="text"
         placeholder='enter username'
         value={title}
         onChange={(elem) =>{
            settitle(elem.target.value)

        }}
         />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
