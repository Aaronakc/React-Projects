import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import "./index.css"

const App = () => {
  const[category,setCategory]=useState('general')
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <News category={category}/>
      </div>
  )
}

export default App