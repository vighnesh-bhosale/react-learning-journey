import React, { useState } from 'react'

const App = () => {
    const [title, settitle] = useState('')
    const [details, setdetails] = useState('')
    const [task, settask] = useState([])

    function submitform(e){
        e.preventDefault()
        console.log(title)
        console.log(details)
        const copytask = [...task]
        copytask.push({title,details})
        settask(copytask)
        settitle('')
        setdetails('')
    }

    function deletenote(idx){
       const delcopy = [...task]
       delcopy.splice(idx,1)
       settask(delcopy)
    }
    
  return (
    <div className='bg-black text-white min-h-screen lg:flex'>
        <form onSubmit={(e) => {
            submitform(e)
        }} className='flex flex-col items-start gap-5 p-10 lg:w-1/2 ' >
            <h1 className='text-xl '>Add notes </h1>

            <input 

                type="text" 
                placeholder='enter notes heading '
                className='px-4 py2 border-2 rounded w-full '
                value={title}
                onChange={(e) =>{
                    settitle(e.target.value)
                }}
            />


            <textarea 
    
                placeholder='enter notes'
                className='px-4 py2 border-2 rounded h-32 w-full'
                value={details}
                onChange={(e) =>{
                    setdetails(e.target.value)
                }}
            ></textarea>
            
            <button className='bg-white active:bg-gray-300 text-black px-4 py-2 rounded'>Add notes</button>
        
        </form>

        <div className=' p-10 gap-5 lg:w-1/2 lg:h-screen '>
            <h1 className='text-xl '>Your notes </h1> 
            <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full p-4'>
                {task.map(function(elem,idx){
                    return <div key ={idx} className='flex justify-between flex-col items-start bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10")] bg-cover rounded h-50 w-40 text-black p-8'>

                        <h4 className='text-xl font-bold leading-tight'>{elem.title}</h4>
                        <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>

                        <button onClick ={() =>{
                            deletenote(idx)
                        }} 
                        className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
                </div>
                })}
            
        
            </div>
        </div>
        
    </div>
  )
}

export default App
