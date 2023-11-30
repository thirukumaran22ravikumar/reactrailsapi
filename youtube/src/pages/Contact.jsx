import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL_GET = "http://localhost:3000/api/v1/uploads"; // Update the API endpoint

const Contact = () => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    // Fetch the image path
    axios.get(API_URL_GET)
      .then(response => {
        setImagePath(response.data.imagePath);
      })
      .catch(error => {
        console.error('Error fetching image path:', error);
      });
  }, []);

  if (!imagePath) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={imagePath} alt="Image" />
    </div>
  );
};

export default Contact;
