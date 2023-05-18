import React,{useEffect} from 'react';
import { useNavigate,useParams,Navigate } from 'react-router-dom';
import axios from 'axios';
import { _apiurluser } from '../../shared/ApiConstants';


export default function VerifyUser() {
  const params =useParams();
  console.log("email",params);
  const navigate = useNavigate();

  useEffect(()=>{
    let updateDetails={"condition_obj":{"email":params.email},"set_condition":{"status":1}};
     axios.patch(_apiurluser+'update',updateDetails).then((res)=>{
      console.log(res)
      navigate("/");
     }).catch((err)=>{
      console.log(err);
     })
  })

  return (
    <div className="container-fluid py-5">
       <Navigate to ='/' />
    </div>
  )
}
