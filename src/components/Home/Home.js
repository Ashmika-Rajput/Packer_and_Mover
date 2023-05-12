import React from 'react'

export default function Home() {
  return (
    <div className="container-fluid py-5">
        <h2 style={{"textAlign": 'center'}}> Welcome to Home Component</h2> 
        <div className="container">
            <div className="section-title">
                <h1 className="display-4">Serving Since 2010</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Our Story</h1>
                    <h5 className="mb-3">Pack and Move your belongings including furniture, suitcases, artifacts, and furnishings, among others safely.This helps to ease out the moving process and it hassle-free.</h5>
                    <a href="" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
                <div className="col-lg-4 py-5 py-lg-0" style={{"min-height": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="assets/img/bg1.jpg" style={{"object-fit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Our Vision</h1>
                    <p>To make shifting smooth,hassle-free and with adequate protection.</p>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Packing the goods</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Loading the material.</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i> Moving stuff</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i> Unloading the items</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>  Packing the goods</h5>
                    <a href="" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}
