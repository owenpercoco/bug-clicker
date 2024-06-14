import React, { MouseEvent, useState } from 'react';
import BugIcon from './components/BugIcon';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [rotation, setRotation] = useState(0);

  const calculateAngle = (x:number, y:number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angle + 90;
  };

  const onClick = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const angle = calculateAngle(clientX, clientY);
    setRotation(angle);
    setPosition({ x: clientX, y: clientY });
  }
  return (
    <div className="App" onClick={onClick}>
      <BugIcon rotate={rotation} position={position}/>
    </div>
  );
}

export default App;
