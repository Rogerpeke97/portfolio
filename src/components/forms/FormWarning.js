import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormWarning = ({ show, IconWarning, Message }) => {

 return (
  <div className={`flex my-4 h-auto text-green-700 items-center warning overflow-hidden ${show ? 'expandY' : 'shrinkY'}`}>
   <FontAwesomeIcon icon={IconWarning} />
   <div className="ml-2 fade-in bold">{Message}</div>
  </div>
 )
}


export default FormWarning;