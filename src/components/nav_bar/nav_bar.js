import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from "react";

const styles = {
	letter_container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	letter_container_small: {
		display: "flex",
		justifyContent: "center",
		fontSize: "34%",
		alignItems: "center"
	},
}

const NavBar = ({ title_letter }) => {

	const nav_bar = useRef(0);

	return (
		<nav ref={nav_bar} className="nav-container">
			<div className="flex-child justify-left align-center">
				<div style={styles.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', true)}</div>
			</div>
			<div style={{ flex: "1", display: "flex", alignContent: "center", marginRight: "2%" }}>
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