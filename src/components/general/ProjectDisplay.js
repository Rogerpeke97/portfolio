import React, { useEffect } from "react";
import { useRef } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faImage, faInfoCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { MediaContext } from '../../context/MediaContext.js';
import IconButton from '../buttons/IconButton.js';


const ProjectDisplay = ({ ProjectInfo }) => {
	const projectDescription = useRef(0)
	const projectImageBox = useRef(0)
	const {mediaQuery} = useContext(MediaContext)
	function swapHtmlElements() {
		projectDescription.current.style.transform = ["rotateY(180deg)", ""].includes(projectDescription.current.style.transform) || "" ? "rotateY(0deg)" : "rotateY(180deg)"
		projectImageBox.current.style.transform = ["rotateY(0deg)", ""].includes(projectImageBox.current.style.transform) ? "rotateY(180deg)" : "rotateY(0deg)"
		projectDescription.current.style.zIndex = ["0", ""].includes(projectDescription.current.style.zIndex) ? "1" : "0"
		projectImageBox.current.style.zIndex = ["1", ""].includes(projectDescription.current.style.zIndex) ? "0" : "1"
	}

	return (
		<div className={`${mediaQuery === "small" ? "grid" : "flex"} pa-2`} style={{ minHeight: "600px" }}>
			<div className="flex-child position-relative" style={{ border: "5px solid white", borderRadius: "6px" }}>
				<div className="flex-child-no-flex grid project-image-box align-items-center justify-center pa-2" ref={projectImageBox}>
					<img src={ProjectInfo.previewGif.name} alt={ProjectInfo.previewGif.alt}></img>
					<IconButton IconName={faInfoCircle} ButtonText={"Details"} onClick={swapHtmlElements} />
				</div>
				<div className="flex-child-no-flex grid project-description align-items-center justify-center" ref={projectDescription}>
					<h2 className="text-align-center underline">{"<Technologies used />"}</h2>
					<div className="flex-child align-items-center justify-center">
						{ProjectInfo.stackImages.map((image, index) => {
							return <img src={image.name} alt={image.alt} key={index}></img>
						})}
					</div>
					<IconButton IconName={faImage} ButtonText={"Go back"} onClick={swapHtmlElements} />
				</div>
			</div>
			<div className="flex-child-no-flex grid pa-3">
				<div>
					<h1 className="underline bold">{ProjectInfo.title}</h1>
					<p className="py-2 bold">{ProjectInfo.description}</p>
				</div>
				<div className={`${mediaQuery === "small" ? "grid" : "flex-child"} align-items-center justify-center`}>
					<div className={`${mediaQuery === "small" ? "grid" : "flex-child"} align-items-center justify-center`}>
						{ProjectInfo.github.map((github, index) => {
							return <div className="flex-child align-items-center justify-center pa-2" key={index}>
								<IconButton IconName={faGithub} ButtonText={github.description} Link={github.link} />
							</div>
						})}
					</div>
					<div className="flex-child align-items-center justify-center px-2">
						<IconButton IconName={faLink} ButtonText={"Visit Site"} Link={ProjectInfo.site} />
					</div>
				</div>
			</div>
		</div>
	)
}


export default ProjectDisplay;
