import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";

export default function Navbar() {
  const [navContent, setNavContent] = useState();

  useEffect(() => {
    setInterval(()=>{
        if (localStorage.getItem("role") === "admin") {
            setNavContent(
              <div className="container-fluid p-0 nav-bar">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                  <a className="navbar-brand px-lg-4 m-0" >
                    <h1 className="m-0 display-4 text-uppercase text-white">
                      Packers and Movers
                    </h1>
                  </a>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav ml-auto p-4">
                      <a className="nav-item nav-link active">
                        <Link to="/"> Admin  : </Link>
                        <span>{localStorage.getItem("email")}</span>
                      </a>
                      <a className="nav-item nav-link ">
                      <Link to="/managerusers">Manage User</Link>
                      </a>
                      <a className="nav-item nav-link ">
                      <Link to="/addcategory">Add Category</Link>
                      </a>
                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <Link to="/pages">Settings</Link>
                      </a>
                      <div className="dropdown-menu text-capitalize">
                        <a className="dropdown-item"><Link to="/changepassword">Change Password</Link></a>
                        <a className="dropdown-item"><Link to="/editprofile">Edit Profile</Link></a>
                      </div>
                    </div>
                      <a className="nav-item nav-link">
                        <Link to="/logout">Logout</Link>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            );
          }
          else if (localStorage.getItem("role") === "user") {
              setNavContent(
                <div className="container-fluid p-0 nav-bar">
                  <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                    <a className="navbar-brand px-lg-4 m-0">
                      <h1 className="m-0 display-4 text-uppercase text-white">
                        Packers and Movers
                      </h1>
                    </a>
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse justify-content-between"
                      id="navbarCollapse"
                    >
                      <div className="navbar-nav ml-auto p-4">
                        <a className="nav-item nav-link active">
                        <Link to="/"> User  : </Link>
                        <span>{localStorage.getItem("email")}</span>
                        </a>
                        <a className="nav-item nav-link">
                          <Link to="/searchads">Search Ads</Link>
                        </a>
                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <Link to="/pages">Settings</Link>
                      </a>
                      <div className="dropdown-menu text-capitalize">
                        <a className="dropdown-item"><Link to="/changepassword">Change Password</Link></a>
                        <a className="dropdown-item"><Link to="/editprofile">Edit Profile</Link></a>
                      </div>
                    </div>
                        <a className="nav-item nav-link">
                          <Link to="/logout">Logout</Link>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              );
            }
          else{
              setNavContent(
                  <div className="container-fluid p-0 nav-bar">
              <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <a className="navbar-brand px-lg-4 m-0">
                  <h1 className="m-0 display-4 text-uppercase text-white">
                    Packers and Movers
                  </h1>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav ml-auto p-4">
                    <a className="nav-item nav-link active">
                      <Link to="/">Home</Link>
                    </a>
                    <a className="nav-item nav-link ">
                      <Link to="/about">About</Link>
                    </a>
                    <a className="nav-item nav-link">
                      <Link to="/contact">Contact</Link>
                    </a>
                    <a className="nav-item nav-link">
                      <Link to="/service">Service</Link>
                    </a>
                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <Link to="/pages">Pages</Link>
                      </a>
                      <div className="dropdown-menu text-capitalize">
                        <a className="dropdown-item">Blogs</a>
                        <a className="dropdown-item">Testimonial</a>
                      </div>
                    </div>
                    <a className="nav-item nav-link">
                      <Link to="/register">Register</Link>
                    </a>
                    <a className="nav-item nav-link">
                      <Link to="/login">Login</Link>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
      
              )
          }
 
    },10)
   
  },[]);
  return (
    <div>
      <Auth/>
      {navContent}
    </div>
  );
}
