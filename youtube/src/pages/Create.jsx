import { useState } from 'react';
import './Layout.css'
import axios from "axios";
const API_URL = "http://localhost:3000/api/v1/createUser";

const Create = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[role,setRole] = useState("")

  const postUserData = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      role: role
    };

    axios.post(API_URL, userData)
      .then((response) => {
        
        console.log('Data posted successfully:', response.data);
        alert("User successfully created");
      })
      .catch((error) => {
        
        console.error('Error posting data:', error);
      });
  };

  return(
    <div className="createuser">
      <br />
      <h1>Create Member</h1>
      <form onSubmit={postUserData} className='form'>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <br />       
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="role"
        />        
        <br />
        <br />
        <button type="submit" style = {{backgroundColor:"red",color: "white"}}>Submit</button>
        <br /><br />
      </form>

    </div>
    
  );
};

export default Create;