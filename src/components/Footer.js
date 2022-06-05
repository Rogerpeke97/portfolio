import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faInfoCircle, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import Form from './Form';

function Footer() {

  const [copied, setCopied] = useState({ value: false, busy: false });

  const copiedToClipboardFn = (textToCopy) => {
    if (!copied.busy) {
      setCopied({ value: true, busy: true });
      navigator.clipboard.writeText(textToCopy)
      setTimeout(() => setCopied({ value: false, busy: false }), 1000)
    }
  }

  return (
    <footer style={{ backgroundImage: 'url(backgrounds/curvedshape.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} 
    className="flex flex-wrap w-full mt-10 pt-24 pb-10 px-10 smAndDown:flex-col smAndDown:px-0">
      <div className="flex grow m-6 my-10 justify-center mdAndDown:justify-start">
        <div>
          <h1 className="font-teko underline font-bold text-5xl text-secondary">
            <FontAwesomeIcon className="pr-1" icon={faInfoCircle} />About
          </h1>
          <div className="pt-6">
            <h4 className="my-2 font-bold">
              <FontAwesomeIcon className="pr-1" icon={faMapMarked} /> Buenos Aires, Argentina
            </h4>
            <h4 className="my-2 font-bold">
              <FontAwesomeIcon className="pr-1" icon={faGoogle} />
              <i><span className="underline cursor-pointer"
                onClick={() => copiedToClipboardFn("rogerpeke97@gmail.com")}>rogerpeke97@gmail.com</span></i>
            </h4>
            <h4 className="my-2 font-bold">
              &copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.
          </h4>
          </div>
        </div>
      </div>
      <div className="flex grow m-6 my-10 justify-center mdAndDown:justify-start">
        <div className="w-full mdAndUp:w-[500px]">
          <h1 className="font-teko underline font-bold text-5xl text-secondary">
            <FontAwesomeIcon className="pr-1" icon={faAddressBook} />Contact me
          </h1>
          <Form />
        </div>
      </div>
      {copied.value && <div className="clipboard-message bold button-shadow">Text copied!</div>}
    </footer>
  )
}


export default Footer;