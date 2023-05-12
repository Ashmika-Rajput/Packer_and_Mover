import React,{useState} from "react";
import axios from "axios";
import { _apiurluser } from "../../shared/ApiConstants";

export default function Register() {
  const [output,setOutput]=useState()
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [mobile,setMobile] =useState();
  const [address,setAddress]=useState();
  const [city,setCity]=useState();
  const [gender,setGender]=useState();

  const handleSubmit=()=>{
    const userDetails={"name":name,
                       "email":email,
                       "password":password,
                       "mobile":mobile,
                       "address":address,
                       "city":city,
                       "gender":gender};

    axios.post(_apiurluser+"save",userDetails).then((response)=>{
      console.log("user details",userDetails);
      console.log("response",response);
      setOutput("User register successfully");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    });
   }

  return (
    <div className="container-fluid py-5">
      <h2 > Register Here....</h2>
      <span style={{"color":"green"}}>{output}</span>
      <form>
      <div class="form-group">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              type="text"
              id="email"
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
              type="password"
              class="form-control"
              id="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="mobile" class="col-sm-2 col-form-label">
            Mobile
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="mobile"
              value={mobile}
              onChange={e=>setMobile(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="address" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              type="text"
              id="address"
              value={address}
              onChange={e=>setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="city" class="col-sm-2 col-form-label">
            City
          </label>
          <div class="col-sm-10">
            <select
              class="form-control"
              type="text"
              id="city"
              value={city}
              onChange={e=>setCity(e.target.value)}
            >
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
            </select>
          </div>
        </div>
        <br/>
        <div class="form-group row">
          <label for="gender" class="col-sm-2 col-form-label">
            Gender
          </label>
          <div class="col-sm-10">
             
            <input
              type="radio"
              name="gender"
              value='male'
              onChange={e=>setGender(e.target.value)}
            />&nbsp; Male &nbsp;
            <input
              type="radio"
              name="gender"
              value='female'
              onChange={e=>setGender(e.target.value)}
            />&nbsp; Female &nbsp;
          </div>
        </div>
        <div class="col-sm-offset-2 col-sm-10">
      <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
    </div>
      </form>
    </div>
  );
}
