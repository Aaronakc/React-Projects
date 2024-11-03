import { Delete, DeleteForever, DeleteOutlineSharp } from '@mui/icons-material'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { remove_from_cart, update_cart } from '../Redux/action'

const Cart = () => {
  // let cart_items=JSON.parse(localStorage.getItem('cart_items'));
  let cart_items=useSelector(store=>store.cartStore.cart_items);
  const dispatch=useDispatch()

  const handleDecrease=(cart_item)=>e=>{
    e.preventDefault()

    let quantity=cart_item.quantity-1;
    if(quantity<=0){
      Swal.fire('Warning','quantity cannot be reduced','warning')
    }
    else{
      let item={
        ...cart_item,quantity:quantity
      }
      dispatch(update_cart(item))

    }

  }


  const handleIncrease=(cart_item)=>e=>{
    e.preventDefault()

    let quantity=cart_item.quantity+1;
    if(quantity>cart_item.stock){
      Swal.fire('Warning','Out of stock so cannot be increased','warning')
    }
    else{
      let item={
        ...cart_item,quantity:quantity
      }
      dispatch(update_cart(item))

    }

  }


  const handleRemove=(id)=>e=>{
    e.preventDefault()
    dispatch(remove_from_cart(id))
  }
  return (
    <TableContainer >
    <Table sx={{ minWidth: 650, minHeight: '81vh' }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>S.NO.</TableCell>
          <TableCell align="center">Product</TableCell>
          <TableCell align="center">Product Name</TableCell>
          <TableCell align="center">Unit Price</TableCell>
          <TableCell align="center">Quantity</TableCell>
          <TableCell align="center">Total Price</TableCell>
          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cart_items.map((cart_item,index) => (
          <TableRow
            key={cart_item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index+1}
            </TableCell>
            <TableCell align="center">
              <img src={cart_item.image} style={{height:'100px'}}/>
            </TableCell>
            <TableCell align="center">{cart_item.title}</TableCell>
            <TableCell align="center">{cart_item.price}</TableCell>
            <TableCell align="center">
              <Button sx={{fontSize:'30px', paddingLeft: '10px'}}color='error' onClick={handleDecrease(cart_item)}>-</Button>
              {cart_item.quantity}
              <Button sx={{fontSize:'30px', paddingRight: '10px'}} color='success' onClick={handleIncrease(cart_item)}>+</Button>
              </TableCell>
            <TableCell align="center">{cart_item.quantity*cart_item.price.toFixed(2)}</TableCell>
            <TableCell align='center'>
              <Button variant='contained' color='error' onClick={handleRemove(cart_item.id)}>
                <DeleteOutlineSharp/>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Cart