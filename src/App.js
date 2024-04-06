import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import WhiteBackground from './components/WhiteBackground';
import BlueBackground from './components/BlueBackground';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust 768 according to your mobile viewport width
    };

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Initial check
    checkIfMobile();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <Header />
      ) : (
        <>
          <Header />
          <BlueBackground />
          <WhiteBackground />
          <Form />
          <Sitemap />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
