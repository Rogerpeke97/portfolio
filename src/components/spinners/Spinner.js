import React from "react";


const Spinner = ({ className }) => {

 return (
  <div className={`items-center justify-center flex fade-in w-full h-full ${className}`}>
   <div className="spinner" />
  </div>
 )
}


export default Spinner;