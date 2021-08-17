import React, { useEffect, useState, useCallback } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

import { selectedCameraArray } from '../util/helpFunctions';
//componenets
import SelectCamera from '../components/SelectCamera'

// styles
// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';



const Curiosity = () => {
  
  const [photos, setPhotos] = useState(null);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  const [selectedPhotos, setSelectedPhotos] = useState(null);

  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  // get curiosity images from nasa api
  useEffect(() => {
    const setUp = async () => {
      const data = await roverPhotosApi("curiosity", 1000);
      // console.log("data:", data)
      setPhotos(data.photos)
     
      setSelectedPhotos( selectedCameraArray(data.photos, selectedCam))
      return null;
    }
    setUp();
  }, [])

  const handleSelectCamera = useCallback((camera) => {
    setSelectedCam(camera);
    setSelectedPhotos( selectedCameraArray(photos, camera))
  }, [])
  // console.log("we did it: ", photos)
  // console.log("selectedCam: ", selectedCam)
  console.log( "selectedPhotos", selectedPhotos)
  return (
    //  name, launch date, mission status and number of photos for the rover that is selected

    <div>
      <div>
        <h1>Curiosity</h1> <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera}/>

      </div>
     
      {  photos !== null && <h3>number of {selectedCam} photos: {selectedPhotos.length} </h3>}

      { photos === null ? <div><CircularProgress size={75}/></div> : 
      <div>
        { selectedPhotos.map((photo,id) => {
          return <div key={id}>
            <div>
              name: {photo.camera.name}
            </div>
            <div>
            launch_date: {photo.rover.launch_date}
            </div>
            <div>
            mission status: {photo.rover.status}
            </div>
          </div>
        })} 
      </div>
      }
    </div>
  )
}

export default Curiosity
