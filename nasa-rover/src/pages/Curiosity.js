import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { roverPhotosApi } from '../util/apiCalls';

const Curiosity = () => {
  
  const [content, setContent] = useState(null);

  //TODO: Create helper functions to parse through the images

  // get curiosity images from nasa api
  useEffect(() => {
    const setUp = async () => {
      const data = await roverPhotosApi("curiosity", 3);
      setContent(data)
    }
    setUp();
  }, [])

  console.log("we did it: ", content)
  return (
    <div>
      <h1>Curiosity!</h1>
      <p>{content}</p>
    </div>
  )
}

export default Curiosity
