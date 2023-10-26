import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const API_URL_GET = "http://localhost:3000/api/v1/getUser";
const API_URL_DELETE = "http://localhost:3000/api/v1/deleteUser";

const Home = () => {
  const [users,setUsers] = useState([])

  const deletFunction = async (id) =>{
    try{
      await axios.delete(`${API_URL_DELETE}/${id}`); 
      setUsers(users.filter((user) => user.id !== id));
    } catch(error){
      console.log("error")
    }
  }

  useEffect(() => {
    const frecth = async () => {
      try{
        const response =  await axios.get(API_URL_GET).then((response)=>response.data)
        setUsers(response)

      } catch(error){
        console.log("---get user error",error)
      }
    };
    frecth();
  }, [])
    
    return (
      <div style={{textAlign:"center",width:'50%',marginLeft:"25%",marginTop:"5%"}}>
        <h1>Members</h1>
        <table style={{marginLeft:'10%'}}>
          <thead style={{backgroundColor:"#bda69d"}}>
            <tr style={{padding:'10px',marginLeft:"100px"}}>
              <th>Sno</th>
              <th >Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"#ddc18c"}}>
            
            {users.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td><button style ={{color:"whitesmoke",backgroundColor:"red",margin:'5px'}} onClick={()=>deletFunction(data.id)}> delete</button></td>
                <td>
                  <Link to={`/Update/${data.id}`}><button style ={{color:"whitesmoke",backgroundColor:"blue",margin:'5px'}} >Update</button></Link>
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
        <div></div>
      </div>

    );
  };
  
  export default Home;