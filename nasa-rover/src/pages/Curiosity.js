import React, { useEffect, useState, useCallback } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

import { selectedCameraArray } from '../util/helpFunctions';
//componenets
import SelectCamera from '../components/SelectCamera';
import RoverTable from '../components/RoverTable';
// styles
// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const Curiosity = () => {
  
  const [photos, setPhotos] = useState(null);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  // get curiosity images from nasa api
  useEffect(() => {
    const setUp = async () => {
      const data = await roverPhotosApi("curiosity", 1000);
      // console.log("data:", data)
      setPhotos(data.photos)
      const tempPhotos = selectedCameraArray(data.photos, selectedCam);
      setSelectedPhotos( tempPhotos)
      return null;
    }
    setUp();
  }, [])

  const handleSelectCamera = useCallback((camera) => {
    setSelectedCam(camera);
    setSelectedPhotos( selectedCameraArray(photos, camera))
  }, [photos])

  // console.log("selectedPhotos: ", selectedPhotos)

  return (
    //  name, launch date, mission status and number of photos for the rover that is selected

    <div style={{maxWidth: "80%"}}>
      <div>
        <h1>Curiosity</h1> <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera}/>

      </div>
     
      {  photos !== null && <h3>number of {selectedCam} photos: {selectedPhotos.length} </h3>}

      { photos === null ? <div><CircularProgress size={75}/></div> : 
      <div>
        { selectedPhotos.length > 0 && <RoverTable  photos={selectedPhotos } />}
        {/* { selectedPhotos.map((rover,id) => {
          return <div key={id}>
            
            <div>
              name: {rover.camera.name}
            </div>
            <div>
            launch_date: {rover.rover.launch_date}
            </div>
            <div>
            mission status: {rover.rover.status}
            </div>
          </div>
        })}  */}
      </div>
      }
    </div>
  )
}

export default Curiosity
