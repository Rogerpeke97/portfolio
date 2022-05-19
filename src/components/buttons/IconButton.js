import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";


const IconButton = ({ className ,onClick, ButtonText, IconName, Link }) => {

  const executeParentActionOrOpenLink = () => {
    if(Link){
      window.open(Link, '_blank')
    }
    if(onClick){
      onClick()
    }
  }
  
 return (
   <button className={`${className} flex overflow-hidden justify-center items-center bg-button-dark cursor-pointer h-12 rounded-lg transition ease duration-300 p-3 
    ${ButtonText ? "inset-button-shadow max-w-[200px]" : "bg-transparent max-w-[50px] p-0 h-8"}`} onClick={executeParentActionOrOpenLink}>
    <FontAwesomeIcon className={`text-2xl transition ease duration-300 ${!ButtonText && 'button-shadow-icon text-3xl'}`} icon={IconName} />
    {ButtonText && <span className="truncate mx-1 font-bold">{ButtonText}</span>}
   </button>
 )
}


export default IconButton;