import { useEffect, useState } from 'react';
import React from 'react';
import './App.scss';
import Index from './views/index'
import { MediaContext } from './context/MediaContext'
import { Routes, Route } from "react-router-dom";
import NotFound from './views/NotFound';

function App() {

	const [windowSize, setWindowSize] = useState({
    width: '',
    height: ''
  })

  const [deviceHeightAndWidth, setDeviceHeightAndWidth] = useState(false)

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
      setViewHeightCssVar()
		})
	}

  const setViewHeightCssVar = (firstLoad) => {
    const viewHeight = window.innerHeight
    const viewWidth = window.innerWidth
    if(firstLoad){
      document.documentElement.style.setProperty('--vh', `${viewHeight}px`)
    }
    document.documentElement.style.setProperty('--vw', `${viewWidth}px`)
    setDeviceHeightAndWidth(true)
  }

	useEffect(() => {
		setWindowAndResizeEvent()
    setViewHeightCssVar(true)
	}, [])

	return (
		<div className="h-full relative w-100 smAndUp:w-full">
			<Routes>
				<Route path="/" element={
						<MediaContext.Provider value={{windowSize: windowSize, deviceHeightAndWidth: deviceHeightAndWidth}}>
							<Index />
						</MediaContext.Provider>
					} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
