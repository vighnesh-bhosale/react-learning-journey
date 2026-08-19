import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
 const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Building creative digital experiences that connect people and ideas.",
    tag: "Creativity"
  },
  {
    img: "https://media.istockphoto.com/id/2216052190/photo/successful-confident-businesswoman-at-workplace-inside-office-woman-with-crossed-arms-smiling.jpg?s=2048x2048&w=is&k=20&c=X5_dxshF-8cUiqDSbiSlHDrGzLspsmWhwKul79lhLx0=",
    intro: "Turning complex problems into simple, beautiful, user-friendly solutions.",
    tag: "Prb_Solving"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    intro: "Learning new technologies and creating projects that make impact.",
    tag: "Technology"
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Building creative digital experiences that connect people and ideas.",
    tag: "Managment"
  },
  {
    img: "https://media.istockphoto.com/id/2216052190/photo/successful-confident-businesswoman-at-workplace-inside-office-woman-with-crossed-arms-smiling.jpg?s=2048x2048&w=is&k=20&c=X5_dxshF-8cUiqDSbiSlHDrGzLspsmWhwKul79lhLx0=",
    intro: "Turning complex problems into simple, beautiful, user-friendly solutions.",
    tag: "Prb_Solving"
  }
  
];
  return (
    <div >
      <Section1 users ={users}/>
      <Section2 />
    </div>
  )
}

export default App
