import React,{useState} from 'react';
import axios from "axios";
import { _apiurluser } from "../../shared/ApiConstants";
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [output,setOutput]=useState()
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate =useNavigate()

 
  const handleSubmit=()=>{
   
    const userDetails={"email":email,"password":password};

    axios.post(_apiurluser+"login",userDetails).then((response)=>{
     const userDetails=response.data.userDetails;
     localStorage.setItem("token",response.data.token);
     localStorage.setItem("_id",userDetails._id);
     localStorage.setItem("name",userDetails.name);
     localStorage.setItem("email",userDetails.email);
     localStorage.setItem("password",userDetails.password);
     localStorage.setItem("mobile",userDetails.mobile);
     localStorage.setItem("address",userDetails.address);
     localStorage.setItem("city",userDetails.city);
     localStorage.setItem("gender",userDetails.gender);
     localStorage.setItem("role",userDetails.role);
     localStorage.setItem("info",userDetails.info);   
     
     userDetails.role==="admin"?navigate("/admin"):navigate("/user");
    
    }).catch((error)=>{
      setOutput("Invalid user or verify your account....");
      setEmail("");
      setPassword("");      
    });
  };


 
  return (
    <div className="container-fluid py-5">
    <h2 > Login Here....</h2>
    <span style={{"color":"green"}}>{output}</span>
    <form>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            id="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
      </div>
      
      <div class="col-sm-offset-2 col-sm-10">
    <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
  </div>
    </form>
  </div>
  )
}
