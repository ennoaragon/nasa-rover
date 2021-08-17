import React, { useEffect, useState, useCallback } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

//componenets
import SelectCamera from '../components/SelectCamera';
import MediaCard from '../components/MediaCard';

// styles
import { makeStyles } from '@material-ui/core/styles';


// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    display: "flex",
    alignItems: 'center',
    flexDirection: "column"
  },
  cards: {
    margin: "5rem",
    display: "flex",
    maxWdith: "100vw",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    margin: "20px",
    minWidth: 300,
    minHeight: 300
  }
}));

const Opportunity = () => {

  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [selectedCam, setSelectedCam] = useState("FHAZ");
  const [solValue, setSolValue] = useState(1000);
  const [curSol, setCurSol] = useState(1000);
  const [curCam, setCurCam] = useState("FHAZ");
  const [photosLoading, setPhotosLoading] = useState(false);

  // cameras of rover 
  const cams = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];

  // get Opportunity images from nasa api
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
    const data = await roverPhotosApi("opportunity", selectedCam, solValue);
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
      <h1>Opportunity</h1> 
      
      <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera} handleSolChange={handleSolChange} handleGetPhotos={handleGetPhotos} solValue={solValue}/>

    </div>
    { photosLoading && <div><CircularProgress size={75}/></div>}
    { photos.length > 0 &&  
      <div> 
        {  photos !== null && <h3>Sol: {curSol} Camera: {curCam} Number of Photos: {photos.length} </h3>}

        { photos !== null &&
        <>
          { photos.length > 0 && 
          <div className={classes.cards}>
            { photos.map((photo,id) => {
              if( id > 5)
                return;
              const status = `Mission Status: ${photo.rover.status}`;
              const launch = `launch date: ${photo.rover.launch_date}`
              return <div key={id} className={classes.card} >
                  <MediaCard name={status} image={photo.img_src} description={launch} />
                </div>
            })} 
          </div>
          }
        </>
        }
      </div>
    }
      {photos.length === 0 && <h1>No Images Found Try another Sol or Camera</h1>}
  </div>
  )
}

export default Opportunity
