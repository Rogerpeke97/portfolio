import React from 'react';
import './App.css';
import ThreeJsScene from './components/three'
import ContainerGrids from './components/mainElements'
import Menu from './components/menu'
function App() {
  return (
    <div className="App">
      <ThreeJsScene />
      <Menu />
    </div>
  );
}

export default App;
