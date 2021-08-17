import React, {useRef, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex", 
    justifyContent: 
    "center", 
    overflow: "hidden",
    alignItems: "center", 
    alignContent:"center",
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 1)"
    }

  },
  image: {
    width: "100%",
    height: 450,
    
  },
  backGround: {
    position:"absolute",  
    background: "rgb(255, 255, 255, .6)", 
  },
  foregroundText:{
    position:"absolute", 
    zIndex: 1,
    '&:h2': {
      margin: 500
    }
  },
}));


const ImageDetails = (props) => {
  const classes = useStyles()
  const [show, setShow ] = useState(false)
  const imgRef = useRef(null);
  // const widthImg = props.width === 2 ? "67%" : "33%"

  const handleShow = () =>{
    setShow(true)
  }
  const handleHide = () =>{
    setShow(false)
  }
  return (
      <div onMouseOver= {() => handleShow()} onMouseLeave={() => handleHide()} >
        <div className={classes.container}>
        {show && <h1 className={classes.foregroundText}>Sol: {props.sol}</h1>}
        {show && <h2 className={classes.foregroundText} style={{marginTop: 100}}>Camera: {props.camera} </h2>}
        {show && <div className={classes.backGround} style={{ width: imgRef.current.clientWidth, height: imgRef.current.clientHeight }}></div>}
        <img className={classes.image} ref={imgRef} src={props.image}  alt={props.title} />
        </div>  
    </div>

  )
}

export default ImageDetails
