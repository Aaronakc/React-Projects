import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import { ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { BiDollar } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { add_to_cart, isLoggedIn } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({item}) {
  const dispatch=useDispatch()
  const user=isLoggedIn()
  const navigate=useNavigate()
  const addToCart=()=>{
    if(!user){
      Swal.fire({
        title:'Alert',
        text:'You need to login First',
        icon:'warning',
        confirmButtonText:'login',
        showCancelButton:true,
        cancelButtonText:'May be later'
      })
      
      .then(result=>{
        if(result.isConfirmed){
          navigate('/login')

        }
      })
    }
    else{

    let cart_item={
      title: item.title,
      price: item.price,
      image: item.images[0],
      stock: item.stock,
      quantity: 1,
      id: Date.now()
    }

    Swal.fire({
      title:'Confirm?',
      text:'Are you sure, you want to add this to your cart',
      icon:'question',
      showCancelButton:true,
      cancelButtonText:'cancel',
      confirmButtonText:'Yes'
    })

    .then(result=>{
      if(result.isConfirmed){
        dispatch(add_to_cart(cart_item))
      }
      else{
        Swal.fire('Action Cancelled')
      }
    })
  }
}
  return (
    <Card sx={{ maxWidth: 345, boxShadow:3}}>
      <CardMedia
        sx={{ height: 250,
          width: '100%',
          objectFit: 'contain',
         }}
        image={item.images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {item.title}
        </Typography>
       
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'} marginBottom={1}>
        <Typography gutterBottom variant="h7" component="div" noWrap sx={{fontWeight:'bold'}}>
        Brand : {item.brand?item.brand:item.title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'bold'}} >
        Price : ${item.price}
        </Typography>
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
        <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'bold'}}>
         In Stock: {item.stock}
        </Typography>
  
        </Box>
    
        <Typography gutterBottom variant="h7" component="div" marginTop={2}>
         <Rating value={item.rating} readOnly/>
        </Typography>
      </CardContent>
      <CardActions >
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
        <Button size="small" startIcon={<ShoppingCart/>} onClick={addToCart}>ADD TO CART</Button>
        <Button size="small" endIcon={<BiDollar/>}>BUY NOW</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
