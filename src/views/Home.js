import React from 'react';
import { useRef, useContext } from "react";
import { MediaContext } from '../context/MediaContext';
import Particles from '../components/particleScenes/Particles'
import Waves from '../components/threeJsScenes/Waves'
import NavBar from '../components/general/NavBar.js'
import Projects from '../components/Projects.js'
import Footer from '../components/general/Footer';

function Home() {
	const commercialSection = useRef(0);
	const projectsSection = useRef(0);

	const { mediaQuery } = useContext(MediaContext)

	function themeHandler() {
		// console.log(darkMode, mediaQuery)
	}

	const welcomeMessage = 'Get in touch!'.split("")

	return (
		<div>
			<NavBar themeHandler={() => themeHandler()} />
			<Waves mediaQuery={mediaQuery} />
			<div className="grid sections-home">
				<Particles div={projectsSection} colorParticles={"blue"} />
				<Projects mediaQuery={mediaQuery} projectsSection={projectsSection} />
			</div>
			<div className="grid sections-home" ref={commercialSection}>
				<div style={{height: "200px"}} className="py-3 z-index-1 grid justify-center align-items-center bold">
					<div className="flex justify-center align-items-center z-index-1">
						{welcomeMessage.map((letter, index) => {
							return <h1 key={index} style={{ '--i': index, fontSize: "50px" }} className="animate-text pl-1 Teko underline">{letter}</h1>
						})}
					</div>
					<p style={{lineHeight: "1.6"}} className="z-index-1 px-2 bold">Contact me through LinkedIn, my e-mail or use the form down below!</p>
				</div>
				<Particles div={commercialSection} colorParticles={"white"} />
			</div>
			<Footer mediaQuery={mediaQuery} />
		</div>
	)
}
export default Home;