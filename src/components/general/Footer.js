import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faInfoCircle, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import Form from './Form';

function Footer({mediaQuery}) {

 return (
  <footer className={`${mediaQuery === "small" ? "grid" : "flex"} justify-center`}>
   <div className="flex-child-no-flex grid pa-2 ma-2 justify-left">
    <div className="flex justify-left">
    <h1 className="title teko underline-effect footer-title">
     <FontAwesomeIcon className="pr-1" icon={faInfoCircle} /> About
    </h1>
    </div>
    <h2 >
     <FontAwesomeIcon className="pr-1" icon={faMapMarked} /> Buenos Aires, Argentina
    </h2>
    <h2 className="underline">
     <FontAwesomeIcon className="pr-1" icon={faGoogle} /> rogerpeke97@gmail.com
    </h2>
    <h2 className="word-break-word">
     &copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.
    </h2>
   </div>
   <div className="flex-child-no-flex grid pa-2 ma-2 justify-left" >
   <h1 className="title teko underline-effect footer-title">
     <FontAwesomeIcon className="pr-1" icon={faAddressBook} /> Contact me
    </h1>
    <Form />
   </div>
  </footer>
 )
}


export default Footer;