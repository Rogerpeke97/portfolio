import React from 'react';

const Welcome = ({ mediaQuery, transparentOverlay, mouseMove }) => {
 const messageWelcome = "Ignacio Diaz".split("")
 return (
  <div className={`${mediaQuery === "small" ? "grid" : "flex"} absolute grid justify-center home-menu`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
   <div className="grid align-items-center">
    <div className="flex pa-1 bold justify-center">
     {messageWelcome.map((letter, index) => {
      return <h1 className="letter-welcome-title px-1 Teko" key={index}>{letter}</h1>
     })}
    </div>
    <div className={`${mediaQuery === "small" ? "grid" : "flex"} align-items-center`}>
     <h1 className="letter-welcome-subtitle px-1 bold underline Teko">
      Languages:
     </h1>
     <div className="flex">
      <img src="c++.svg" className="mx-2 pa-1 technology-box" alt="C++" />
      <img src="java.svg" className="mx-2 pa-1 technology-box" alt="Java"  />
      <img src="javascript.svg" className="mx-2 pa-1 technology-box" alt="Javascript"  />
     </div>
    </div>
    <div className={`${mediaQuery === "small" ? "grid" : "flex"} align-items-center`}>
     <h1 className="letter-welcome-subtitle px-1 bold underline Teko">
      Frameworks / API:
     </h1>
     <div className="flex">
      <img src="react.svg" className="mx-2 pa-1 technology-box" alt="React"  />
      <img src="vue.svg" className="mx-2 pa-1 technology-box" alt="Vue"  />
      <img src="vuetify.svg" className="mx-2 pa-1 technology-box" alt="Vue"  />
      <img src="webgl.svg" className="mx-2 pa-1 technology-box" alt="WebGL"  />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Welcome;