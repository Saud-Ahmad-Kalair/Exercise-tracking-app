import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../App'
import './header.css'

function Header() {
  const { islogin, Logout } = useContext(Global)

  

  return (
    <div className="container-fluid  head-section p-3">
      <header className="d-flex flex-wrap align-items-center justify-content-center 
                justify-content-md-between ">

        <Link to='/' id='logo'><span style={{ color: '#17a2b8' }}>Fitness</span> App</Link>
        
        {islogin !== true
          ?
          <>
            
              <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
                <Link to="/" className="nav-link px-3 text-white text-decoration-none nav-a
                    link-secondary">Home</Link>
                <Link id='hover' to="/about" className="nav-link px-3 text-white text-decoration-none nav-a
                    link-secondary link-dark">About Us</Link>
                <Link to="/article" className="nav-link px-3 text-white text-decoration-none nav-a
                    link-secondary link-dark">Article</Link>
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/login" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold mx-2">Login</Link>
                <Link to="/signup" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Become Member</Link>
              </div>
            
          </>
          :
          <>
            <div>
              <Link to="/login" className="nav-link px-3 text-white text-decoration-none nav-a
                    link-secondary link-dark">My Activites</Link>
            </div>
            <div>
              <button onClick={() => Logout()} className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Logout</button>
            </div>
          </>
        }


      </header>


    </div >


  )
}

export default Header
