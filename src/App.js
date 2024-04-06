// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import WhiteBackground from './components/WhiteBackground';
import BlueBackground from './components/BlueBackground';
import Form, { MobileForm } from './components/Form'; // Import MobileForm
import Footer, { MobileFooter } from './components/Footer';
import Sitemap from './components/Sitemap';

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
      <Header />
      {isMobile ? (
        <>
          <BlueBackground />
          <MobileForm /> {/* Render MobileForm between Blue and White Background */}
          <WhiteBackground />
          <MobileFooter/>
          
        </>
      ) : (
        <>
          <BlueBackground />
          <Form />
          <WhiteBackground />
          <Sitemap />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
