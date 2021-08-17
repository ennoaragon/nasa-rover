import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Curiosity = () => {
  
  const [content, setContent] = useState(null);

  //TODO: Create helper functions to parse through the images

  // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3&api_key=fr9whaDN6x918bcnGALL8UWnf1fkHYqItqxxz7dw
  // get curiosity images from nasa api
  useEffect(() => {
    const apiCall = async () => {
      // axios.get(`/curiosity/photos`,null, { params: {
      //   sol: "sol=0",
      //   api_key: process.env.REACT_APP_AXIOS_API_KEY,
      // }})
      axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=fr9whaDN6x918bcnGALL8UWnf1fkHYqItqxxz7dw")
      .then(res=> console.log("Data: ", res.data)).catch(err => console.log("error: ", err.message))
    }
    apiCall();

  }, [])


  return (
    <div>
      <h1>Curiosity!</h1>
      <p>{content}</p>
    </div>
  )
}

export default Curiosity
