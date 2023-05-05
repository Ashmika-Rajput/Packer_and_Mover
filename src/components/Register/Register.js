import React,{useState} from "react";

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
    setOutput("Successufully submitted...!");
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
  }

  return (
    <div className="container-fluid py-5">
      <h2 > Register Here....</h2>
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
      <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
    </div>
      </form>
    </div>
  );
}
