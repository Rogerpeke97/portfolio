import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from "react";
import IconButton from "../buttons/IconButton.js";


const NavBar = ({ themeHandler }) => {

	// const logo = "IGNACIO.MARTIN.DIAZ".split("")

	const [navIntersect, setNavIntersect] = useState("")


	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			const scrollY = e.currentTarget.scrollY
			setNavIntersect(scrollY > document.documentElement.clientHeight)
		})
	}, [])

	return (
		<nav className={`${navIntersect ? "nav-container-scroll" : "nav-container"} px-1`}>
			<div className="flex-child justify-left align-center">
				<div className="flex justify-center align-items-center">
				</div>
			</div>
			<div className="flex-child align-center mr-1">
				<div className="flex-child justify-right align-items-center">
					<IconButton IconName={faGithub} Link={"https://github.com/Rogerpeke97"} />
				</div>
				<div className="flex-child justify-right align-items-center">
					<IconButton IconName={faLinkedin} Link={"https://www.linkedin.com/in/ignacio-martin-diaz-2a30251b7/"} />
				</div>
			</div>
		</nav>
	)
}


export default NavBar;