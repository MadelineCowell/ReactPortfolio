import React from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
// import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'



function App() {
  return (
    <>
      {/* containing all routes */}
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <React path='/about' component={About} /> */}
            <React path='/contact' component={Contact} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/resume' exact component={Resume} />
          </Switch> 
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;
