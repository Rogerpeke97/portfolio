
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'

function Form() {

 const [submitVal, setSubmitVal] = useState("")

 const [formInputValid, setFormInputValid] = useState(false)

 function handleChange(event) {
  console.log("Wwdwd")
 }

 function handleSubmit(event) {
  alert('An essay was submitted: ');
  event.preventDefault();
 }

 return (
  <form className="grid ma-1" onSubmit={handleSubmit}>
   <div className="flex justify-center align-items-center">
    <FontAwesomeIcon className={`${formInputValid ? "" : "disabled-icon"} pr-1`} icon={faAngleRight} />
    <input className="pa-1 ma-1" placeholder="Name" type="text" value={submitVal} onChange={handleChange} />
   </div>
   <div className="flex justify-center align-items-center">
    <FontAwesomeIcon className={`${formInputValid ? "" : "disabled-icon"} pr-1`} icon={faAngleRight} />
    <input className="pa-1 ma-1" placeholder="E-mail" type="text" value={submitVal} onChange={handleChange} />
   </div>
   <div className="flex justify-center align-items-center">
    <FontAwesomeIcon className={`${formInputValid ? "" : "disabled-icon"} pr-1`} icon={faAngleRight} />
    <textarea className="pa-1 ma-1" placeholder="Reason" type="text" value={submitVal} onChange={handleChange} />
   </div>
   <div className="flex justify-center align-items-center">
    <FontAwesomeIcon className={`${formInputValid ? "" : "disabled-icon"} pr-1`} icon={faCheck} />
    <input className="pa-1 ma-1 mr-2 icon-custom" type="submit" value="Submit" />
   </div>
  </form>
 )
}


export default Form;