import React, { useContext } from 'react'
import { multiStepContext } from '../StoreContext/Context'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Displaydata = () => {

  const {finalData}=useContext(multiStepContext)
  return (
    <div>
       <TableContainer style={{display:'flex', justifyContent:'center'}}>
      <Table sx={{ minWidth: '70%' ,justifyContent:'center'}} size={'small'} aria-label="caption table">
        <TableHead>
          <TableRow style={{backgroundColor:'burlywood', color:'aliceblue'}}>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>District</TableCell>
          <TableCell>City</TableCell>
          <TableCell>Landmark</TableCell>
          <TableCell>Postal Code</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
        {finalData.map((data,index)=>{
          return(
          <TableRow key={index}>
            <TableCell>{data.firstname}</TableCell>
            <TableCell>{data.lastname}</TableCell>
            <TableCell>{data.contact}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.country}</TableCell>
            <TableCell>{data.district}</TableCell>
            <TableCell>{data.city}</TableCell>
            <TableCell>{data.landmark}</TableCell>
            <TableCell>{data.postalcode}</TableCell>
          </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  )
}

export default Displaydata
