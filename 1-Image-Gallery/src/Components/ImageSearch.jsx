import React, { useState } from 'react'

const ImageSearch = ({searchedText}) => {
  const[text,setText]=useState('');

  const onSubmit=(e)=>{
    e.preventDefault();
    searchedText(text);
  }
  return (
    <>
<form onSubmit={onSubmit} >
      <div className="input-group mb-1">
  <input type="text" 
  onChange={(e)=>setText(e.target.value)}
  className="form-control" placeholder="Search Image"/>
  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
</div>
</form>

</>
     
  )
}

export default ImageSearch