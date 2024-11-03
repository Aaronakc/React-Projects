import { Box, Grid2, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { loadData } from '../Redux/action';

const Home = () => {
  const[displayItems,setDisplayItems]=useState([])
  let[search,setSearch]=useState('')
  const dispatch=useDispatch();
  const items=localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[]

  useEffect(()=>{
    if(items?.length==0){
      dispatch(loadData())
    }
  }, [])

  useEffect(()=>{
    setDisplayItems(
      items.filter(item=>item.title.toLowerCase().match(search.toLowerCase()))
    )
  },[search])
  
  return (
    <>
    <Box mx='auto ' width='90%' my='15px' >
      <TextField placeholder='search' fullWidth onChange={e=>setSearch(e.target.value)}/>
    </Box>
    <Grid2 container spacing={4} padding={4}>
      {
      displayItems.length > 0 &&
      displayItems.map((item,i)=>{
        return <Grid2 key={i} size={{xs: 12, md: 6, lg: 4}}>
          <ProductCard item={item}/>
          </Grid2>
      })
      }

    </Grid2>
    </>
  )
}

export default Home