import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import IconButton from "../buttons/IconButton.js";


const NavBar = ({ titleLetter }) => {

 const logo = "IGNACIO.MARTIN.DIAZ".split("")

	return (
		<nav className="nav-container px-1">
			<div className="flex-child justify-left align-center">
				<div className="flex justify-center align-items-center">
				{logo.map((letter, index) => {
      return <h3 key={index}>{letter}</h3>
     })}
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