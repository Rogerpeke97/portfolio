import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

function NotFound() {
  return (
    <div className="flex h-full w-full items-center justify-center p-0">
      <div className="flex flex-col items-center justify-center w-[320px] h-[300px]">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faSadTear} size="4x" />
          <h1 className="ml-2 font-bold text-4xl">404!</h1>
        </div>
        <div className="flex pt-16 flex-col items-center">
          <h2 className="text-center font-bold text-2xl">Page not found</h2>
          <a href="/" className="ml-1 text-secondary font-bold underline"><h2>Go home</h2></a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;