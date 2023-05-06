import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Auth() {
  const navigate= useNavigate();
  useEffect(()=>{
    var path= window.location.pathname;
    if(path === 'admin' ){
       if(!localStorage.getItem('token') || localStorage.getItem('role') !== 'admin'){
        navigate('/logout')
       }
    }
    else if(path === 'user' ){
      if(!localStorage.getItem('token') || localStorage.getItem('role') !== 'user'){
       navigate('/logout')
      }
   }
   else {
     if(localStorage.getItem('role') === 'admin'){
     navigate('/admin')
    }
    if(localStorage.getItem('role') === 'user'){
      navigate('/user')
     }
     else{
      navigate('/')
     }
   }
  },[]);
  return (
    <div  >
    </div>
  )
}
