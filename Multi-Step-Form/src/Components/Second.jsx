import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StoreContext/Context'
import Swal from 'sweetalert2'

const Second = () => {
  const{setStep,userData,setUserData}=useContext(multiStepContext)


  const handleNext=()=>{
    if (!userData.email || !userData.country || !userData.district) {
      Swal.fire('Please fill in all the fields!');
    } else {
      setStep(3);
    }
  }
  return (
    <>
    <Box margin={5}>
      <TextField label="Email" variant="filled" value={userData['email']} onChange={(e)=>setUserData({...userData,'email':e.target.value})}/>
    </Box>

    <Box margin={5}>
      <TextField label="Country" variant="filled" value={userData['country']} onChange={(e)=>setUserData({...userData,'country':e.target.value})}/>
    </Box>

    <Box margin={5}>
      <TextField label="District" variant="filled" value={userData['district']} onChange={(e)=>setUserData({...userData,'district':e.target.value})} />
    </Box>

    <Box margin={5}>
      <Button variant="contained" color='secondary' sx={{marginRight:'7px'}} onClick={()=>setStep(1)}>Previous</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Box>
      </>
  )
}

export default Second