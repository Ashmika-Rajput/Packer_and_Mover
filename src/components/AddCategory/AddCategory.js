import React,{useState} from "react";
import {_apiurlcategory} from '../../shared/ApiConstants'
import axios from 'axios';

export default function AddCategory() {
  const [output,setOutput] =useState()
  const [categoryName,setCategoryName] =useState();
  const [file,setFile]=useState()
  //const [file1,setFile1]=useState()

  const handleChange= (event) =>{
    setFile(event.target.files[0])
    //setFile1(event.target.files[1])
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    console.log("form data:",formData);
    formData.append('catnm', categoryName);
    formData.append('caticon', file);
    //formData.append('caticon', file1);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_apiurlcategory+"save", formData, config).then((response) => {
      setCategoryName("");
      setOutput("Category Added Successfully....");
    });
  }  


  return (
    <div className="container-fluid py-5">
      <h2> Add Category Here!!!</h2>
      <font style={{ color: "blue" }}>{output}</font>
      <form>
        <div class="form-group">
          <label for="catnm">Category Name:</label>
          <input
            type="text"
            class="form-control"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="file">Category Icon:</label>
          <input type="file" class="form-control" onChange={handleChange} />
        </div>
        <br />
        {/* <div class="form-group">
          <label for="file">Category Icon 1:</label>
          <input type="file" class="form-control" onChange={handleChange} />
        </div>
        <br /> */}

        <button onClick={handleSubmit} type="button" class="btn btn-warning">
          Add Category
        </button>
      </form>
      <br />
      <br />
    </div>
  );
}
