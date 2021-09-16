import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from "react";

const style = {
	portfolioGrid: {
		display: "grid",
		width: "90%",
		gridTemplateRows: "10% 90%",
		height: "1620px",
		position: "relative",
		left: "5%",
		zIndex: "1",
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
}
const Page2 = ({ mediaQuery, portfolioGrid }) => {
	const underline_login = useRef(0);
	const login_font = useRef(0);
	const website_1_image = useRef(0);
	const explanation_website_1_image = useRef(0);
	const website_2_image = useRef(0);
	const explanation_website_2_image = useRef(0);
	const website_3_image = useRef(0);
	const explanation_website_3_image = useRef(0);

	return (
		<div style={{ display: "grid", maxHeight: "1620px" }}>
			<div ref={portfolioGrid} style={style.portfolioGrid}>
				<div style={style.my_work_title}>
					<div
						onMouseEnter={() => {
							login_font.current.style.color = "white";
							underline_login.current.style.transform = "scaleX(1)";
						}}
						onMouseLeave={() => {
							login_font.current.style.color = "white";
							underline_login.current.style.transform = "scaleX(0)";
						}}
					>
						<div style={{ border: "3px solid rgba(24,8,100,1)", borderRadius: "6px", fontFamily: "Teko, sans-serif", fontSize: "120%" }} ref={login_font}>My work:</div>
						<div style={{
							height: "2px", width: "100%", background: "white",
							transform: "scaleX(0)", transition: "all 0.3s ease-out"
						}} ref={underline_login}></div>
					</div>
				</div>
				<div style={style.websites}>
					<div style={mediaQuery === "small" ? style.grid_phone_media : style.grid}>
						<div style={style.box}>
							<div style={style.explanation_website} ref={explanation_website_1_image}>
								<div style={{ transform: "rotateY(180deg)", textDecoration: "underline" }}>{"<Technologies used: />"}</div>
								<div style={style.technologies_holder}>
									<img src="spring_boot.png" alt="Spring boot" style={style.technologies_images}></img>
									<img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
									<img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
									<img src="postgresqllogo.png" alt="Spring boot" style={style.technologies_images}></img>
								</div>
								<div style={style.website_button_backwards} onClick={() => {
									website_1_image.current.style.transform = "rotateY(0deg)";
									explanation_website_1_image.current.style.transform = "rotateY(0deg)";
									website_1_image.current.style.zIndex = "2";
									explanation_website_1_image.current.style.zIndex = "1";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>
							</div>
							<div style={style.website_image_container} ref={website_1_image}>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black"
								}}>
									<img src="xenta_gif.gif" alt="xenta game" style={style.grid_images}></img>
								</div>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black", opacity: "1"
								}}
									onMouseEnter={(e) => e.currentTarget.style.opacity = "0"}
									onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
								>
									<img src="xenta_front_page.jpg" alt="xenta game" style={style.grid_images}></img>
								</div>
								<div style={style.website_button} onClick={() => {
									website_1_image.current.style.transform = "rotateY(180deg)";
									explanation_website_1_image.current.style.transform = "rotateY(180deg)";
									website_1_image.current.style.zIndex = "1";
									explanation_website_1_image.current.style.zIndex = "2";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>See details</div>
							</div>
						</div>
						<div style={mediaQuery === "small" ? style.box_explanation_small : style.box_explanation}>
							<div style={style.box_explanation_title}>Xenta's website:</div>
							<div style={mediaQuery === "small" ? style.box_explanation_description_small : style.box_explanation_description}>
								This website is basically an "infinite" (If you don't die that is) game where you are given the sensation
								that you are moving forward but in reality the character is just orbiting around the surface of the sphere.
								This was achieved using Trigonometry which was also applied to the movement of the trees and grass as time passes.
								You have a score, which is saved if your performance was better than your previous best score and a set amount of lives
								that decrease as you hit the trees. This website uses JWT to authenticate users with the Spring Boot Backend.
							</div>
							<div style={style.website_links}>
								<div style={{ display: "grid", justifyContent: "center", alignItems: "center", flex: "1" }}>
									<a href="https://github.com/Rogerpeke97/FrontendAPI" rel="noopener noreferrer" target="_blank"
										style={{
											display: "grid", textDecoration: "none", color: "white", cursor: "default", flex: "1", fontSize: "150%",
											justifyContent: "center", justifyItems: "center"
										}}>
										Frontend:
										<FontAwesomeIcon icon={faGithub} style={{ cursor: "pointer", transition: "all 0.5s ease-out" }}
											onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
											onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
									</a>
								</div>
								<div style={{ display: "grid", justifyContent: "center", alignItems: "center", flex: "1" }}>
									<a href="https://github.com/Rogerpeke97/APISpring" rel="noopener noreferrer" target="_blank"
										style={{
											display: "grid", textDecoration: "none", color: "white", cursor: "default", flex: "1", fontSize: "150%",
											justifyContent: "center", justifyItems: "center"
										}}>
										Backend:
										<FontAwesomeIcon icon={faGithub} style={{ cursor: "pointer", transition: "all 0.5s ease-out" }}
											onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
											onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
									</a>
								</div>
								<a href="https://xenta.netlify.app/" rel="noopener noreferrer" target="_blank"
									style={{
										textDecoration: "none", color: "white", cursor: "default", flex: "1", fontSize: "100%",
										height: "100%", width: "100%"
									}}>
									<div style={style.website_button_links}
										onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
										onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Visit site</div>
								</a>
							</div>
						</div>
					</div>
					<div style={mediaQuery === "small" ? style.grid_phone_media : style.grid}>
						<div style={style.box}>
							<div style={style.explanation_website} ref={explanation_website_2_image}>
								<div style={{ transform: "rotateY(180deg)", textDecoration: "underline" }}>{"<Technologies used: />"}</div>
								<div style={style.technologies_holder}>
									<img src="nodejslogo.png" alt="Spring boot" style={style.technologies_images}></img>
									<img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
									<img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
									<img src="postgresqllogo.png" alt="Spring boot" style={style.technologies_images}></img>
								</div>
								<div style={style.website_button_backwards} onClick={() => {
									website_2_image.current.style.transform = "rotateY(0deg)";
									explanation_website_2_image.current.style.transform = "rotateY(0deg)";
									website_2_image.current.style.zIndex = "2";
									explanation_website_2_image.current.style.zIndex = "1";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>
							</div>
							<div style={style.website_image_container} ref={website_2_image}>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black"
								}}>
									<img src="project1.gif" alt="csv converter" style={style.grid_images}></img>
								</div>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black", opacity: "1"
								}}
									onMouseEnter={(e) => e.currentTarget.style.opacity = "0"}
									onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
								>
									<img src="project1_front.png" alt="csv converter" style={style.grid_images}></img>
								</div>
								<div style={style.website_button} onClick={() => {
									website_2_image.current.style.transform = "rotateY(180deg)";
									explanation_website_2_image.current.style.transform = "rotateY(180deg)";
									website_2_image.current.style.zIndex = "1";
									explanation_website_2_image.current.style.zIndex = "2";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>See details</div>
							</div>
						</div>
						<div style={style.box_explanation}>
							<div style={style.box_explanation_title}>Csv-converter:</div>
							<div style={mediaQuery === "small" ? style.box_explanation_description_small : style.box_explanation_description}>
								This is my first project, it converts csv files and displays them in a canvas using chartjs.
								It has a lot of backend functionalities that allowed me to learn about backend and frontend requests,
								remote storage using googlecloud's api, file storage using multer, downloading files from googlecloud and
								display them on the frontend.
								Also, deploying the website using the heroku cli and creating a database for the login user data.
							</div>
							<div style={style.website_links}>
								<div style={{ display: "grid", justifyContent: "center", alignItems: "center", flex: "1" }}>
									<a href="https://github.com/Rogerpeke97/Csv-converter-server-config" rel="noopener noreferrer" target="_blank"
										style={{
											display: "grid", textDecoration: "none", color: "white", cursor: "default", fontSize: "200%",
											justifyContent: "center", justifyItems: "center"
										}}>
										<FontAwesomeIcon icon={faGithub} style={{ cursor: "pointer", transition: "all 0.5s ease-out" }}
											onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
											onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
									</a>
								</div>
								<a href="https://csv-convrt.herokuapp.com/" rel="noopener noreferrer" target="_blank"
									style={{
										textDecoration: "none", color: "white", cursor: "default", flex: "1", fontSize: "100%",
										height: "100%", width: "100%"
									}}>
									<div style={style.website_button_links}
										onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
										onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Visit site</div>
								</a>
							</div>
						</div>
					</div>
					<div style={mediaQuery === "small" ? style.grid_phone_media : style.grid}>
						<div style={style.box}>
							<div style={style.explanation_website} ref={explanation_website_3_image}>
								<div style={{ transform: "rotateY(180deg)", textDecoration: "underline" }}>{"<Technologies used: />"}</div>
								<div style={style.technologies_holder}>
									<img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
									<img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
								</div>
								<div style={style.website_button_backwards} onClick={() => {
									website_3_image.current.style.transform = "rotateY(0deg)";
									explanation_website_3_image.current.style.transform = "rotateY(0deg)";
									website_3_image.current.style.zIndex = "2";
									explanation_website_3_image.current.style.zIndex = "1";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>
							</div>
							<div style={style.website_image_container} ref={website_3_image}>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black"
								}}>
									<img src="portfolio_home.gif" alt="xenta game" style={style.grid_images}></img>
								</div>
								<div style={{
									height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
									display: "grid", justifyItems: "center", background: "black", opacity: "1"
								}}
									onMouseEnter={(e) => e.currentTarget.style.opacity = "0"}
									onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
								>
									<img src="portfolio_home.png" alt="portfolio" style={style.grid_images}></img>
								</div>                                        <div style={style.website_button} onClick={() => {
									website_3_image.current.style.transform = "rotateY(180deg)";
									explanation_website_3_image.current.style.transform = "rotateY(180deg)";
									website_3_image.current.style.zIndex = "1";
									explanation_website_3_image.current.style.zIndex = "2";
								}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
									onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>See details</div>
							</div>
						</div>
						<div style={style.box_explanation}>
							<div style={style.box_explanation_title}>Portfolio website:</div>
							<div style={mediaQuery === "small" ? style.box_explanation_description_small : style.box_explanation_description}>
								This website is my old portfolio, contains other minor projects.<br />
							</div>
							<div style={style.website_links}>
								<a href="https://rogerpeke97.github.io/portfolio/" rel="noopener noreferrer" target="_blank"
									style={{
										textDecoration: "none", color: "white", cursor: "default", flex: "1", fontSize: "100%",
										height: "100%", width: "100%"
									}}>
									<div style={style.website_button_links}
										onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
										onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Visit site</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Page2;