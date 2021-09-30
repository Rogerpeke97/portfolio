import React from 'react';

const Welcome = ({ mediaQuery, transparentOverlay, mouseMove }) => {
 const messageWelcome = "Ignacio Diaz".split("")
 return (
  <div className={`${mediaQuery === "small" ? "grid" : "flex"} absolute grid justify-center pa-2 home-menu`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
   <div className="grid align-items-center">
    <div className="flex pa-1 bold align-self-baseline">
     {messageWelcome.map((letter, index) => {
      return <h1 className="letter-welcome px-1 Teko" key={index}>{letter}</h1>
     })}
    </div>
    <div className="pa-2">
     <h1 className="letter-welcome px-1 bold underline Teko">
      Languages:
     </h1>
    </div>
    <div className="pa-2">
     <h1 className="letter-welcome px-1 bold underline Teko">
      Frameworks:
     </h1>
    </div>
   </div>
  </div>
 )
}

export default Welcome;