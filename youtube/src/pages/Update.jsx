import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Update'
const API_URL_UPDATE = "http://localhost:3000/api/v1/update";
function Update() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [role,setRole] = useState("")
    const { id } = useParams();
    const updateFunction= async (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            email: email,
            role: role
          };
        try{
            await axios.put(`${API_URL_UPDATE}/${id}`,userData).then((response)=> response.data)
            alert("successfully updated");
        }catch(error){
            console.log(error)

        }
    }
  return (
    <div className="createuser">
        <br />
        <h1>Update Member details</h1>
        <form onSubmit={updateFunction} className='form'>
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
  )
}

export default Update