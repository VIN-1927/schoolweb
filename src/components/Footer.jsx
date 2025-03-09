import React from 'react';
 
const Footer = () => {
  const handleClick = () => {
    window.open("https://www.youtube.com/@DinaalSAVAGE4321")
  }
  return (
    <footer style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      textAlign: 'center', 
      padding: '10px', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%' 
    }}>
<h3 onClick={handleClick} style={{textDecoration:'underline', color:'#1e90ff', cursor:'pointer', transition:'color 0.3s ease'}}
onMouseEnter={(event) => event.target.style.color='red'}
onMouseLeave={(event ) =>event.target.style.color = '#1e90ff'}
> Visit My YouTube Channel</h3>
    </footer>
  );
}

export default Footer;


