import React from 'react';

const Welcome = ({ className = '', mediaQuery, transparentOverlay, mouseMove }) => {
  const messageWelcome = "Ignacio Diaz".split("")
  return (
    <div className={`flex flex-col flex-wrap absolute justify-center h-full ${className}`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
      <div className="grid h-full items-center">
        <div className="flex justify-center h-20">
          {messageWelcome.map((letter, index) => {
            return <h1 className="text-7xl font-teko px-1" key={index}>{letter}</h1>
          })}
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="letter-welcome-subtitle px-1 bold underline Teko">
            Languages:
          </h1>
          <div className="flex">
            <img src="c++.svg" className="mx-2 pa-1 technology-box" alt="C++" />
            <img src="java.svg" className="mx-2 pa-1 technology-box" alt="Java" />
            <img src="javascript.svg" className="mx-2 pa-1 technology-box" alt="Javascript" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="letter-welcome-subtitle px-1 bold underline Teko">
            Frameworks / API:
          </h1>
          <div className="flex">
            <img src="react.svg" className="mx-2 pa-1 technology-box" alt="React" />
            <img src="vue.svg" className="mx-2 pa-1 technology-box" alt="Vue" />
            <img src="vuetify.svg" className="mx-2 pa-1 technology-box" alt="Vue" />
            <img src="webgl.svg" className="mx-2 pa-1 technology-box" alt="WebGL" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;