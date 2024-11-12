import { Button } from '@mui/material'
import React from 'react'

const Reset = ({counter,setCounter}) => {
  const handleReset=()=>{
  setCounter(0)
  }
  return (
    <div>
      <Button variant="contained" color='secondary' onClick={handleReset}>Reset</Button>
      </div>
  )
}

export default Reset