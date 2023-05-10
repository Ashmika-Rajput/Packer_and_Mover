import React,{useState} from 'react';
import axios from "axios";
import { _apiurluser } from "../../shared/ApiConstants";
import { useNavigate } from 'react-router-dom';


export default function ManageUsers() {
const [managerUsers,setManageUsers] =useState([])
const navigate =useNavigate()

axios.get(_apiurluser+"fetch?role=user").then((res)=>{
  console.log('res',res.data);
  setManageUsers(res.data)
})

const handleUser=(_id,status) => {
  if(status === "block"){
    let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}};
     axios.patch(_apiurluser+'update',updateDetails).then((res)=>{
      console.log(res)
      navigate("/manageusers");
     }).catch((err)=>{
      console.log(err);
     })
  }
  else if(status === 'verify'){
    let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}};
     axios.patch(_apiurluser+'update',updateDetails).then((res)=>{
      console.log(res)
      navigate("/manageusers");
     }).catch((err)=>{
      console.log(err);
     })
  }
  else {
    {
      let deleteDetails={"data":{"_id":_id}};
      axios.delete(_apiurluser+"delete",deleteDetails).then((res)=>{
        console.log(res);
          navigate("/manageusers");
      }).catch((err)=>{
          console.log(err);
      });            
  }

  }

}

  return (
    <div className="container-fluid py-5">
     <h2 style={{"textAlign": 'center'}}> View And Manage user</h2>
    <table className='table table-wrapped'>
      <tr>
        <th>RegId</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>City</th>
        <th>Gender</th>
        <th>Info</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      {managerUsers.map((row)=>(
        <tr>
          <td>{row._id}</td>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.mobile}</td>
          <td>{row.address}</td>
          <td>{row.city}</td>
          <td>{row.gender}</td>
          <td>{row.info}</td>
          <td>
              {row.status==1 && <a style={{"color":"orange","cursor": "pointer"}}  onClick={()=>{ handleUser(row._id,"block") }} >Block User</a>}
              {row.status ===0 &&  <a style={{"color":"Green","cursor": "pointer"}} onClick={()=>handleUser(row._id,"verify")}>Verify User</a>}
          </td>
          <td>{<a style={{"color":"Red","cursor": "pointer"}} onClick={()=>handleUser(row._id,"delete")}>Delete User</a>}</td>
        </tr>
      ))}
    </table>
    </div>
  )
}
