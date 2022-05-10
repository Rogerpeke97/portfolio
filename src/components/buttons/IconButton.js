import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


const IconButton = ({ onClick, ButtonText, IconName, Link, shadow }) => {

 return (
  <a href={Link} className={`flex w-full ${ButtonText ? "icon-button-text" : "icon-button"} ${shadow ? 'button-shadow' : ''}`}  rel="noopener noreferrer" target="_blank">
   <button className={`flex w-full justify-center items-center ${ButtonText ? "icon-button-text" : "icon-button"} px-1`} onClick={onClick}>
    <FontAwesomeIcon icon={IconName}
     onMouseEnter={(e) => ButtonText ? null : e.currentTarget.style.color = "rgba(44,12,175,1)"}
     onMouseLeave={(e) => ButtonText ? null : e.currentTarget.style.color = ""} />
    <span className="truncate mx-1 font-bold">{ButtonText}</span>
   </button>
  </a>
 )
}


export default IconButton;