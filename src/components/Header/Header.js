import React,{useState,useEffect} from 'react';


export default function Header() {
    const [headerContent,setHeaderContent] = useState()

useEffect(()=>{
    setInterval(()=>{
        if(localStorage.getItem("role") === "admin" || localStorage.getItem("role") === "user"){
            setHeaderContent(
                <div className="container-fluid p-0 mb-5">
                    <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                       <img className="w-100" src="assets/img/bg6.png" alt="Image" style={{"height" : "450px"}}/>
                    </div>
                </div>
            )
        }
        else{
            setHeaderContent(
                <div className="container-fluid p-0 mb-5">
                <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img className="w-100" src="assets/img/bg1.jpg" alt="Image" style={{"height" : "450px"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-primary font-weight-medium m-0">We have been packing and moving</h2>
                                <h2 className="text-white m-0">* SINCE 2010 *</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="assets/img/bg2.jpg" alt="Image" style={{"height" : "450px"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-primary font-weight-medium m-0">We have been packing and moving</h2>
                                <h2 className="text-white m-0">* SINCE 2010 *</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="assets/img/bg3.jpg" alt="Image" style={{"height" : "450px"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-primary font-weight-medium m-0">We have been packing and moving</h2>
                                <h2 className="text-white m-0">* SINCE 2010 *</h2>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            )
        }
    },10)
},[])
  return (
    <div >
      {headerContent}
    </div>
  )
}
