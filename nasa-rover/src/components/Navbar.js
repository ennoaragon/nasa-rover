import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import Curiosity from './../pages/Curiosity';
// import Opportunity from './../pages/Opportunity';
// import Spirit from './../pages/Spirit';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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


const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{

  },[])
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


