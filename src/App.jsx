import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';  //must be after bootstrap
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Page from './components/Page';
import Footer from './components/Footer';


//Page will have a Header section, a main page section and a footer

function App() {
  return (
     //Create  the router - wrap the entire application within it
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
          {/*Define the routes for the router */} 
          <main className="flex-grow-1"> 
            <div className="container py-4">
            <Routes>
                <Route path="/" element={<Page><About /></Page>}/>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
            </div>
          </main>
        <Footer />
      </div>
   </Router>
  );
}

export default App
