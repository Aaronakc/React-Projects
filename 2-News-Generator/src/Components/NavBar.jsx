import React, { useState } from 'react'

const NavBar = ({setCategory}) => {
  const[activeCategory,setActiveCategory]=useState('general')

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark"  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge text-bg-danger text-center p-2">News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'business'? 'active':''}` }aria-current="page" onClick={()=>{
            setCategory('business');
            setActiveCategory('business');

          }
        
          }>Business</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'entertainment'? 'active':''}` }
          aria-current="page"
          onClick={()=>{
            setCategory('entertainment');
            setActiveCategory('entertainment');

          }
          }
           >Entertainment</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'general'? 'active':''}` } aria-current="page" 
          onClick={()=>{
            setCategory('general');
            setActiveCategory('general');

          }
          }>General</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'health'? 'active':''}` }  aria-current="page" 
          onClick={()=>{
            setCategory('health');
            setActiveCategory('health');

          }
          }>Health</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'science'? 'active':''}` } aria-current="page" 
          onClick={()=>{
            setCategory('science');
            setActiveCategory('science');

          }
          }>Science</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'sports'? 'active':''}` }  aria-current="page" 
          onClick={()=>{
            setCategory('sports');
            setActiveCategory('sports');

          }
          }>Sports</div>
        </li>

        <li className="nav-item">
          <div className={`nav-link ${activeCategory === 'technology'? 'active':''}` }  aria-current="page" 
          onClick={()=>{
            setCategory('technology');
            setActiveCategory('technology');

          }
          }>Technology</div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar