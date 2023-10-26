import axios from "axios";
import './App.css';
// import Books from "./components/books";
import { useEffect, useState } from "react";
// import { FaSearch } from 'react-icons/fa';

const API_URL = "http://localhost:3000/api/v1/books";

function getApiData(){
  return axios.get(API_URL).then((response)=>response.data)
}
function App() {
  // const[books,setBooks] = useState("")
  const [books, setBooks] = useState(""); // or an appropriate placeholder value
  const [name,setName] = useState('')
  useEffect(() =>{
    let mounted = true;
    
    getApiData().then((items)=> {
      console.log("Data from API:", items);
      if(mounted){
        console.log("Updating books state");
        setBooks(items)
      }
    });
    return ()=>{
      mounted=false
    };
  },[books]);

  return (
    <div>
      <div>
        <div className="App">
          <h1 className="title" >Emart</h1>
        </div>
      </div>


      <div className="createUser">
        <input className = "name" type="text" value ={name} onChange={(e) => setName(e.target.value)} placeholder="Email address"></input>
      </div>
     

      
    </div>

  );
}

export default App;


