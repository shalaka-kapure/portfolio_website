import React from 'react';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import "./app.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Contact/>
      </div>
    </div>
  );
}

export default Home;
