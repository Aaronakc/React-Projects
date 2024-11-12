import React, { useState } from 'react'
import Increase from './Components/Increase'
import Decrease from './Components/Decrease'
import Reset from './Components/Reset'
import Count from './Components/Count'
import { Box, Stack } from '@mui/material'

const App = () => {

  const [counter,setCounter]=useState(0)
  return (
   <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Count counter={counter}/>
      <Stack direction="row" spacing={2} marginTop={2}>
      <Increase setCounter={setCounter} counter={counter}/>
      <Decrease setCounter={setCounter} counter={counter}/>
      <Reset setCounter={setCounter} counter={counter}/>
      </Stack>
      </Box>
     

  )
}

export default App