import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faInfoCircle, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import Form from './Form';

function Footer({ mediaQuery }) {

  const [copied, setCopied] = useState({value: false, busy: false});

  const copiedToClipboardFn = (textToCopy) => {
    if(!copied.busy) {
      setCopied({value: true, busy: true});
      navigator.clipboard.writeText(textToCopy)
      setTimeout(()=>setCopied({value: false, busy: false}),1000)
    }
  }

  return (
    <footer className={`${mediaQuery === "small" ? "grid" : "flex"} justify-left`}>
      <div className="flex-child-no-flex grid pa-2 ma-2">
        <h1 className="letter-welcome-subtitle Teko underline">
          <FontAwesomeIcon className="pr-1" icon={faInfoCircle} />About
        </h1>
        <h4>
          <FontAwesomeIcon className="pr-1" icon={faMapMarked} /> Buenos Aires, Argentina
        </h4>
        <h4>
          <FontAwesomeIcon className="pr-1" icon={faGoogle} /> 
          <i><span className="underline cursor-pointer" 
          onClick={()=>copiedToClipboardFn("rogerpeke97@gmail.com")}>rogerpeke97@gmail.com</span></i>
        </h4>
        <h4 className="word-break-word">
          &copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.
        </h4>
      </div>
      <div className="flex-child-no-flex grid pa-2 ma-2" >
        <h1 className="letter-welcome-subtitle Teko underline">
          <FontAwesomeIcon className="pr-1" icon={faAddressBook} />Contact me
        </h1>
        <Form />
      </div>
      {copied.value && <div className="clipboard-message bold button-shadow">Text copied!</div>}
    </footer>
  )
}


export default Footer;