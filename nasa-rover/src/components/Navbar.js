import React, { useState, useEffect } from 'react'
import {NavLink } from 'react-router-dom';

// styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';




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

  return (
    <div >
    <AppBar position="static" className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home"  activeClassName="active" component={NavLink} to="/"/>
        <Tab label="Curiosity"  activeClassName="active" component={NavLink} to="/curiosity"/>
        <Tab label="Opportunity"  activeClassName="active" component={NavLink} to="/opportunity" />
        <Tab label="Spirit"  activeClassName="active" component={NavLink} to="/spirit"/>
      </Tabs>
    </AppBar>
  </div>
  )
}

export default Navbar


