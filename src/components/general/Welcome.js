import React from 'react';

const Welcome = ({ mediaQuery, transparentOverlay, mouseMove }) => {
 const messageWelcome = "Hello, my name is Ignacio Diaz".split("")
 return (
  <div className={`${mediaQuery === "small" ? "grid" : "flex"} absolute grid justify-center pa-2 home-menu`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
   <div className="grid align-items-center">
    <div className="flex pa-1 title-font align-self-baseline">
     {messageWelcome.map((letter, index) => {
      return <h3 className="letter-welcome teko pa-1" key={index}>{letter}</h3>
     })}
    </div>
   </div>
  </div>
 )
}

export default Welcome;