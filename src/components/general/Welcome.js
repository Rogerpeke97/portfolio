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
    <div className={`${mediaQuery === "small" ? "grid" : "flex"} align-items-center`}>
     <h1 className="letter-welcome px-1 bold underline Teko">
      Languages:
     </h1>
     <div className="flex">
      <img src="react.svg" className="mx-2 pa-1" alt="React" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
      <img src="vue.svg" className="mx-2 pa-1" alt="Vue" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
      <img src="vuetify.svg" className="mx-2 pa-1" alt="Vue" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
     </div>
    </div>
    <div className={`${mediaQuery === "small" ? "grid" : "flex"} pa-2 align-items-center`}>
     <h1 className="letter-welcome px-1 bold underline Teko">
      Frameworks:
     </h1>
     <div className="flex">
      <img src="react.svg" className="mx-2 pa-1" alt="React" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
      <img src="vue.svg" className="mx-2 pa-1" alt="Vue" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
      <img src="vuetify.svg" className="mx-2 pa-1" alt="Vue" style={{color: 'white', background: 'rgb(69,40,189)', height: '100px', width: '80px'}} />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Welcome;