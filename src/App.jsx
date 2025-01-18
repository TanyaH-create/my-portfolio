import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


//Page will have a Header section, a main page section and a footer

function App() {
  return (
     //Create  the router - wrap the entire application within it
    <Router>
      <>
        <Header className="my-4"/>
          {/*Define the routes for the router */}
          <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
          </Routes>
      </>
    </Router>
  
  );
}

export default App
