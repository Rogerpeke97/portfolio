import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from "react";
import IconButton from "./buttons/IconButton.js";


const NavBar = () => {
	const [navIntersect, setNavIntersect] = useState("")

  const checkNavBarIntersect = (e) => {
    const scrollY = e.currentTarget.scrollY
    setNavIntersect(scrollY > document.documentElement.clientHeight)
  }

	useEffect(() => {
		window.addEventListener('scroll', checkNavBarIntersect)
    return () => {
      window.removeEventListener('scroll', checkNavBarIntersect)
    }
	}, [])

	return (
		<nav className={`flex h-24 z-50 justify-end rounded-md fixed inset-0 transition ease-out duration-300 ${navIntersect ? "bg-primary" : "bg-transparent"} px-3`}>
			<div className="flex w-1/4 mdAndDown:w-1/2 items-center mr-1">
				<div className="flex w-full justify-end items-center">
					<IconButton IconName={faGithub} Link={"https://github.com/Rogerpeke97"} />
				</div>
				<div className="flex w-full justify-end items-center">
					<IconButton IconName={faLinkedin} Link={"https://www.linkedin.com/in/ignacio-martin-sr/"} />
				</div>
			</div>
		</nav>
	)
}


export default NavBar;