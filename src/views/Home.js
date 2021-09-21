import React from 'react';
import { useRef, useContext } from "react";
import { MediaContext } from '../context/MediaContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
import Particles from '../components/particleScenes/Particles'
import Waves from '../components/threeJsScenes/Waves'
import NavBar from '../components/general/NavBar.js'
import Projects from '../components/Projects.js'
import Footer from '../components/general/Footer';

function Home() {
	const commercialSection = useRef(0);
	const copiedToClipboard = useRef(0);
	const projectsSection = useRef(0);

	const mediaQuery = useContext(MediaContext)

	const titleLetter = (letter, small) => {
		let spanReturn = [];
		for (let i = 0; i < letter.length; i++) {
			spanReturn.push(small
				?
				<h1 key={i} className="title"
					onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(44,12,175,1)'}
					onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
				>{letter[i]}</h1>
				:
				<h1 key={i} className="title"
					onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(44,12,175,1)'}
					onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
				>{letter[i]}</h1>
			)
		}
		return (
			spanReturn
		)
	}

	const copiedToClipboardFn = (textToCopy) => {
		navigator.clipboard.writeText(textToCopy).then(() => {
			copiedToClipboard.current.style.opacity = "1";
			setTimeout(() => copiedToClipboard.current.style.opacity = "0", 500)
		})
	}

	return (
		<div>
			<NavBar titleLetter={titleLetter} />
			<Waves titleLetter={titleLetter} mediaQuery={mediaQuery}/>
			<div className="grid sections-home">
				<Particles div={projectsSection} colorParticles={"blue"} />
				<Projects mediaQuery={mediaQuery} projectsSection={projectsSection} />
			</div>
			<div className="grid sections-home" ref={commercialSection}>
				<div className="grid justify-center align-center z-index-1">
					I will create the website you desire, make it interactive, applying specific 3d models for it in case you want it or 2d animations
					that will make your website look modern and scalable with the help of these technologies:
					<div className="flex justify-center align-center">
						<img src="/testimages/Reactjslogo.svg" alt="reactlogo" className="flex-child white technologies"></img>
						<img src="/testimages/nodejslogo.svg" alt="nodejs" className="flex-child white technologies"></img>
						<img src="/testimages/postgresqllogo.svg" alt="postgresql" className="flex-child white technologies"></img>
						<img src="/testimages/spring_boot.svg" alt="spring boot" className="flex-child white technologies"></img>
						<img src="/testimages/threejslogo.svg" alt="threejs" className="flex-child white technologies"></img>
					</div>
				</div>
				<Particles div={commercialSection} colorParticles={"white"} />
			</div>
			<Footer mediaQuery={mediaQuery} />
		</div>
	)
}
export default Home;