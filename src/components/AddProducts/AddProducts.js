import React,{useEffect, useState} from "react";
import {_apiurlproduct,_apiurlcategory} from '../../shared/ApiConstants'
import axios from 'axios';


export default function AddProducts() {
  const [output,setOutput]=useState()
  const [productName,setProductName] =useState();
  const [categoryName,setCategoryName] =useState();
  const [productDescription,setProductDescription] =useState();
  const [basicPrice,setBasicPrice]=useState();
  const [file,setFile]=useState()
  const [categoryList,setCategoryList]=useState([])

  useEffect(()=>{
     axios.get(_apiurlcategory+"fetch").then((res)=>{
      setCategoryList(res.data)
     })
  },[])

  const handleChange= (event) =>{
    setFile(event.target.files[0])
  }

  const handleSubmit =()=>{
    var formData = new FormData();
    formData.append("ptitle",productName);
    formData.append("catnm",categoryName);
    formData.append("description",productDescription);
    formData.append("baseprice",basicPrice);
    formData.append("picon",file);
    formData.append('uid', localStorage.getItem("email"));
    
    axios.post(_apiurlproduct+"save",formData).then((res)=>{
      setProductName("");
      setCategoryName("");
      setProductDescription("");
      setBasicPrice("");
      setOutput("Port Product Added Successfully....");
    })

  }

  return (
    <div className="container-fluid py-5">
     <h2> Add Product Here!!!</h2>
     <font style={{ color: "blue" }}>{output}</font>
      <form>
        <div class="form-group">
          <label for="catnm">Product Name :</label>
          <input
            type="text"
            class="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="file">Category :</label>
          <select type="file" class="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} >
           <option>Select Category</option>
           {categoryList.map((row)=>(
            <option>{row.catnm}</option>
           ))}
          </select>
        </div>
        <br />
        <div class="form-group">
          <label for="catnm">Product Description :</label>
          <textarea rows="3"
            class="form-control"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="catnm">Basic Price :</label>
          <input
            type="text"
            class="form-control"
            value={basicPrice}
            onChange={(e) => setBasicPrice(e.target.value)}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="file">Product Icon:</label>
          <input type="file" class="form-control" onChange={handleChange} />
        </div>
        <br />
        <button onClick={handleSubmit} type="button" class="btn btn-warning">
          Add Product
        </button>
      </form>
      <br />
      <br />
    </div>
  )
}
