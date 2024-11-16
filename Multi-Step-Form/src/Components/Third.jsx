import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multiStepContext } from '../StoreContext/Context'
import Swal from 'sweetalert2'

const Third = () => {

  const{setStep,userData,setUserData,submitData}=useContext(multiStepContext)

  const handleSubmit=()=>{
    if (!userData.city || !userData.landmark || !userData.postalcode) {
      Swal.fire('Please fill in all the fields!');
    } else {
      submitData();
    }
  }
  
  return (
    <>
    <Box margin={5}>
      <TextField label="City" variant="filled" value={userData['city']} onChange={(e)=>setUserData({...userData,'city':e.target.value})}/>
    </Box>

    <Box margin={5}>
      <TextField label="LandMark" variant="filled" value={userData['landmark']} onChange={(e)=>setUserData({...userData,'landmark':e.target.value})}/>
    </Box>

    <Box margin={5}>
      <TextField label="Postal Code" variant="filled" value={userData['postalcode']} onChange={(e)=>setUserData({...userData,'postalcode':e.target.value})}/>
    </Box>

    <Box margin={5} >
      <Button variant="contained" color='secondary' sx={{marginRight:'7px'}} onClick={()=>setStep(2)} >Previous</Button>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
      </>
  )
}

export default Third