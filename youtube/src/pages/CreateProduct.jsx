import { useState } from 'react';
import './Layout.css';
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/createProduct";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [Details, setDetails] = useState("");
  const [Price, setPrice] = useState("");
  const [File, setFile] = useState(null); // Use null to represent the file

  const postUserData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("details", Details);
    formData.append("rate", Price);
    formData.append("image", File);
    console.log(File,"------------File")

    axios.post(API_URL, formData)
      .then((response) => {
        console.log('Data posted successfully:', response.data);
        alert("Product successfully created");
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="createuser">
      <br />
      <h1>Create Product</h1>
      <form onSubmit={postUserData} className='form'>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <br />
        <br />
        <input
          type="text"
          value={Details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Product Details"
        />
        <br />
        <br />
        <input
          type="text"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
        />
        <br />
        <br />
        <input style={{marginLeft:'60px',color:'red'}}
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "red", color: "white" }}>Submit</button>
        <br /><br />
      </form>
    </div>
  );
};

export default CreateProduct;
