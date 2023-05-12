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
      const userInfo=response.data.userDetails;
      console.log('userInfo',userInfo);
     localStorage.setItem("token",response.data.token);
     localStorage.setItem("_id",userInfo._id);
     localStorage.setItem("name",userInfo.name);
     localStorage.setItem("email",userInfo.email);
     localStorage.setItem("password",userInfo.password);
     localStorage.setItem("mobile",userInfo.mobile);
     localStorage.setItem("address",userInfo.address);
     localStorage.setItem("city",userInfo.city);
     localStorage.setItem("gender",userInfo.gender);
     localStorage.setItem("role",userInfo.role);
     localStorage.setItem("info",userInfo.info);   
     
     userInfo.role==="admin"?navigate("/admin"):navigate("/user");
    
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
      <div class="form-group">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="email"
            class="form-control"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
           class="form-control"
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
