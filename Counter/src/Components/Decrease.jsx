import { Button } from '@mui/material'
import React from 'react'

const Decrease = ({counter,setCounter}) => {
  const handleDecrease=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <div>
        <Button variant="contained" sx={{bgcolor:'#ef5350'}} onClick={handleDecrease} 
         disabled={counter === 0}
        >Decrease</Button>
      </div>
  )
}

export default Decrease