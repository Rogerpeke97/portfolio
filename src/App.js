import React from 'react';
import './App.css';
import ThreeJsScene from './components/three'
import ContainerGrids from './components/mainElements'
function App() {
  return (
    <div className="App">
      <ThreeJsScene />
      <ContainerGrids />
    </div>
  );
}

export default App;
