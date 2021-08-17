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
  
  const [photos, setPhotos] = useState([]);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  const [solValue, setSolValue] = useState(1000);
  const [curSol, setCurSol] = useState(1000);
  const [curCam, setCurCam] = useState("FHAZ");


  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  // get curiosity images from nasa api
  useEffect(() => {
    const setUp = async () => {
      const data = await roverPhotosApi("curiosity", selectedCam, 1000);
      setPhotos(data.photos)
      // const tempPhotos = selectedCameraArray(data.photos, selectedCam);
      // setSelectedPhotos( tempPhotos)
      return null;
    }
    setUp();
  }, [])

  // useEffect(()=>{

  // }, [photos] )

  const handleSelectCamera = useCallback((camera) => {
    setSelectedCam(camera);
  }, [photos])

  const handleGetPhotos = async () => {
    if (isNaN(solValue) ){
      alert("Not A number")
      setSolValue(1000)
      return;
    }
    const data = await roverPhotosApi("curiosity", selectedCam, solValue);
    setPhotos( data.photos);
    setCurCam(selectedCam);
    setCurSol(solValue);
  }
  const handleSolChange = (value) => {
    setSolValue(value);
  }

  // console.log(solValue)

  return (
    //  name, launch date, mission status and number of photos for the rover that is selected

    <div style={{maxWidth: "80%"}}>
      <div>
        <h1>Curiosity</h1> <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera} handleSolChange={handleSolChange} handleGetPhotos={handleGetPhotos} solValue={solValue}/>

      </div>
      {  photos !== null && <h3>Sol: {curSol} Camera: {curCam} Number of Photos: {photos.length} </h3>}

      { photos === null ? <div><CircularProgress size={75}/></div> : 
      <div>
        { photos.length > 0 && <RoverTable  photos={photos } />}
      </div>
      }
    </div>
  )
}

export default Curiosity
