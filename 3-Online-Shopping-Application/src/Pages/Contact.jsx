import { Box, Button, Typography, TextField, Link, Grid, FormLabel, RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Grid container width={'90%'} margin={'auto'} marginY={'20px'}>
        <Grid item xs={12} sm={12} md={6} lg={6} bgcolor={'#212121'} p={5} sx={{marginBottom:3}}>
          <Typography variant='h3' sx={{ color: 'white' }}>Address</Typography>
          <Typography variant='h4' sx={{ color: 'white' }}>Our Store </Typography>
          <Typography variant='h4' sx={{ color: 'white' }}>Phone:02-2233447 </Typography>
          <Typography variant='h4' sx={{ color: 'white' }}>Email:moreinfo@ourstore.com </Typography>
          <Typography variant='h4' sx={{ color: 'white' }}>Website:www.ourstorekalanki.coms</Typography>
        </Grid>


        <Grid item xs={12} sm={12} md={6} lg={6} bgcolor={'#212121'} p={4} sx={{marginBottom:3}}>
          <Typography variant='h3' sx={{ marginBottom: 2 }} color={'white'}>
            Contact</Typography>
          <TextField label="email" fullWidth placeholder='enter your email here' variant='filled' required sx={{backgroundColor: 'white', color: 'black', marginBottom: 2 }}  />
          <TextField label="Subject" fullWidth placeholder='enter the subject here' variant='filled'sx={{backgroundColor: 'white', color: 'black', marginBottom: 2 }} />
          <TextField label='Message' placeholder='leave a message' fullWidth variant='filled' multiline rows={5} sx={{backgroundColor: 'white', color: 'black', marginBottom: 1 }}></TextField>
          <Button variant='contained' size='large' fullWidth sx={{  marginTop:'10px'}}>Submit</Button>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={12}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.780569030535!2d85.27856847405249!3d27.693176126118914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187a97f390b1%3A0xec3f47092df0d4ca!2sKalanki%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1726951343591!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact