import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React from 'react';
import Home from './Pages/Home/Homescreen';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
