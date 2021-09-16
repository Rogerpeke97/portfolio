import React from 'react';
import { useRef, useState, useContext } from "react";
import { MediaContext } from '../context/MediaContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMapMarked, faCopy } from '@fortawesome/free-solid-svg-icons'
import CanvasBlue from './particles_2d/canvas_2d_blue'
import CanvasWhite from './particles_2d/canvas_2d_white'
import BackgroundHome from './three_scenes/background_homescreen'
import NavBar from './nav_bar/nav_bar.js'
import Page2 from './page_2/page_2.js'

const style = {
	moving_div_1: {
		flex: "1",
		height: "0",
		zIndex: "0",
		width: "25%",
		borderBottom: "1620px solid rgba(44,12,175,1)",
		borderRight: "1620px solid transparent",
		position: "absolute",
		left: "-100%",
		top: "0vh",
		opacity: "0.5"
	},
	moving_div_2: {
		flex: "1",
		height: "0",
		zIndex: "0",
		width: "100%",
		borderBottom: "1080px solid whitesmoke",
		borderRight: "1080px solid transparent",
		position: "absolute",
		left: "100%",
		transform: "scaleX(-1)",
		opacity: "0.4"
	},
	my_work_title: {
		display: "grid",
		cursor: "default",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "300%",
		height: "100%",
		width: "100%"
	},
	websites: {
		display: "grid",
		gridTemplateRows: "33.33% 33.33% 33.33%"
	},
	grid: {
		display: "flex",
		paddingBottom: "1%"
	},
	grid_phone_media: {
		display: "grid",
		gridTemplateRows: "50% 50%",
		fontSize: "75%",
		paddingBottom: "12%"
	},
	box: {
		position: "relative",
		width: "100%",
		border: "5px solid white",
		borderRadius: "6px",
		flex: "1",
		transition: "transform 0.5s ease-out",
		boxShadow: " 0px 0px 50px -4px black",
	},
	box_explanation: {
		margin: "2%",
		position: "relative",
		width: "100%",
		flex: "1",
		transition: "transform 0.5s ease-out",
		display: "grid",
		gridTemplateRows: "20% 60% 20%"
	},
	box_explanation_small: {
		margin: "0%",
		position: "relative",
		width: "100%",
		flex: "1",
		transition: "transform 0.5s ease-out",
		display: "grid",
		gridTemplateRows: "20% 60% 20%"
	},
	box_explanation_title: {
		fontWeight: "bold",
		fontSize: "300%",
		textShadow: "2px 2px 2px black",
		textDecoration: "underline"
	},
	box_explanation_description: {
		fontWeight: "normal",
		textAlign: "justify"
	},
	box_explanation_description_small: {
		fontWeight: "normal",
		display: "grid",
		alignContent: "center",
		textAlign: "justify"
	},
	grid_images: {
		position: "absolute",
		maxHeight: "100%",
		minHeight: "100%",
		maxWidth: "100%",
		objectFit: "contain",
		zIndex: "0"
	},
	explanation_website: {
		position: "absolute",
		background: "linear-gradient(56deg, rgba(24,14,19,1) 28%, rgba(78,21,35,1) 59%)",
		display: "grid",
		textAlign: "center",
		gridTemplateRows: "10% 70% 20%",
		width: "100%",
		height: "100%",
		z_index: "-1",
		transition: "all 0.5s ease-out"
	},
	website_button: {
		position: "absolute",
		width: "50%",
		height: "20%",
		top: "80%",
		left: "25%",
		background: "rgba(44,12,175,1)",
		borderRadius: "5px",
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 2px black",
		cursor: "pointer",
		textAlign: "center",
		transition: "all 0.5s ease-out",
		display: "grid",
		alignItems: "center",
		zIndex: "1"
	},
	website_button_backwards: {
		position: "absolute",
		width: "50%",
		height: "20%",
		top: "80%",
		left: "25%",
		background: "rgba(44,12,175,1)",
		borderRadius: "5px",
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 2px black",
		cursor: "pointer",
		textAlign: "center",
		transition: "all 0.5s ease-out",
		display: "grid",
		alignItems: "center",
		zIndex: "1",
		transform: "rotateY(180deg)"
	},
	website_button_links: {
		position: "relative",
		width: "50%",
		height: "60%",
		top: "15%",
		left: "25%",
		background: "rgba(44,12,175,1)",
		borderRadius: "5px",
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 2px black",
		cursor: "pointer",
		textAlign: "center",
		transition: "all 0.5s ease-out",
		display: "grid",
		alignItems: "center",
		zIndex: "1"
	},
	website_links: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	technologies_holder: {
		display: "flex",
		maxWidth: "100%",
		maxHeight: "100%",
		height: "50%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	technologies_holder_small: {
		display: "flex",
		maxWidth: "100%",
		maxHeight: "100%",
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	technologies_images: {
		flex: "25%",
		maxHeight: "100%",
		width: "25%",
		objectFit: "contain",
		zIndex: "0",
		transform: "rotateY(180deg)"
	},
	technologies_images_normal: {
		flex: "20%",
		height: "50%",
		margin: "3%",
		width: "20%",
		zIndex: "0",
		position: "relative",
		background: "gray",
		borderRadius: "10px"
	},
	website_image_container: {
		height: "100%",
		width: "100%",
		position: "relative",
		transition: "all 0.5s ease-out",
		display: "grid",
		justifyItems: "center",
		background: "black"
	},
	footer: {
		backgroundColor: "rgba(24,8,100,1)",
		color: 'white',
		zIndex: "2",
		display: 'flex',
		fontSize: "80%",
		justifyContent: "center",
		height: '10rem',
		position: "relative",
		width: "100%",
	},
	selling_description: {
		display: "grid",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "justify",
		zIndex: "1",
		position: "relative",
		left: "15%",
		width: "70%",
		paddingTop: "5%",
		fontSize: "150%"
	},
	selling_description_small: {
		display: "grid",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "justify",
		zIndex: "1",
		position: "relative",
		left: "15%",
		width: "70%",
		paddingTop: "5%",
		fontSize: "100%"
	},
	page_3: {
		height: "1080px",
		width: "100%",
		background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
		backgroundSize: "400% 400%",
		animation: "transition 45s infinite",
		display: "grid",
		gridTemplateRows: "30% 30%"
	},
	clipboard: {
		display: "grid",
		pointerEvents: "none",
		position: "absolute",
		textAlign: "center",
		alignItems: "center",
		left: "50%",
		top: "50%",
		width: "250px",
		height: "15%",
		marginLeft: "-125px",
		marginTop: "-1%",
		transition: "0.5s ease-out",
		opacity: "0",
		background: "black",
		borderRadius: "5px"
	},
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



function ThreeJsScene() {
	const page_3 = useRef(0);
	const copied_to_clipboard = useRef(0);
	const [smartphoneView, setSmartphoneView] = useState(false);
	const portfolio_grid = useRef(0);

	const query = useContext(MediaContext)

	const title_letter = (letter, small) => {
		let span_return = [];
		for (let i = 0; i < letter.length; i++) {
			span_return.push(small
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
			span_return
		)
	}

	const copied_to_clipboard_function = () => {
		const text_to_copy = document.createElement('textarea');
		text_to_copy.value = 'rogerpeke97@gmail.com';
		document.body.appendChild(text_to_copy);
		text_to_copy.select();
		document.execCommand('copy');
		document.body.removeChild(text_to_copy);
		copied_to_clipboard.current.style.opacity = "1";
		setTimeout(() => copied_to_clipboard.current.style.opacity = "0", 500)
	}

	return (
		<div style={{ maxWidth: "100%", height: "100%", position: "relative" }}>
			<NavBar title_letter={title_letter} />
			<BackgroundHome title_letter={title_letter} />
			<div style={{
				display: "grid", maxWidth: "100%", minHeight: "1620px", maxHeight: "1620px", position: "relative",
				zIndex: "2"
			}}>
				<CanvasBlue portfolio_grid={portfolio_grid} />
				<Page2 smartphoneView={query} portfolio_grid={portfolio_grid} />
			</div>
			<div className="page3" style={style.page_3} ref={page_3}>
				<div style={smartphoneView ? style.selling_description_small : style.selling_description}>
					I will create the website you desire, make it interactive, applying specific 3d models for it in case you want it or 2d animations
					that will make your website look modern and scalable with the help of these technologies:
					<div style={smartphoneView ? style.technologies_holder_small : style.technologies_holder}>
						<img src="/testimages/Reactjslogo.svg" alt="reactlogo" style={style.technologies_images_normal}></img>
						<img src="/testimages/nodejslogo.svg" alt="nodejs" style={style.technologies_images_normal}></img>
						<img src="/testimages/postgresqllogo.svg" alt="postgresql" style={style.technologies_images_normal}></img>
						<img src="/testimages/spring_boot.svg" alt="spring boot" style={style.technologies_images_normal}></img>
						<img src="/testimages/threejslogo.svg" alt="threejs" style={style.technologies_images_normal}></img>
					</div>
				</div>
				<CanvasWhite page_3={page_3} />
			</div>
			<div style={style.footer}>
				<div style={{ flex: "1", display: "grid", alignItems: "center", margin: "2%" }}>
					<h2 className="title">IGNACIO.MARTIN.DIAZ</h2>
					<div style={{ display: "flex", marginBottom: "1%" }}>
						<FontAwesomeIcon icon={faMapMarked} style={{ marginRight: "1%" }} />
						<div>Buenos Aires, Argentina</div>
					</div>
					<div>&copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.</div>
				</div>
				<div style={{ flex: "1", display: "grid", alignItems: "center", paddingLeft: "1%", borderLeft: "2px solid white" }}>
					<div>
						<h4>Contact me at: </h4>
						<h4 style={{ fontStyle: "italic", textDecoration: "underline" }}>
							<FontAwesomeIcon icon={faGoogle} style={{ marginRight: "1%" }} />
							rogerpeke97@gmail.com
							<FontAwesomeIcon icon={faCopy}
								style={{ cursor: "pointer", fontSize: "100%", marginLeft: "2%", transition: "all 0.5s ease-out" }}
								onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
								onMouseLeave={(e) => e.currentTarget.style.color = "white"}
								onClick={() => copied_to_clipboard_function()}
							/>
						</h4>
					</div>
				</div>
				<div ref={copied_to_clipboard} style={style.clipboard}>Copied to clipboard</div>
			</div>
		</div>
	)
}
export default ThreeJsScene;