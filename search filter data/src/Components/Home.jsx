import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const[data,setData]=useState([]) // State to store the data fetched from the API
  const[record,setRecord]=useState([]) //state to store the records based on search

  useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  //store data in data and record states
  .then(res=>{
    setData(res.data)
    setRecord(res.data)
  })
  .catch(err=>console.log(err))
  },[])

  const filter=(e)=>{
    setRecord(data.filter(f=>f.name.toLowerCase().includes(e.target.value))) //filter the data by name and update the record based on search
  }
  return (
    <div className='py-5 bg-slate-600'>
      <input type="text" placeholder='enter the person to search' className='w-full p-3 form-control mb-4' onChange={filter}/>
      <table className='table shadow border table-hover' role='button'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
 
 <tbody>
  
   {record.map((d,i)=>{
    return <tr key={i}>
      <td >{d.id}</td>
      <td>{d.name}</td>
      <td>{d.phone}</td>
      <td>{d.email}</td>
    </tr>
   })}
  
 </tbody>
        
      </table>
      </div>
  )
}

export default Home