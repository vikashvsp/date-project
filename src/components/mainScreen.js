import React, { useState } from 'react';
import image1 from '../../src/components/200w.gif';

const MainScreen = () => {
     const function1 = () => {
          console.log("first");
     };

     const [noDisplacement, setNoDisplacement] = useState({ x: 0, y: 0 });

     const containerStyle = {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#ffc0cb', // Romantic color (light pink)
     };

     const textStyle = {
          fontSize: '24px',
          fontFamily: 'cursive',
          marginBottom: '20px',
     };

     const buttonStyle = {
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginRight: '10px',
          transition: 'transform 0.3s ease',
     };

     const handleMouseMove = (e) => {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const displacementX = e.clientX - centerX;
          const displacementY = e.clientY - centerY;

          const distance = Math.sqrt(displacementX ** 2 + displacementY ** 2);
          const minDistance = 50; // Set a minimum distance threshold

          if (distance < minDistance) {
               // Calculate the angle between the mouse pointer and the center
               const angle = Math.atan2(displacementY, displacementX);

               // Set the new position at the minimum distance along the same angle
               const newX = centerX + minDistance * Math.cos(angle);
               const newY = centerY + minDistance * Math.sin(angle);

               setNoDisplacement({ x: newX - centerX, y: newY - centerY });
          } else {
               setNoDisplacement({ x: displacementX, y: displacementY });
          }
     };

     return (
          <div style={containerStyle} onMouseMove={handleMouseMove}>
               <div style={textStyle}>
                    Will you please go on a date with me??
               </div>
               <div>
                    <img src={image1} alt='image' />
               </div>
               <div>
                    <button
                         style={buttonStyle}
                         onClick={function1}
                    >
                         YES
                    </button>

                    <button
                         style={{ ...buttonStyle, transform: `translate(${noDisplacement.x}px, ${noDisplacement.y}px)` }}
                         onClick={function1}
                    >
                         NO
                    </button>
               </div>
          </div>
     );
};

export default MainScreen;
