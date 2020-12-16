import React from 'react';
import Navbar from '../src/components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'


function App() {
  return (
    <>
      {/* containing all routes */}
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
