import React from 'react';

const Welcome = ({ titleLetter, mediaQuery, transparentOverlay, mouseMove }) => {
 const optionsMenu = ["Home", "About", "Projects", "Contact"]
 return (
  <div className={`${mediaQuery === "small" ? "grid" : "flex"} absolute grid justify-center pa-2 home-menu`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
   <div className="grid justify-center align-items-center text-align-center options-menu-home">
    {optionsMenu.map((option, index)=>{
     return <h2 class="underline-effect-no-box" key={index}>{option}</h2>
    })}
   </div>
   {/* <div className="flex justify-center align-items-center">{titleLetter('IGNACIO.MARTIN.DIAZ', false)}</div> */}
   <div class="grid align-items-center">
    <h1 className="pa-1 title-font" onClick={() => console.log(mediaQuery)}>
     HELLO

    </h1>
    <h1 className="pa-1 title-font">
     My name is Ignacio Diaz, I mainly focus on the creation of 3d websites
     and I am currently offering my services as a freelancer to design and
     create the website you desire utilizing technologies that will guarantee
     its scalability and functionality across all platforms.
    </h1>
   </div>
  </div>
 )
}

export default Welcome;