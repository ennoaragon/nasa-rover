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
  const [photosLoading, setPhotosLoading] = useState(false);

  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  // get curiosity images from nasa api
  useEffect(() => {

    handleGetPhotos();
  }, [])

  const handleSelectCamera = useCallback((camera) => {
    setSelectedCam(camera);
  },[photos])

  const handleGetPhotos = async () => {
    if (isNaN(solValue) ){
      alert("Not A number")
      setSolValue(1000)
      return;
    }
    setPhotosLoading(true);
    const data = await roverPhotosApi("curiosity", selectedCam, solValue);
    setPhotosLoading(false);
    setPhotos( data.photos);
    setCurCam(selectedCam);
    setCurSol(solValue);
  }
  const handleSolChange = (value) => {
    setSolValue(value);
  }


  return (
    <div style={{maxWidth: "80%"}}>
      <div>
        <h1>Curiosity</h1> <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera} handleSolChange={handleSolChange} handleGetPhotos={handleGetPhotos} solValue={solValue}/>
        { photosLoading && <div><CircularProgress size={75}/></div>}
      </div>
      {  false && <h3>Sol: {curSol} Camera: {curCam} Number of Photos: {photos.length} </h3>}
      {  !photosLoading && photos.length > 0 && <RoverTable  photos={photos } /> }
      {  !photosLoading && photos.length === 0 && <h1>No Images Found</h1> }

    </div>
  )
}

export default Curiosity
