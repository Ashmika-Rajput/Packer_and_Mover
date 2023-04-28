import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a  className="navbar-brand px-lg-4 m-0">
                <h1 className="m-0 display-4 text-uppercase text-white">Packers and Movers</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4">
                    <a className="nav-item nav-link active" ><Link to ='/'>Home</Link></a>
                    <a className="nav-item nav-link"><Link style={{"color":"white"}} to ='/about'>About</Link></a>
                    <a className="nav-item nav-link"><Link style={{"color":"white"}} to ='/contact'>Contact</Link></a>
                    <a className="nav-item nav-link"><Link style={{"color":"white"}} to ='/service'>Service</Link></a>
                    <div className="nav-item dropdown">
                        <a   className="nav-link dropdown-toggle" data-toggle="dropdown"><Link style={{"color":"white"}} to ='/pages'>Pages</Link></a>
                        <div className="dropdown-menu text-capitalize">
                            <a className="dropdown-item">Blogs</a>
                            <a className="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a className="nav-item nav-link"><Link style={{"color":"white"}} to ='/register'>Register</Link></a>
                    <a className="nav-item nav-link"><Link style={{"color":"white"}} to ='/login'>Login</Link></a>
                </div>
            </div>
        </nav>
    </div>
     
    </div>
  )
}
