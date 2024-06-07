import React, { MouseEvent, useState } from 'react';
import BugIcon from './components/BugIcon';
import './App.css';

function App() {
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
    console.log('in the onclick');
    console.log(event.clientX, event.clientY);
    const angle = calculateAngle(event.clientX, event.clientY);
    setRotation(angle)
  }
  return (
    <div className="App" onClick={onClick}>
      <BugIcon rotate={rotation}/>
    </div>
  );
}

export default App;
