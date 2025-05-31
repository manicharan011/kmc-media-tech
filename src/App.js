 import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
