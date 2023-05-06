import React from 'react'

export default function Service() {
 

  return (
    <div>
     <div className="container-fluid pt-5">
     <h2 style={{"textAlign": 'center'}}> Welcome to Service Component</h2>
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{"letter-spacing": "5px"}}>Pricing</h4>
                
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mb-5">Local shifting</h1>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>1 BHK house shifting</h4>
                            <p className="m-0">Rs. 2,000 to Rs. 7,000</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                            
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>2 BHK house shifting</h4>
                            <p className="m-0">Rs. 4,500 to Rs. 8,500</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                           
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>3 BHK house shifting</h4>
                            <p className="m-0">Rs. 5,500 to Rs. 10,500</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="mb-5">Domestic shifting(Other city)</h1>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>1 BHK house shifting</h4>
                            <p className="m-0">Rs. 3,500 to Rs. 20,000</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>2 BHK house shifting</h4>
                            <p className="m-0">Rs. 6,500 to Rs. 27,000</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-4 col-sm-3">
                            <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/icon2.jpg" alt=""/>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h4>3 BHK house shifting</h4>
                            <p className="m-0">Rs. 8,500 to Rs. 35,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
