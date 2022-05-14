import React from 'react';
import { useRef, useContext } from "react";
import { MediaContext } from '../context/MediaContext';
import Particles from '../components/particleScenes/Particles'
import Waves from '../components/threeJsScenes/Waves'
import NavBar from '../components/NavBar.js'
import Projects from '../components/index/Projects.js'
import Footer from '../components/Footer';
import WavesAndWelcome from '../components/threeJsScenes/Waves';

function Index() {
	const commercialSection = useRef(0);
	const projectsSection = useRef(0);

	const { windowSize } = useContext(MediaContext)

	const welcomeMessage = 'Get in touch!'.split("")

	return (
		<>
			<NavBar />
			<WavesAndWelcome mediaQuery={windowSize.width} />
			{/* <div className="grid sections-home">
				<Particles div={projectsSection} colorParticles={"blue"} />
				<Projects mediaQuery={windowSize.width} projectsSection={projectsSection} />
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
			</div> */}
			{/* <Footer mediaQuery={windowSize.width} /> */}
		</>
	)
}
export default Index;