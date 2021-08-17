import React, { useEffect, useState, useCallback } from 'react'
import { roverPhotosApi } from '../util/apiCalls';

//componenets
import SelectCamera from '../components/SelectCamera';
// import RoverTable from '../components/RoverTable';
import ImageDetails from '../components/ImageDetails';

// styles
// import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    // margin: "auto",

    overflow: 'hidden',
    overflowX: "hidden",
    maring: "auto",
    // backgroundColor: theme.palette.background.paper,
    // width: "100%",
    // overflowX: "hidden"
  },
  gridList: {
    width: "100%",
    height: 250,
    
  },
}));

const Spirit = () => {

  const classes = useStyles();

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
  }, [])

  const handleGetPhotos = async () => {
    if (isNaN(solValue) ){
      alert("Not A number")
      setSolValue(1000)
      return;
    }
    setPhotosLoading(true)
    const data = await roverPhotosApi("spirit", selectedCam, solValue);
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
      <h1>Spirit </h1> 
      <h3>Launched: June 10th 2003</h3>
      <h2>Mission Status: Complete</h2>
      <SelectCamera cams={cams} handleSelectCamera={handleSelectCamera} handleSolChange={handleSolChange} handleGetPhotos={handleGetPhotos} solValue={solValue}/>
      { photosLoading && <div><CircularProgress size={75}/></div>}
    </div>
    { !photosLoading && 
    <div>
      { photos.length > 0 && 
          <div className={classes.root}>
          <Grid container spacing={1}  >
            {photos.map((photo, id) => {
              if( id > 5)
                return; 
              return <Grid key={photo.img_src} item xs={6}>
                 <div tyle={{height: "100%"}}>
                   <ImageDetails image={photo.img_src} sol={curSol} camera={curCam} width={1}/>
                 </div>
               </Grid>
            }
            )}
          </Grid>
        </div> 
      }
    </div>
    }
    {!photosLoading && photos.length ===0 && <h1> No Images Found</h1>}
  </div>
  )
}

export default Spirit
