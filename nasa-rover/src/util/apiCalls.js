import axios from 'axios'

// dynamic api call for the photos
export const roverPhotosApi = async (rover, sol) => {
 try{
  const url = process.env.REACT_APP_AXIOS_NASA_ROVER;
  const apiKey = process.env.REACT_APP_AXIOS_API_KEY;

  console.log("url: ", url, "api: ", apiKey)
  
  // const res = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=fr9whaDN6x918bcnGALL8UWnf1fkHYqItqxxz7dw")

  const res = await axios.get(`${url}/${rover}/photos?sol=${sol}&api_key=${apiKey}`);

  console.log("Data: ", res.data)
  return res.data;
 }
 catch(err){
  console.log("error: ", err.message)
  return null
 }
  // .then(res=> console.log("Data: ", res.data)).catch(err => console.log("error: ", err.message))

}