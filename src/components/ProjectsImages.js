import React, { useEffect, useRef } from 'react';

const Particles = () => {

 const canvas = useRef(0);

 return (
  <div style={style.box}>
   <div style={style.explanation_website} ref={explanation_website_1_image}>
    <div style={{ transform: "rotateY(180deg)", textDecoration: "underline" }}>{"<Technologies used: />"}</div>
    <div style={style.technologies_holder}>
     <img src="spring_boot.png" alt="Spring boot" style={style.technologies_images}></img>
     <img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
     <img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
     <img src="postgresqllogo.png" alt="Spring boot" style={style.technologies_images}></img>
    </div>
    <div style={style.website_button_backwards} onClick={() => {
     website_1_image.current.style.transform = "rotateY(0deg)";
     explanation_website_1_image.current.style.transform = "rotateY(0deg)";
     website_1_image.current.style.zIndex = "2";
     explanation_website_1_image.current.style.zIndex = "1";
    }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
     onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>
   </div>
   <div style={style.website_image_container} ref={website_1_image}>
    <div style={{
     height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
     display: "grid", justifyItems: "center", background: "black"
    }}>
     <img src="xenta_gif.gif" alt="xenta game" style={style.grid_images}></img>
    </div>
    <div style={{
     height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
     display: "grid", justifyItems: "center", background: "black", opacity: "1"
    }}
     onMouseEnter={(e) => e.currentTarget.style.opacity = "0"}
     onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
    >
     <img src="xenta_front_page.jpg" alt="xenta game" style={style.grid_images}></img>
    </div>
    <div style={style.website_button} onClick={() => {
     website_1_image.current.style.transform = "rotateY(180deg)";
     explanation_website_1_image.current.style.transform = "rotateY(180deg)";
     website_1_image.current.style.zIndex = "1";
     explanation_website_1_image.current.style.zIndex = "2";
    }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
     onMouseLeave={(e) => e.currentTarget.style.boxShadow = ""}>See details</div>
   </div>
  </div>
 )

}

export default Particles;