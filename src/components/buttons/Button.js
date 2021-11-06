import React from "react";


const Button = ({ onClick, ButtonText, shadow }) => {

 return (
  <button className={`flex-child justify-center align-items-center 
  ${ButtonText ? "icon-button-text" : "icon-button"} px-1 ${shadow ? 'button-shadow' : ''}`} onClick={onClick}>
   <span className="text-overflow-ellipsis white-space-nowrap mx-1 bold">{ButtonText}</span>
  </button>
 )
}


export default Button;