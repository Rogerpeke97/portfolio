import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import Spinner from '../spinners/Spinner'


const IconButton = ({ className ,onClick, ButtonText, IconName, Link, isLoading, disabled }) => {

  const executeParentActionOrOpenLink = () => {
    if(isLoading || disabled) return
    if(Link){
      window.open(Link, '_blank')
    }
    if(onClick){
      onClick()
    }
  }

 return (
   <button disabled={disabled} className={`${className} ${isLoading && 'relative'} flex overflow-hidden justify-center
    items-center cursor-pointer h-12 rounded-lg transition ease duration-300 p-3 
    ${ButtonText ? "inset-button-shadow max-w-[200px] bg-button-dark" : "bg-transparent max-w-[50px] p-0 h-8"}`} onClick={executeParentActionOrOpenLink}>
      {isLoading && <Spinner className="absolute m-auto bg-button-dark z-10" />}
      <FontAwesomeIcon className={`text-2xl transition ease duration-300 ${!ButtonText && 'button-shadow-icon text-3xl'}`} icon={IconName} />
      {ButtonText && <span className="truncate ml-2 font-bold">{ButtonText}</span>}
   </button>
 )
}


export default IconButton;