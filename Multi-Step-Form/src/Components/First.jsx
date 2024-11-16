import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StoreContext/Context'
import Swal from 'sweetalert2'

const First = () => {
  const{setStep,userData,setUserData}=useContext(multiStepContext)
  


    const handleNext = () => {
    const { firstname, lastname, contact } = userData;
  if (!firstname || !lastname || !contact) {
    Swal.fire('Please fill out all the fields!');
  } else {
    setStep(2); 
  }
}
  
  return (
    <>
   
    <Box margin={5}>
      <TextField label="First Name" variant="filled" value={userData['firstname']} onChange={(e)=>setUserData({...userData,'firstname':e.target.value})} />
    </Box>

    <Box margin={5}>
      <TextField label="Last Name" variant="filled" value={userData['lastname']} onChange={(e)=>setUserData({...userData,'lastname':e.target.value})} />
    </Box>

    <Box margin={5}>
      <TextField label="Contact" variant="filled" value={userData['contact']} onChange={(e)=>setUserData({...userData,'contact':e.target.value})}/>
    </Box>

    <Box margin={5}>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Box>
      </>
  )
}

export default First