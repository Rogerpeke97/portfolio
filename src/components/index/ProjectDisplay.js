import React from "react";
import { useRef, useState } from "react";
import { faImage, faInfoCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../buttons/IconButton.js';
import FlipCard from "../cards/FlipCard.js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectDisplay = ({ project }) => {
	const technologiesCard = useRef(0)
	const previewCard = useRef(0)
  const [currentCard, setCurrentCard] = useState('front')

	return (
		<>
			<div className="flex m-3 my-5 p-7 h-full items-center mdAndDown:flex-col smAndDown:p-0">
        <FlipCard setCurrentCard={(state) => setCurrentCard(state)} activator={<IconButton IconName={currentCard === 'front' ? faInfoCircle : faImage} />} 
          cardsText={{front: 'Tech stack', back: 'Preview'}} className="rounded-md mdAndUp:min-w-[600px] min-h-[400px] mdAndDown:mx-4">
          <div className="flex p-4 py-10 w-full h-full items-center justify-center" ref={previewCard}>
            <img className="w-full rounded-md object-contain h-full" src={project.previewGif.name} alt={project.previewGif.alt}></img>
          </div>
          <div className="flex p-4 py-10 flex-col inset-0 justify-between h-full items-center" ref={technologiesCard}>
            <div className="h-[50px]">
              <h2 className="text-align-center font-bold">{"<Technologies used />"}</h2>
            </div>
            <div className="flex flex-wrap w-full h-full justify-center">
              {project.stackImages.map((image, index) => {
                return <img className="w-[100px] h-[100px] object-contain" src={image.src} alt={image.alt} key={index}></img>
              })}
            </div>
          </div>
        </FlipCard>
        <div className="flex flex-col justify-between w-full p-7 m-5 h-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="inset-0 font-bold font-teko text-5xl pb-4 text-secondary underline">{project.title}</h1>
            <p className="py-4 font-bold" style={{lineHeight: "1.6"}}>{project.description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            {project.github.map((github, index) => {
              return <IconButton className="m-2" key={index} IconName={faGithub} ButtonText={github.description} Link={github.link} />
            })}
            <IconButton className="m-2" IconName={faLink} ButtonText={"Visit Site"} Link={project.site} shadow />
				  </div>
        </div>
			</div>
		</>
	)
}


export default ProjectDisplay;
