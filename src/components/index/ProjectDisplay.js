import React from "react";
import { useRef } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faImage, faInfoCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { MediaContext } from '../../context/MediaContext.js';
import IconButton from '../buttons/IconButton.js';
import FlipCard from "../cards/FlipCard.js";


const ProjectDisplay = ({ ProjectInfo }) => {
	const technologiesCard = useRef(0)
	const previewCard = useRef(0)

  const flipCard = () => {
    technologiesCard.current.style.transform = ["rotateY(180deg)", ""].includes(technologiesCard.current.style.transform) || "" ? "rotateY(0deg)" : "rotateY(180deg)"
		previewCard.current.style.transform = ["rotateY(0deg)", ""].includes(previewCard.current.style.transform) ? "rotateY(180deg)" : "rotateY(0deg)"
		technologiesCard.current.style.zIndex = ["0", ""].includes(technologiesCard.current.style.zIndex) ? "1" : "0"
		previewCard.current.style.zIndex = ["1", ""].includes(technologiesCard.current.style.zIndex) ? "0" : "1" 
  }

	return (
		<>
			<div className="flex m-3 justify-between">
        <FlipCard className="flex relative border-2 max-w-[600px] w-full border-white rounded-md">
          <div className="flex p-4 w-full h-full items-center justify-center" ref={previewCard}>
            <img className="w-full h-full" src={ProjectInfo.previewGif.name} alt={ProjectInfo.previewGif.alt}></img>
            <IconButton className="absolute bottom-0" IconName={faInfoCircle} ButtonText={"Details"} onClick={flipCard} />
          </div>
          <div className="flex p-4 bg-gradient-to-r from-[#180e13] to-[#4e1523] flex-col w-full h-full absolute items-center" ref={technologiesCard}>
            <div className="h-[50px]">
              <h2 className="text-align-center underline">{"<Technologies used />"}</h2>
            </div>
            <div className="flex flex-wrap w-full justify-center">
              {ProjectInfo.stackImages.map((image, index) => {
                return <img className="w-[100px] h-[100px] object-contain" src={image.src} alt={image.alt} key={index}></img>
              })}
            </div>
            <IconButton className="absolute bottom-0" IconName={faImage} ButtonText={"Go back"} onClick={flipCard} />
          </div>
        </FlipCard>
			</div>
			{/* <div className={`${mediaQuery === "small" ? "pa-1" : "pa-6"} py-3 bold flex-child-no-flex grid`}>
				<div>
					<h1 className="letter-welcome-subtitle Teko underline bold text-align-center">{ProjectInfo.title}</h1>
					<p className="py-2 bold" style={{lineHeight: "1.6"}}>{ProjectInfo.description}</p>
				</div>
				<div className={`${mediaQuery === "small" ? "grid" : "flex-child"} align-items-center justify-center`}>
					<div className={`${mediaQuery === "small" ? "grid" : "flex-child"} align-items-center justify-center`}>
						{ProjectInfo.github.map((github, index) => {
							return <div className="flex-child align-items-center justify-center pa-2" key={index}>
								<IconButton IconName={faGithub} ButtonText={github.description} Link={github.link} shadow />
							</div>
						})}
					</div>
					<div className="flex-child align-items-center justify-center pa-2">
						<IconButton IconName={faLink} ButtonText={"Visit Site"} Link={ProjectInfo.site} shadow />
					</div>
				</div>
			</div> */}
		</>
	)
}


export default ProjectDisplay;
