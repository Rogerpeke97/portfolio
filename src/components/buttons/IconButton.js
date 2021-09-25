import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


const IconButton = ({ onClick, ButtonText, IconName, Link }) => {

 return (
  <a href={Link} className={`flex-child ${ButtonText ? "icon-button-text" : "icon-button"}`}  rel="noopener noreferrer" target="_blank">
   <button className={`flex-child justify-center align-items-center ${ButtonText ? "icon-button-text" : "icon-button"} px-1`} onClick={onClick}>
    <FontAwesomeIcon icon={IconName}
     onMouseEnter={(e) => e.currentTarget.style.color = "rgba(44,12,175,1)"}
     onMouseLeave={(e) => e.currentTarget.style.color = "white"} />
    <span className="text-overflow-ellipsis white-space-nowrap mx-1 bold">{ButtonText}</span>
   </button>
  </a>
 )
}


export default IconButton;