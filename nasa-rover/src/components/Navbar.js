import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex"
  
  },
}));

const locations =  [  '',
'curiosity',
'opportunity',
'spirit']

const Navbar = () => {
  const classes = useStyles();
  const location = window.location.pathname.split("/")[1]
  const [value, setValue] = useState(locations.indexOf(location));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{

  }, [window.location.pathname])
  return (
    <div >
    <AppBar position="static" className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" {...a11yProps(0)} component={Link} to="/"/>
        <Tab label="Curiosity" {...a11yProps(1)} component={Link} to="/curiosity"/>
        <Tab label="Opportunity" {...a11yProps(2)} component={Link} to="/opportunity" />
        <Tab label="Spirit" {...a11yProps(3)} component={Link} to="/spirit"/>
      </Tabs>
    </AppBar>
  </div>
  )
}

export default Navbar


