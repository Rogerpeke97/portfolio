import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


const NavBar = ({ titleLetter }) => {

	return (
		<nav className="nav-container px-1">
			<div className="flex-child justify-left align-center">
				<div className="flex justify-center align-items-center">{titleLetter('IGNACIO.MARTIN.DIAZ', true)}</div>
			</div>
			<div className="flex-child align-center mr-1">
				<div className="a-link-holder justify-right align-items-center">
					<a href="https://github.com/Rogerpeke97" className="icon-custom" rel="noopener noreferrer" target="_blank">
						<FontAwesomeIcon icon={faGithub}
							onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
							onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
					</a>
				</div>
				<div className="flex-child justify-right align-items-center">
					<a href="https://www.linkedin.com/in/ignacio-martin-diaz-2a30251b7/" className="icon-custom" rel="noopener noreferrer" target="_blank">
						<FontAwesomeIcon icon={faLinkedin}
							onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
							onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
					</a>
				</div>
			</div>
		</nav>
	)
}


export default NavBar;