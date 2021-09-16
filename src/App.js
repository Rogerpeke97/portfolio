import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import ThreeJsScene from './components/three'
import { MediaContext } from './context/MediaContext'

function App() {

  const [query, setQuery] = useState(0)

  useEffect(() => {
    window.matchMedia("(max-width: 1100px)").addEventListener('change', setQuery(() => window.innerWidth < 1100 ? "small" : "big"));
  }, [])

  return (
    <div className="App">
      <MediaContext.Provider value={query}>
        <ThreeJsScene />
      </MediaContext.Provider>
    </div>
  );
}

export default App;
