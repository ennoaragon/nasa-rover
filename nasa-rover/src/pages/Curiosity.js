import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

//componenets
import SelectCamera from '../components/SelectCamera'

// styles
// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const cams = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

const Curiosity = () => {
  
  const [photos, setPhotos] = useState(null);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  //TODO: Create helper functions to parse through the images

  // get curiosity images from nasa api
  useEffect(() => {
    const setUp = async () => {
      const data = await roverPhotosApi("curiosity", 1000);
      // console.log("data:", data)
      setPhotos(data.photos)
      return null;
    }
    setUp();
  }, [])

  const handleSelectCamera = (camera) => {
    setSelectedCam(camera);
  } 
  // console.log("we did it: ", photos)
  console.log("selectedCam: ", selectedCam)
  return (
    //  name, launch date, mission status and number of photos for the rover that is selected

    <div>
      <div>
        <h1>Curiosity</h1> <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera}/>

      </div>
     
      {  photos !== null && <h3>number of photos: {photos.length} </h3>}

      { photos === null ? <div><CircularProgress size={75}/></div> : 
      <div>
        { photos.map((photo) => {
          return <>
            <div>
              name: {photo.camera.name}
            </div>
            <div>
            launch_date: {photo.rover.launch_date}
            </div>
            <div>
            mission status: {photo.rover.status}
            </div>
            <div>
            
            </div>
          </>
        })} 
      </div>
      }
    </div>
  )
}

export default Curiosity
