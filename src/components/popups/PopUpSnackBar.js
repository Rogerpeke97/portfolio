import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { useState, useEffect } from "react";
import IconButton from '../buttons/IconButton';

const PopUpSnackBar = ({ show, message, icon, onCloseDialog }) => {
 
 const [hideDialogAfterAnimation, setHideDialogAfterAnimation] = useState(false)

 useEffect(() => {
  if(show) {
    setHideDialogAfterAnimation(false)
  }
 }, [show])

 const hideDialog = () => {
  if(!show){
    setHideDialogAfterAnimation(true)
    return
  }
  setHideDialogAfterAnimation(false)
 }

 return (
  <div onAnimationEnd={hideDialog}
  className={`${hideDialogAfterAnimation && 'hidden'} ${show ? "fade-in" : "fade-out"} fixed h-[150px] rounded-lg
    mdAndUp:max-w-[500px] smAndDown:w-full inset-0 bg-secondary items-center m-auto z-50 p-5 flex flex-col font-bold shadow-xl`}>
   <div className="flex w-full items-center justify-center min-width-0 px-2">
    <FontAwesomeIcon className="text-black" icon={icon} />
     <p className="text-ellipsis ml-2 font-bold text-black truncate px-1" style={{whiteSpace: 'pre-wrap'}}>
       asdalksdjasdjakjsdjkasjkdakjsdkjasjkdkjasdkjakjsdkjasdkjakjsdjkasdjkasjkdakjsdkjasdkjaskjdakjsdkjaskjdaskjdjkasdkjaskjdas
     </p>
   </div>
   <IconButton className="ml-3 w-[150px] mt-auto" type="button" ButtonText={"Ok"} IconName={faCheck} onClick={onCloseDialog} />
  </div>
 )
}


export default PopUpSnackBar;