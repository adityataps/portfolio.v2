import React, { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import './App.scss';

import Home from './pages/home';


import NavBar from './common/components/NavBar'



import ScrollView from './common/components/ScrollView'



const routes = [
  "/",
  "/about",
  "/blog",
  "/experiences",
  "/resume", 
  "/contact",
]

function App() {

  

  return (
    <div className='views-container'>
      <NavBar />
      <ScrollView id="/" color="pink" height="calc(100vh - 128px)">
        <Home />
      </ScrollView>
      <ScrollView id="/about" color="lightgreen" />
      <ScrollView id="/blog" color="lightblue" />
      <ScrollView id="/experiences" color="gray" />
      <ScrollView id="/resume" color="lightyellow" />
      <ScrollView id="/contact" color="orange" />
    </div>
  );
}

export default App





// // import React from 'react';
// // import './GridBackground.css';

// function GridBackground() {

//   // Inside the GridBackground component

//   const generateGrid = (numCircles) => {
//     const grid = [];
//     for (let i = 0; i < numCircles; i++) {
//       grid.push(<div className="circle" key={i}></div>);
//     }
//     return grid;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLDivElement>;

//     const cursorX = e.clientX;
//     const cursorY = e.clientY;

//     circles.forEach((circle) => {
//       const circleX = circle.offsetLeft + circle.offsetWidth / 2;
//       const circleY = circle.offsetTop + circle.offsetHeight / 2;
//       const deltaX = cursorX - circleX;
//       const deltaY = cursorY - circleY;
//       // const angle = Math.atan2(deltaY, deltaX);
//       const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

//       const maxDistance = 100; // Adjust this value to control the interaction range

//       if (distance < maxDistance) {
//         const scale = 1 - distance / maxDistance;
//         const transform = `translate(-50%, -50%) scale(${scale})`;
//         circle.style.transform = transform;
//       } else {
//         circle.style.transform = 'translate(-50%, -50%) scale(1)';
//       }
//     });
//   };



//   window.addEventListener('mousemove', handleMouseMove);

//   // console.log('testing')

//   return (
//     <div className="grid-background">
//       {generateGrid(500)} {/* Adjust the number of circles as needed */}
//     </div>
//   );

// }

// export default GridBackground;
