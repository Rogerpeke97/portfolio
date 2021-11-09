import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

function NotFound() {
  return (
    <div className="grid align-items-center 
    justify-center window-size-container pa-0">
      <div style={{ height: '300px', minWidth: '320px' }}
       className="grid align-items-center justify-center">
        <div className="flex justify-center align-items-center">
          <FontAwesomeIcon icon={faSadTear} size="4x" />
          <h1 className="ml-3 bold">404</h1>
        </div>
        <h2 className="text-align-center bold">Page not found!</h2>
      </div>
    </div>
  );
}

export default NotFound;