import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormWarning = ({ onClick, IconWarning, Message }) => {

 return (
  <div className="flex align-items-center warning">
   <FontAwesomeIcon icon={IconWarning} />
   <div className="ml-2 fade-in bold">{Message}</div>
  </div>
 )
}


export default FormWarning;