import React from 'react';
import { useRef, useContext } from "react";
import { MediaContext } from '../context/MediaContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMapMarked, faCopy } from '@fortawesome/free-solid-svg-icons'
import Particles from '../components/particleScenes/Particles'
import Waves from '../components/threeJsScenes/Waves'
import NavBar from '../components/general/NavBar.js'
import Projects from '../components/Projects.js'

function ThreeJsScene() {
	const page_3 = useRef(0);
	const copiedToClipboard = useRef(0);
	const portfolioGrid = useRef(0);

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

	const copiedToClipboardFn = () => {
		const textToCopy = document.createElement('textarea');
		textToCopy.value = 'rogerpeke97@gmail.com';
		document.body.appendChild(textToCopy);
		textToCopy.select();
		document.execCommand('copy');
		document.body.removeChild(textToCopy);
		copiedToClipboard.current.style.opacity = "1";
		setTimeout(() => copiedToClipboard.current.style.opacity = "0", 500)
	}

	return (
		<div>
			<NavBar titleLetter={titleLetter} />
			<Waves titleLetter={titleLetter} />
			<div className="grid sections-home">
				<Particles div={portfolioGrid} colorParticles={"blue"} />
				<Projects mediaQuery={mediaQuery} portfolioGrid={portfolioGrid} />
			</div>
			<div className="grid sections-home" ref={page_3}>
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
				<Particles div={page_3} colorParticles={"white"}/>
			</div>
			<footer>
				<div className="flex-child-no-flex align-items-center grid pa-1">
					<h2 className="title">IGNACIO.MARTIN.DIAZ</h2>
					<div className="flex">
						<FontAwesomeIcon className="pr-1" icon={faMapMarked} />
						<div>Buenos Aires, Argentina</div>
					</div>
					<div>&copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.</div>
				</div>
				<div className="flex-child-no-flex align-items-center grid pa-1 footer-right">
					<div>
						<h4>Contact me at: </h4>
						<FontAwesomeIcon className="icon pa-1" icon={faGoogle} />
						<i><h4 class="underline cursor-pointer" onClick={() => copiedToClipboardFn()}>
							rogerpeke97@gmail.com
						</h4></i>
						<FontAwesomeIcon className="icon pa-1" icon={faCopy}
								onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
								onMouseLeave={(e) => e.currentTarget.style.color = "white"}
								onClick={() => copiedToClipboardFn()}
							/>
					</div>
				</div>
				<div className="clipboard-message" ref={copiedToClipboard}>Copied to clipboard</div>
			</footer>
		</div>
	)
}
export default ThreeJsScene;