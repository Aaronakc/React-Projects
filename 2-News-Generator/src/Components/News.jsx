import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News = ({category}) => {
  const[articles,setArticles]=useState([])

 
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_APIKEY}`)
    .then(res=>res.json())
    .then(data=> {
      setArticles(data.articles)
    console.log(data.articles)
    })
    .catch((error)=>console.log(error))
  },[category])
  return (
    <div>
      <h1 className='text-center my-3'>Breaking <span className="badge text-bg-danger text-center p-1.5">News</span></h1>

  <div className='d-flex flex-wrap  justify-content-center gap-5 '>
      {/* //cards */}
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage} className="d-flex flex-row"/>
      })}
  </div>
      


      </div>
  )
}

export default News