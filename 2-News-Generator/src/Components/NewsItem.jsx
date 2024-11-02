import React from 'react'
import image from "../assets/newsimg.png"

const NewsItem = ({title,description,url,src}) => {
  return (
  
    <div className="card bg-dark shadow bg-body-tertiary rounded" data-bs-theme="dark" style={{width: "23rem",border: 'none'
    }}>
  <img src={src?src:image} 
  style={{height:'40vh'}}className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title text-truncate" style={{height:'5vh'}}>{title}</h5>
    <p className="card-text text-truncate"
    style={{height:"4vh"}}>{description?description:'Click on details for description'}</p>
    <a href={url} className="btn btn-primary d-flex justify-content-center">Details</a>
  </div>
</div>
  )
}

export default NewsItem