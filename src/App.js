import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Home from './views/Home'
import { MediaContext } from './context/MediaContext'

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
			<MediaContext.Provider value={{mediaQuery: mediaQuery, darkMode: [darkMode, setDarkMode]}}>
				<Home />
			</MediaContext.Provider>
		</div>
	);
}

export default App;
