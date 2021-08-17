import React from 'react'

// styles
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCamera = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {

    //send back selected camera
    props.handleSelectCamera(event.target.value);
  };
  return (
    <div>
       <FormControl className={classes.formControl}>
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
        <FormHelperText>Select Camera</FormHelperText>
      </FormControl>
    </div>
  )
}

export default SelectCamera
