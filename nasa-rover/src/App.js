import React, { useEffect, useContext } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
// pages
import Home from './pages/Home';
import Curiosity from './pages/Curiosity';
import Opportunity from './pages/Opportunity';
import Spirit from './pages/Spirit';

// styles
import './App.css';
import Navbar from './components/Navbar';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_NASA_ROVER;
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AXIOS_API_KEY;

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/curiosity" component={Curiosity} />
        <Route exact path="/opportunity" component={Opportunity}/>
        <Route exact path="/spirit" component={Spirit}/>
      </Switch>
    </div>
  );
}

export default App;
