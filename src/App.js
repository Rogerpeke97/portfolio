import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Home from './views/Home'
import { MediaContext } from './context/MediaContext'
import { Routes, Route } from "react-router-dom";
import NotFound from './views/NotFound';

function App() {

	const [mediaQuery, setQuery] = useState("")

	const [darkMode, setDarkMode] = useState(false)
	
	function main(){
		setQuery(window.innerWidth < 1100 ? "small" : "big")
		window.addEventListener('resize', () => {
			setQuery(() => {
				return window.innerWidth < 1100 ? "small" : "big"
			})
		})
	}

	useEffect(() => {
		main()
	}, [])

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={
						<MediaContext.Provider value={{mediaQuery: mediaQuery, darkMode: [darkMode, setDarkMode]}}>
							<Home />
						</MediaContext.Provider>
					} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
