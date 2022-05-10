import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Index from './views/index'
import { MediaContext } from './context/MediaContext'
import { Routes, Route } from "react-router-dom";
import NotFound from './views/NotFound';

function App() {

	const [windowSize, setWindowSize] = useState({
    width: '',
    height: ''
  })

	function setWindowAndResizeEvent(){
		setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
		window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
		})
	}

  const setViewHeightCssVar = () => {
    const viewHeight = window.innerHeight
    const viewWidth = window.innerWidth
    document.documentElement.style.setProperty('--vh', `${viewHeight}px`)
    document.documentElement.style.setProperty('--vw', `${viewWidth}px`)
  }

	useEffect(() => {
		setWindowAndResizeEvent()
    setViewHeightCssVar()
	}, [])

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={
						<MediaContext.Provider value={{windowSize: windowSize}}>
							<Index />
						</MediaContext.Provider>
					} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
