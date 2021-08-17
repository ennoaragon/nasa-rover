import React, { useEffect, useState, useCallback } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

//componenets
import SelectCamera from '../components/SelectCamera';
import RoverTable from '../components/RoverTable';
// styles
// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spirit = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  const [solValue, setSolValue] = useState(1000);
  const [curSol, setCurSol] = useState(1000);
  const [curCam, setCurCam] = useState("FHAZ");
  const [photosLoading, setPhotosLoading] = useState(false);


  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];

  // get spirit images from nasa api
  useEffect(() => {
    handleGetPhotos();
  }, [])

  const handleSelectCamera = useCallback((camera) => {
    setSelectedCam(camera);
  }, [photos])

  const handleGetPhotos = async () => {
    if (isNaN(solValue) ){
      alert("Not A number")
      setSolValue(1000)
      return;
    }
    const data = await roverPhotosApi("spirit", selectedCam, solValue);
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
      <h1>Spirit</h1> 
      
      <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera} handleSolChange={handleSolChange} handleGetPhotos={handleGetPhotos} solValue={solValue}/>
      { photosLoading && <div><CircularProgress size={75}/></div>}
    </div>
    {  photos !== null && <h3>Sol: {curSol} Camera: {curCam} Number of Photos: {photos.length} </h3>}

    { photos !== null && 
    <div>
      { photos.length > 0 && <RoverTable  photos={photos } />}
    </div>
    }
  </div>
  )
}

export default Spirit
