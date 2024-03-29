import React from "react";
import ProjectDisplay from './ProjectDisplay'

const Projects = () => {

	const xentaInfo = {
		previewGif: {name: "projects/xenta.gif", alt: "xenta game"},
		stackImages: [
			{src: "tech-stack/nodejslogo.png", alt: "NodeJS"},
			{src: "tech-stack/Reactjslogo.png", alt: "React"},
			{src: "tech-stack/threejslogo.png", alt: "ThreeJS"},
			{src: "tech-stack/postgresqllogo.png", alt: "PostgreSQL"}
		],
		title: "Xenta",
		description: `This website is basically an "infinite" (If you don't die that is) game where you are given the sensation
		that you are moving forward but in reality the character is just orbiting around the surface of the sphere.
		This was achieved using Trigonometry which was also applied to the movement of the trees and grass as time passes.
		You have a score, which is saved if your performance was better than your previous best score and a set amount of lives
		that decrease as you hit the trees. This website uses JWT to authenticate users with the Spring Boot Backend.`,
		github: [
			{link: "https://github.com/Rogerpeke97/FrontendAPI", description: "Frontend"},
			{link: "https://github.com/Rogerpeke97/APISpring", description: "Backend"},
		],
		site: "https://xenta.netlify.app/"
	}
	const csvConverter = {
		previewGif: {name: "projects/csv-converter.gif", alt: "Csv Converter"},
		stackImages: [
			{src: "tech-stack/nodejslogo.png", alt: "NodeJS"},
			{src: "tech-stack/postgresqllogo.png", alt: "PostgreSQL"}
		],
		title: "Csv-Converter",
		description: `This is my first project, it converts csv files and displays them in a canvas using chartjs.
		It has a lot of backend functionalities that allowed me to learn about backend and frontend requests,
		remote storage using googlecloud's api, file storage using multer, downloading files from googlecloud and
		display them on the frontend.
		Also, deploying the website using the heroku cli and creating a database for the login user data.`,
		github: [
			{link: "https://github.com/Rogerpeke97/Csv-converter-server-config", description: "Repository"},
		],
		site: "https://csv-convrt.herokuapp.com/"
	}

	return (
		<div className="grid h-full w-full justify-center items-center">
      <ProjectDisplay project={xentaInfo} />
      <ProjectDisplay project={csvConverter} />
		</div>
	)
}
export default Projects;