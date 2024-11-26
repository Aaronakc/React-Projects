import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Question } from './Question'

const Quiz = () => {


  return (

    <div className='flex w-[50%] bg-slate-50 h-[75%] items-center flex-col'>
      <h1 className='text-2xl font-bold mt-[10px]'>Quiz App</h1>
      <p className='mt-4 text-xl'>1. What is the Capital City of Japan?</p>


      <div className='flex flex-col items-center gap-8 mt-[10px] w-[100%] px-8'>
        <Button variant='outlined' fullWidth>Nepal</Button>
        <Button variant='outlined' fullWidth>Japan</Button>
        <Button variant='outlined' fullWidth>India</Button>
        <Button variant='outlined' fullWidth>Korea</Button>
      </div>



      <div className='mt-5'>
        <Button variant="contained">Next</Button>
      </div>


      <h3 className='mt-3'>1/5</h3>
    </div>

  )
}

export default Quiz