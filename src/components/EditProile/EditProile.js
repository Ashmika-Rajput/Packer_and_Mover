import React,{useState,useEffect} from "react";
import axios from "axios";
import { _apiurluser } from "../../shared/ApiConstants";


export default function EditProile() {
  const [userDetails,setUserDetails]=useState([])
  const [output,setOutput]=useState()
  const [name,setName]=useState();
  const [mobile,setMobile] =useState();
  const [address,setAddress]=useState();
  const [city,setCity]=useState();
  const [gender,setGender]=useState();

  useEffect(()=>{
       axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((res)=>{
        console.log("res",res.data[0]);   
        setName(res.data[0].name);
        setMobile(res.data[0].mobile);
        setAddress(res.data[0].address);
        setCity(res.data[0].city);
       })
  },[])

  const handleSubmit=()=>{
    const conditionDetails={"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}
     const updateDetails= {"condition_obj":{"email":localStorage.getItem("email")},"set_condition":conditionDetails}
     axios.patch(_apiurluser+'update',updateDetails).then((res)=>{
      setOutput("Profile edited Successfully")
     }).catch((err)=>{
      setOutput(err)
     })
  }

  return (
    <div className="container-fluid py-5">
     <h2 > Edit Profile Here!!!!</h2>
     <span style={{"color":"green"}}>{output}</span>
      <form>
      <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              id="name"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="mobile" class="col-sm-2 col-form-label">
            Mobile
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={e=>setMobile(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <textarea
              type="text"
              id="address"
              value={address}
              onChange={e=>setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="city" class="col-sm-2 col-form-label">
            City
          </label>
          <div class="col-sm-10">
            <select
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
      <button type="button" onClick={handleSubmit} class="btn btn-success">Save</button>
    </div>
      </form>
    </div>
  )
}
