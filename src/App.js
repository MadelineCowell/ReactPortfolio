import React from 'react';
import Navbar from '../src/components/navbar/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
    {/* containing all routes */}
    <Router>
      <div className='App'>
        <Navbar />
        <Switch><Route path='/' exact/>
        </Switch>
        <h1>Hello, I'm Madeline!</h1>
      </div>
      </Router>
    </>
  )
}

export default App;
