import React from "react";
import Spinner from "../spinners/Spinner";


const Button = ({ onClick, ButtonText, shadow, isLoading, disabled }) => {

 return (
  <button disabled={isLoading || disabled}
   className={`flex-child justify-center align-items-center ${ButtonText ? "icon-button-text" : "icon-button"} px-1 ${shadow ? 'button-shadow' : ''}`}
   onClick={onClick}>
    {isLoading ? <Spinner /> : <span className="text-overflow-ellipsis white-space-nowrap mx-1 bold fade-in">{ButtonText}</span>}
  </button>
 )
}


export default Button;