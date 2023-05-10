import React,{useState} from 'react';
import axios from "axios";
import { _apiurluser } from "../../shared/ApiConstants";


export default function ChangePassword() {
  const [output,setOutput] =useState();
  const [oldPassword, setOldPassword] =useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword,setConfirmPassword] =useState();

  const handleSubmit =() =>{
     axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+oldPassword).then((res)=>{

      if(newPassword === confirmPassword){
            const updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":confirmPassword}}
            axios.patch(_apiurluser+'update',updateDetails).then((res)=>{
              setOutput("Password changes successfully....");
              setOldPassword("");
              setNewPassword("");
              setConfirmPassword("");
            }).catch((err)=>{
              setOutput(err)
            })
      }
      else{
        setOutput("New password and confirm password must match")
      }
     }).catch((error)=>{
      setOutput("Invalid old password")
     })
  }
  return (
    <div className="container-fluid py-5">
     <h2 >Change Password Here!!!!</h2>
     <h6 style={{"color":"blue"}}>{output}</h6>
     <br/>
     <form>
      <div class="form-group row">
        <label for="oldPassword" class="col-sm-2 col-form-label">
          Old Password
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="email"
            value={oldPassword}
            onChange={e=>setOldPassword(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="newPassword" class="col-sm-2 col-form-label">
          New Password
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="email"
            value={newPassword}
            onChange={e=>setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="confirmPassword" class="col-sm-2 col-form-label">
          Confrim Password
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="email"
            value={confirmPassword}
            onChange={e=>setConfirmPassword(e.target.value)}
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
