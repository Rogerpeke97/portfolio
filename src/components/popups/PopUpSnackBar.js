import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { useContext, useState } from "react";
import Button from '../buttons/Button';
import { MediaContext } from '../../context/MediaContext.js';

const IconButton = ({ onClick, Message, IconName, Display }) => {
 
	const {mediaQuery} = useContext(MediaContext)

 const [fadeOut, setFadeOut] = useState(false);

 function handleFadeOut (){
   setFadeOut(true);
 }

 return (
  <div onAnimationEnd={()=>{
   if(fadeOut){
    onClick(!Display)
    setFadeOut(false)
   }
  }}
  className={`${Display ? "" : "display-none"} ${fadeOut ? "fade-out" : "fade-in"} grid font-bold justify-center button-shadow snackbar ${mediaQuery === 'small' ? "snackbar-mobile" : ""}`}>
   <div className="flex align-items-center 
   justify-center min-width-0 px-2">
    <FontAwesomeIcon className="warning" icon={IconName} />
     <p className="text-overflow-ellipsis px-1" style={{whiteSpace: 'pre-wrap'}}>{Message}</p>
   </div>
   <div className="flex align-items-center justify-center">
    <Button className="pa-1 ma-1 mr-2 icon-custom"
    ButtonText={"Ok"} shadow onClick={handleFadeOut} />
   </div>
  </div>
 )
}


export default IconButton;