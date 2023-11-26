import React, { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import React from 'react';
// import './GridBackground.css';

function GridBackground() {

  // Inside the GridBackground component

  const generateGrid = (numCircles) => {
    const grid = [];
    for (let i = 0; i < numCircles; i++) {
      grid.push(<div className="circle" key={i}></div>);
    }
    return grid;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLDivElement>;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    circles.forEach((circle) => {
      const circleX = circle.offsetLeft + circle.offsetWidth / 2;
      const circleY = circle.offsetTop + circle.offsetHeight / 2;
      const deltaX = cursorX - circleX;
      const deltaY = cursorY - circleY;
      // const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const maxDistance = 100; // Adjust this value to control the interaction range

      if (distance < maxDistance) {
        const scale = 1 - distance / maxDistance;
        const transform = `translate(-50%, -50%) scale(${scale})`;
        circle.style.transform = transform;
      } else {
        circle.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  };



  window.addEventListener('mousemove', handleMouseMove);

  // console.log('testing')

  return (
    <div className="grid-background">
      {generateGrid(500)} {/* Adjust the number of circles as needed */}
    </div>
  );

}

export default GridBackground;
