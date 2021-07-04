import React from 'react';
import logo from './logo.svg';
import {  
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import './App.scss';
import Routes from 'routers';


function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="App--header">
          <div className="App--image">
            <a href="https://hellohealthgroup.com/vietnam/" target="_blank">
              <img alt="hello-health" src="https://hellohealthgroup.com/app/themes/hhg/public/img/site-logo.png"/>
            </a>
          </div>
          <div className="App--menu">
            <Link to="/assignment1">Assignment1</Link>
            <Link to="/assignment2">Assignment2</Link>
          </div>
        </div>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
