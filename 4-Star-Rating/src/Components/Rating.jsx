import React, { useState } from 'react'

const Rating = () => {
  const array = new Array(5).fill(0)
  console.log(array)
  const [rating, setRating] = useState(0)
  return (
    <div className='container' onClick={(e) => {
      if (e.target.localName !== 'span') {
        setRating(0)
      }
    }}>
      {array.map((star, index) => {
        return (<span
          key={index}
          className={`${index < rating ? "colored" : "uncolored"} star`}
          onClick={(e) => setRating(index + 1)}>&#9733;
          </span>)
          
          
      })}
    </div>
  )
}

export default Rating