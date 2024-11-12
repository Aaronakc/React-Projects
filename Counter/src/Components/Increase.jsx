import { Button } from '@mui/material'
import React from 'react'

const Increase = ({counter,setCounter}) => {
 const handleIncrease=()=>{
  setCounter(counter+1)
 }
  return (
    <div>
      <Button variant="contained" color='success' onClick={handleIncrease}>Increase</Button>
      </div>
  )
}

export default Increase