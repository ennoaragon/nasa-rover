import React, {useEffect} from 'react'

// styles
import { makeStyles, withStyles  } from '@material-ui/core/styles';
// // import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: "lightgray"
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    alignContent: "center",
    justifyItems: 'center',
    justifyContent: "center",
  },

}));


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const SelectCamera = (props) => {
  const classes = useStyles();

  useEffect(()=> {

  }, [props.solValue])
  const handleChange = (event) => {

    //send back selected camera
    props.handleSelectCamera(event.target.value);
  };

  console.log(props.solValue)
  const handleSolChange = (event) => {
    props.handleSolChange(event.target.value);
  }
  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="sol-input">SOL</InputLabel>
        <BootstrapInput id="sol-input" defaultValue={props.solValue } onChange={handleSolChange}/>
      </FormControl>
       <FormControl className={classes.formControl}>
       <InputLabel htmlFor="select-camera">Camera</InputLabel>
        <NativeSelect
          defaultValue={"FHAZ"}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          {props.cams.map((cam,id) => {
            return <option value={cam} key={id}>{cam}</option>
          } )}
       
        </NativeSelect>
      </FormControl>
      <Button className={classes.button} onClick={() => props.handleGetPhotos()} size="large">
          Submit
      </Button>
    </div>
  )
}

export default SelectCamera
