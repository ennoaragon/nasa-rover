import React, { useEffect, useContext } from 'react';
import {Route, Switch} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Curiosity from './pages/Curiosity';
import Opportunity from './pages/Opportunity';
import Spirit from './pages/Spirit';

// styles
import './App.css';
import Navbar from './components/Navbar';
function App() {

  // Begin with the fetch call for rover data
  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
    <Navbar/>
    <h1>Start of the rover creation</h1>
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
