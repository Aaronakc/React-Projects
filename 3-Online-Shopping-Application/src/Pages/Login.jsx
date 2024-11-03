import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isLoggedIn } from '../Redux/action'

const Login = () => {
  let userReducer=(userInfo,setUserInfo)=>{
    return{
      ...userInfo,[setUserInfo.target.name]:setUserInfo.target.value
    }

  }

  let userInfo=isLoggedIn()
  let [person,setPerson]=useReducer(userReducer,userInfo?userInfo:{})
  const navigate=useNavigate()

  const handleLogIn =e =>{
    e.preventDefault()
    if(!person.username || !person.email || !person.password){
      Swal.fire('Alert!','All fields are Compulsory','warning')
    }
    else{
      localStorage.setItem('userInfo',JSON.stringify(person))
      navigate('/')
    }
  }
  return (
    <>
   <Box padding={6} mx='auto' my={9} boxshadow={'0 0 10px gray'} width={'30%'}bgcolor={'#212121'} borderRadius={'10px'}>
   <Typography textAlign={'center'} sx={{marginBottom:'15px',color:'whitesmoke'}}>LOGIN FORM</Typography>
   <TextField  label="Username" variant="filled"   fullWidth style={{backgroundColor: 'white', color: 'black' }} sx={{marginBottom:'15px'}} onChange={setPerson} name={'username'}/>
   <TextField  label="Email" variant="filled" fullWidth style={{backgroundColor: 'white', color: 'black' }}  sx={{marginBottom:'15px'}} onChange={setPerson} name={'email'}/>
   <TextField  label="Password" variant="filled" style={{backgroundColor: 'white', color: 'black' }} fullWidth  sx={{marginBottom:'15px'}} onChange={setPerson} name={'password'}/>
   <Button variant='contained' fullWidth onClick={handleLogIn}>LOGIN</Button>
   </Box>
   </>
  )
}

export default Login