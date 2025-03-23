import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Effect to update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Get current year, date, and time
  const currentYear = currentTime.getFullYear();
  const currentDate = currentTime.toLocaleDateString();
  const currentClockTime = currentTime.toLocaleTimeString();

  // Handle YouTube link click
  const handleClick = () => {
    window.open("https://www.youtube.com/@DinaalSAVAGE4321");
  };

  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px 15px',  // Slightly increased padding for a little more height
        position: 'fixed',
        bottom: 0,
        width: '100%',
        fontSize: '12px',
        height: '60px'     // Increased height to make footer a bit taller
      }}
    >
      <h3
        onClick={handleClick}
        style={{
          textDecoration: 'underline',
          color: '#1e90ff',
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          fontSize: '12px',  // Smaller font size for the link
          margin: '0'        // Remove default margin
        }}
        onMouseEnter={(event) => event.target.style.color = 'red'}
        onMouseLeave={(event) => event.target.style.color = '#1e90ff'}
      >
        Visit My YouTube Channel
      </h3>
      <div className="m-0" style={{ fontSize: '12px' }}>
        Current Date: {currentDate} | Current Time: {currentClockTime}
      </div>
      <p style={{ fontSize: '10px', margin: '0' }}>
        Copyright &copy; {currentYear} DinaalSAVAGE4321. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
