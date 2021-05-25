import React from 'react';
import {useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faMapMarked, faCopy } from '@fortawesome/free-solid-svg-icons'
import CanvasBlue from './particles_2d/canvas_2d_blue'
import CanvasWhite from './particles_2d/canvas_2d_white'
import BackgroundHome from './three_scenes/background_homescreen'

const style = {
    portfolio_grid: {
        display: "grid",
        width: "90%",
        gridTemplateRows: "10% 90%",
        height: "1620px",
        position: "relative",
        left: "5%",
        zIndex: "1",
    },
    moving_div_1: {
        flex: "1",
        height: "0", 
        zIndex: "0", 
        width:"25%", 
        borderBottom: "1620px solid rgba(44,12,175,1)",
        borderRight: "1620px solid transparent",  
        position: "absolute", 
        left: "-100%", 
        top: "0vh",
        opacity: "0.5"
    },
    moving_div_2: {
        flex: "1", 
        height: "0", 
        zIndex: "0", 
        width:"100%", 
        borderBottom: "1080px solid whitesmoke",
        borderRight: "1080px solid transparent",  
        position: "absolute", 
        left: "100%", 
        transform: "scaleX(-1)",
        opacity: "0.4"
    },
    my_work_title: {
        display: "grid",
        cursor: "default",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "300%",
        height: "100%",
        width: "100%"
    },
    websites: {
        display: "grid",
        gridTemplateRows: "33.33% 33.33% 33.33%"
    },
    grid: {
        display: "flex",
        paddingBottom: "1%"
    },
    grid_phone_media: {
        display: "grid",
        gridTemplateRows: "50% 50%",
        fontSize: "75%",
        paddingBottom: "12%"
    },
    box: {
        position: "relative",
        width: "100%",
        border: "5px solid white",
        borderRadius: "6px",
        flex: "1",
        transition: "transform 0.5s ease-out",
        boxShadow: " 0px 0px 50px -4px black",
    },
    box_explanation: {
        margin: "2%",
        position: "relative",
        width: "100%",
        flex: "1",
        transition: "transform 0.5s ease-out",
        display: "grid",
        gridTemplateRows: "20% 60% 20%"
    },
    box_explanation_small: {
        margin: "0%",
        position: "relative",
        width: "100%",
        flex: "1",
        transition: "transform 0.5s ease-out",
        display: "grid",
        gridTemplateRows: "20% 60% 20%"
    },
    box_explanation_title: {
        fontWeight: "bold",
        fontSize: "300%",
        textShadow: "2px 2px 2px black",
        textDecoration: "underline"
    },
    box_explanation_description: {
        fontWeight: "normal",
        textAlign: "justify"
    },
    box_explanation_description_small: {
        fontWeight: "normal",
        display: "grid",
        alignContent: "center",
        textAlign: "justify"
    },
    grid_images: {
        position: "absolute",
        maxHeight: "100%",
        minHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
        zIndex: "0"
    },
    explanation_website : {
        position: "absolute",
        background: "linear-gradient(56deg, rgba(24,14,19,1) 28%, rgba(78,21,35,1) 59%)",
        display: "grid",
        textAlign: "center",
        gridTemplateRows: "10% 70% 20%",
        width: "100%",
        height: "100%",
        z_index: "-1",
        transition: "all 0.5s ease-out"
    },
    website_button : {
        position: "absolute",
        width: "50%",
        height: "20%",
        top: "80%",
        left: "25%",
        background: "rgba(44,12,175,1)",
        borderRadius: "5px",
        color: "white",
        fontWeight: "bold",
        textShadow: "2px 2px 2px black",
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.5s ease-out",
        display: "grid",
        alignItems: "center",
        zIndex: "1"
    },
    website_button_backwards : {
        position: "absolute",
        width: "50%",
        height: "20%",
        top: "80%",
        left: "25%",
        background: "rgba(44,12,175,1)",
        borderRadius: "5px",
        color: "white",
        fontWeight: "bold",
        textShadow: "2px 2px 2px black",
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.5s ease-out",
        display: "grid",
        alignItems: "center",
        zIndex: "1",
        transform: "rotateY(180deg)"
    },
    website_button_links: {
        position: "relative",
        width: "50%",
        height: "60%",
        top: "15%",
        left: "25%",
        background: "rgba(44,12,175,1)",
        borderRadius: "5px",
        color: "white",
        fontWeight: "bold",
        textShadow: "2px 2px 2px black",
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.5s ease-out",
        display: "grid",
        alignItems: "center",
        zIndex: "1" 
    },
    website_links: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    technologies_holder: {
        display: "flex",
        maxWidth: "100%",
        maxHeight: "100%",
        height: "50%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    technologies_holder_small: {
        display: "flex",
        maxWidth: "100%",
        maxHeight: "100%",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    technologies_images: {
        flex: "25%",
        maxHeight: "100%",
        width: "25%",
        objectFit: "contain",
        zIndex: "0",
        transform: "rotateY(180deg)"
    },
    technologies_images_normal: {
        flex: "20%",
        height: "50%",
        margin: "3%",
        width: "20%",
        zIndex: "0",
        position: "relative",
        background: "gray",
        borderRadius: "10px"
    },
    website_image_container: {
        height: "100%", 
        width: "100%",
        position: "relative", 
        transition: "all 0.5s ease-out",
        display: "grid", 
        justifyItems: "center", 
        background: "black"
    },
    footer: {
        backgroundColor: "rgba(24,8,100,1)",
        color: 'white',
        zIndex: "2",
        display: 'flex',
        fontSize: "80%",
        justifyContent: "center",
        height: '10rem',
        position: "relative",
        width: "100%",
    },
    selling_description: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "justify",
        zIndex: "1",
        position: "relative",
        left: "15%",
        width: "70%",
        paddingTop: "5%",
        fontSize: "150%"
    },
    selling_description_small: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "justify",
        zIndex: "1",
        position: "relative",
        left: "15%",
        width: "70%",
        paddingTop: "5%",
        fontSize: "100%"
    },
    page_3:{
        height: "1080px",
        width: "100%", 
        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
        backgroundSize: "400% 400%", 
        animation: "transition 45s infinite",
        display: "grid",
        gridTemplateRows: "30% 30%"
    },
    title_letter:{
        transition: 'all 0.5s ease-out',
        cursor: 'default',
        fontSize: '1000%',
        margin: "0",
        fontFamily: 'Teko, sans-serif'
    },
    title_letter_small:{
        transition: 'all 0.5s ease-out',
        cursor: 'default',
        margin: "0",
        color: 'white',
        fontFamily: 'Teko, sans-serif'
    },
    title_letter_small_footer:{
        transition: 'all 0.5s ease-out',
        cursor: 'default',
        margin: "0",
        color: 'white',
        fontFamily: 'Teko, sans-serif'
    },
    a_link_holder: {
        display: "grid",
        textDecoration: "none",
        color: "white",
        cursor: "default",
        flex: "1", 
        justifyContent: "right",
        alignItems: "center"
    },
    clipboard: {
        display: "grid",
        pointerEvents: "none",
        position: "absolute",
        textAlign: "center",
        alignItems: "center",
        left: "50%",
        top: "50%",
        width: "250px",
        height: "15%",
        marginLeft: "-125px",
        marginTop: "-1%",
        transition: "0.5s ease-out",
        opacity: "0",
        background: "black",
        borderRadius: "5px"
    },
    letter_container: {
        display: "flex", 
        justifyContent: "center",
        alignItems: "center"
    },
    letter_container_small: {
        display: "flex", 
        justifyContent: "center",
        fontSize: "34%",
        alignItems: "center"
    },
}



function ThreeJsScene() {

    const portfolio_grid = useRef(0);
    const underline_login = useRef(0);
    const login_font = useRef(0);
    const website_1_image = useRef(0);
    const explanation_website_1_image = useRef(0);
    const website_2_image = useRef(0);
    const explanation_website_2_image = useRef(0);
    const website_3_image = useRef(0);
    const explanation_website_3_image = useRef(0);
    const page_3 = useRef(0);
    const nav_bar = useRef(0);
    const copied_to_clipboard = useRef(0);
    const [smartphoneView, setSmartphoneView] = useState(false);






    /*function MouseMoveE(event) {
        let canvasContainer = document.getElementById('canvas')
        let mousex = (event.clientX   - ( canvasContainer.getBoundingClientRect().left / 2)) ;
        let mousey = (event.clientY  - ( canvasContainer.getBoundingClientRect().top / 2)) ;
        let x = mousex - canvasContainer.getBoundingClientRect().width / 2 ;
        let y = canvasContainer.getBoundingClientRect().height / 2 - mousey ;
        let overlay = document.getElementById('overlay');
        let overlay2 = document.getElementById('overlay2');
        let grid1_intro = document.getElementById('grid1_intro');
        let grid1_name_img = document.getElementById('grid1_name_img');
        overlay.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        overlay2.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        grid1_intro.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        grid1_name_img.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
    }*/











    const title_letter = (letter, small)=>{
        let span_return = [];
        for(let i = 0; i < letter.length; i++){
            span_return.push(small
            ?
            <h1
            style={style.title_letter_small}
            onMouseEnter={(e)=>e.currentTarget.style.color='rgba(44,12,175,1)'}
            onMouseLeave={(e)=>e.currentTarget.style.color='white'}
            >{letter[i]}</h1>
            :
            <h1
            style={style.title_letter}
            onMouseEnter={(e)=>e.currentTarget.style.color='rgba(44,12,175,1)'}
            onMouseLeave={(e)=>e.currentTarget.style.color='white'}
            >{letter[i]}</h1>
            )
        }
        return(
            span_return
        )
    }

    const copied_to_clipboard_function = ()=>{
        const text_to_copy = document.createElement('textarea');
        text_to_copy.value = 'rogerpeke97@gmail.com';
        document.body.appendChild(text_to_copy);
        text_to_copy.select();
        document.execCommand('copy');
        document.body.removeChild(text_to_copy);  
        copied_to_clipboard.current.style.opacity = "1";
        setTimeout(()=>copied_to_clipboard.current.style.opacity = "0", 500)
    }




    return (
        <div style={{maxWidth: "100%", height: "100%", position: "relative"}}>
            <div ref={nav_bar} style={{display: "flex", width: "100%", height: "5rem", background: "black", position: "sticky",
            color: "white", top: "0", zIndex: "3"
            }}>
                <div style={{justifyContent: "left", alignContent: "center", display: "flex", flex: "1", marginLeft: "2%"}}>
                    <div style={style.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', true)}</div>
                </div>
                <div style={{flex:"1", display: "flex", alignContent: "center", marginRight: "2%"}}>
                    <div style={style.a_link_holder}>
                            <a href="https://github.com/Rogerpeke97" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{cursor: "pointer", transition: "all 0.5s ease-out", color:"white", fontSize: "200%"}}
                                onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                                onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>
                            </a>
                        </div>
                        <div style={style.a_link_holder}>
                            <a href="https://www.linkedin.com/in/ignacio-martin-diaz-2a30251b7/" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{cursor: "pointer", transition: "all 0.5s ease-out", color:"white", fontSize: "200%"}}
                                onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                                onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>                    
                            </a>
                    </div>
                </div>
            </div>
            <BackgroundHome smartphoneView = {smartphoneView} setSmartphoneView = {setSmartphoneView} title_letter = {title_letter} />

            <div className= "THEFREAKINGPAGE" style={{display: "grid", maxWidth: "100%", minHeight: "1620px", maxHeight: "1620px", position: "relative",
             zIndex: "2"
             }}>
                <CanvasBlue portfolio_grid = {portfolio_grid} />
                <div style={{display: "grid", maxHeight: "1620px"}}>
                    <div ref={portfolio_grid} style={style.portfolio_grid}>
                        <div style={style.my_work_title}>
                            <div
                                onMouseEnter={()=>{
                                    login_font.current.style.color = "white";
                                    underline_login.current.style.transform = "scaleX(1)";
                                }}
                                onMouseLeave={()=>{
                                    login_font.current.style.color = "white";
                                    underline_login.current.style.transform = "scaleX(0)";   
                                }}
                            >
                                <div style={{border: "3px solid rgba(24,8,100,1)", borderRadius: "6px", fontFamily: "Teko, sans-serif", fontSize: "120%"}} ref={login_font}>My work:</div>
                                <div style={{height: "2px", width: "100%", background:"white",
                                transform: "scaleX(0)", transition: "all 0.3s ease-out"}} ref={underline_login}></div>
                            </div>  
                        </div> 
                        <div style={style.websites}>
                            <div style={smartphoneView ? style.grid_phone_media : style.grid}>
                                <div style={style.box}>
                                    <div style={style.explanation_website} ref={explanation_website_1_image}>
                                        <div style={{transform: "rotateY(180deg)", textDecoration: "underline"}}>{"<Technologies used: />"}</div>
                                        <div style={style.technologies_holder}>
                                            <img src="spring_boot.png" alt="Spring boot" style={style.technologies_images}></img>
                                            <img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
                                            <img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
                                            <img src="postgresqllogo.png" alt="Spring boot" style={style.technologies_images}></img>
                                        </div>
                                        <div style={style.website_button_backwards} onClick={()=>{
                                                website_1_image.current.style.transform = "rotateY(0deg)";
                                                explanation_website_1_image.current.style.transform = "rotateY(0deg)";
                                                website_1_image.current.style.zIndex = "2";
                                                explanation_website_1_image.current.style.zIndex = "1";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>                                    
                                    </div>
                                    <div style={style.website_image_container} ref={website_1_image}>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black"}}>
                                            <img src="xenta_gif.gif" alt="xenta game" style={style.grid_images}></img>
                                        </div>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black", opacity: "1"}} 
                                        onMouseEnter={(e)=>e.currentTarget.style.opacity = "0"}
                                        onMouseLeave={(e)=>e.currentTarget.style.opacity = "1"}
                                        >
                                            <img src="xenta_front_page.jpg" alt="xenta game" style={style.grid_images}></img>
                                        </div>
                                        <div style={style.website_button} onClick={()=>{
                                            website_1_image.current.style.transform = "rotateY(180deg)";
                                            explanation_website_1_image.current.style.transform = "rotateY(180deg)";
                                            website_1_image.current.style.zIndex = "1";
                                            explanation_website_1_image.current.style.zIndex = "2";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={smartphoneView ? style.box_explanation_small : style.box_explanation}>
                                    <div style={style.box_explanation_title}>Xenta's website:</div>
                                    <div style={smartphoneView ? style.box_explanation_description_small : style.box_explanation_description}>
                                        This website is basically an "infinite" (If you don't die that is) game where you are given the sensation
                                        that you are moving forward but in reality the character is just orbiting around the surface of the sphere.
                                        This was achieved using Trigonometry which was also applied to the movement of the trees and grass as time passes. 
                                        You have a score, which is saved if your performance was better than your previous best score and a set amount of lives 
                                        that decrease as you hit the trees. This website uses JWT to authenticate users with the Spring Boot Backend.
                                    </div>
                                    <div style={style.website_links}>
                                        <div style={{display: "grid", justifyContent:"center", alignItems: "center", flex: "1"}}>
                                            <a href="https://github.com/Rogerpeke97/FrontendAPI" rel="noopener noreferrer" target="_blank"
                                            style={{display: "grid",textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "150%",
                                            justifyContent: "center", justifyItems: "center"}}>
                                                Frontend:
                                                <FontAwesomeIcon icon={faGithub} style={{cursor: "pointer", transition: "all 0.5s ease-out"}}
                                                onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                                                onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>
                                            </a>
                                        </div>
                                        <div style={{display: "grid", justifyContent:"center", alignItems: "center", flex: "1"}}>
                                            <a href="https://github.com/Rogerpeke97/APISpring" rel="noopener noreferrer" target="_blank"
                                            style={{display: "grid",textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "150%",
                                            justifyContent: "center", justifyItems: "center"}}>
                                                Backend:
                                                <FontAwesomeIcon icon={faGithub} style={{cursor: "pointer", transition: "all 0.5s ease-out"}}
                                                onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                                                onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>
                                            </a>
                                        </div>
                                        <a href="https://xenta.netlify.app/" rel="noopener noreferrer" target="_blank"
                                        style={{textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "100%",
                                        height: "100%", width: "100%"}}>
                                            <div style={style.website_button_links}
                                            onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                            onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>                          
                            </div>
                            <div style={smartphoneView ? style.grid_phone_media : style.grid}>
                                <div style={style.box}>
                                    <div style={style.explanation_website} ref={explanation_website_2_image}>
                                        <div style={{transform: "rotateY(180deg)", textDecoration: "underline"}}>{"<Technologies used: />"}</div>
                                        <div style={style.technologies_holder}>
                                            <img src="nodejslogo.png" alt="Spring boot" style={style.technologies_images}></img>
                                            <img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
                                            <img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
                                            <img src="postgresqllogo.png" alt="Spring boot" style={style.technologies_images}></img>
                                        </div>
                                        <div style={style.website_button_backwards} onClick={()=>{
                                                website_2_image.current.style.transform = "rotateY(0deg)";
                                                explanation_website_2_image.current.style.transform = "rotateY(0deg)";
                                                website_2_image.current.style.zIndex = "2";
                                                explanation_website_2_image.current.style.zIndex = "1";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>                                    
                                    </div>
                                    <div style={style.website_image_container} ref={website_2_image}>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black"}}>
                                                <img src="project1.gif" alt="csv converter" style={style.grid_images}></img>
                                        </div>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black", opacity: "1"}} 
                                        onMouseEnter={(e)=>e.currentTarget.style.opacity = "0"}
                                        onMouseLeave={(e)=>e.currentTarget.style.opacity = "1"}
                                        >
                                            <img src="project1_front.png" alt="csv converter" style={style.grid_images}></img>
                                        </div>
                                        <div style={style.website_button} onClick={()=>{
                                            website_2_image.current.style.transform = "rotateY(180deg)";
                                            explanation_website_2_image.current.style.transform = "rotateY(180deg)";
                                            website_2_image.current.style.zIndex = "1";
                                            explanation_website_2_image.current.style.zIndex = "2";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={style.box_explanation}>
                                    <div style={style.box_explanation_title}>Csv-converter:</div>
                                    <div style={smartphoneView ? style.box_explanation_description_small : style.box_explanation_description}>
                                    This is my first project, it converts csv files and displays them in a canvas using chartjs. 
                                    It has a lot of backend functionalities that allowed me to learn about backend and frontend requests,
                                    remote storage using googlecloud's api, file storage using multer, downloading files from googlecloud and 
                                    display them on the frontend. 
                                    Also, deploying the website using the heroku cli and creating a database for the login user data.
                                    </div>
                                    <div style={style.website_links}>
                                        <div style={{display: "grid", justifyContent:"center", alignItems: "center", flex: "1"}}>
                                            <a href="https://github.com/Rogerpeke97/Csv-converter-server-config" rel="noopener noreferrer" target="_blank"
                                            style={{display: "grid",textDecoration: "none",color: "white",cursor: "default", fontSize: "200%",
                                            justifyContent: "center", justifyItems: "center"}}>
                                                <FontAwesomeIcon icon={faGithub} style={{cursor: "pointer", transition: "all 0.5s ease-out"}}
                                                onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                                                onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>
                                            </a>
                                        </div>
                                        <a href="https://csv-convrt.herokuapp.com/" rel="noopener noreferrer" target="_blank"
                                        style={{textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "100%",
                                        height: "100%", width: "100%"}}>
                                            <div style={style.website_button_links}
                                            onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                            onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>   
                            </div>
                            <div style={smartphoneView ? style.grid_phone_media : style.grid}>
                                <div style={style.box}>
                                    <div style={style.explanation_website} ref={explanation_website_3_image}>
                                        <div style={{transform: "rotateY(180deg)", textDecoration: "underline"}}>{"<Technologies used: />"}</div>
                                        <div style={style.technologies_holder}>
                                            <img src="Reactjslogo.png" alt="React" style={style.technologies_images}></img>
                                            <img src="/testimages/threejslogo.svg" alt="Threejs" style={style.technologies_images}></img>
                                        </div>
                                        <div style={style.website_button_backwards} onClick={()=>{
                                                website_3_image.current.style.transform = "rotateY(0deg)";
                                                explanation_website_3_image.current.style.transform = "rotateY(0deg)";
                                                website_3_image.current.style.zIndex = "2";
                                                explanation_website_3_image.current.style.zIndex = "1";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>                                    
                                    </div>
                                    <div style={style.website_image_container} ref={website_3_image}>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black"}}>
                                                <img src="portfolio_home.gif" alt="xenta game" style={style.grid_images}></img>
                                        </div>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black", opacity: "1"}} 
                                        onMouseEnter={(e)=>e.currentTarget.style.opacity = "0"}
                                        onMouseLeave={(e)=>e.currentTarget.style.opacity = "1"}
                                        >
                                            <img src="portfolio_home.png" alt="portfolio" style={style.grid_images}></img>
                                        </div>                                        <div style={style.website_button} onClick={()=>{
                                            website_3_image.current.style.transform = "rotateY(180deg)";
                                            explanation_website_3_image.current.style.transform = "rotateY(180deg)";
                                            website_3_image.current.style.zIndex = "1";
                                            explanation_website_3_image.current.style.zIndex = "2";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={style.box_explanation}>
                                <div style={style.box_explanation_title}>Portfolio website:</div>
                                    <div style={smartphoneView ? style.box_explanation_description_small : style.box_explanation_description}>
                                        This website is my old portfolio, contains other minor projects.<br/>
                                    </div>
                                    <div style={style.website_links}>
                                        <a href="https://rogerpeke97.github.io/portfolio/" rel="noopener noreferrer" target="_blank"
                                            style={{textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "100%",
                                            height: "100%", width: "100%"}}>
                                                <div style={style.website_button_links}
                                                onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -120px 0px rgba(24,8,100,1)"}
                                                onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            <div className= "page3" style={style.page_3} ref={page_3}>
                <div style={smartphoneView ? style.selling_description_small : style.selling_description}>
                    I will create the website you desire, make it interactive, applying specific 3d models for it in case you want it or 2d animations 
                    that will make your website look modern and scalable with the help of these technologies:
                    <div style={smartphoneView ? style.technologies_holder_small : style.technologies_holder}>
                        <img src="/testimages/Reactjslogo.svg" alt="reactlogo" style={style.technologies_images_normal}></img>
                        <img src="/testimages/nodejslogo.svg" alt="nodejs" style={style.technologies_images_normal}></img>
                        <img src="/testimages/postgresqllogo.svg" alt="postgresql" style={style.technologies_images_normal}></img>
                        <img src="/testimages/spring_boot.svg" alt="spring boot" style={style.technologies_images_normal}></img>
                        <img src="/testimages/threejslogo.svg" alt="threejs" style={style.technologies_images_normal}></img>
                    </div>
                </div>
                <CanvasWhite page_3 = {page_3}/>
            </div>
            <div style={style.footer}>
                <div style={{flex: "1", display: "grid", alignItems: "center", margin: "2%"}}>
                    <h2 style={style.title_letter_small_footer}>IGNACIO.MARTIN.DIAZ</h2>
                    <div style={{display: "flex", marginBottom: "1%"}}>
                    <FontAwesomeIcon icon={faMapMarked} style={{marginRight: "1%"}}/> 
                    <div>Buenos Aires, Argentina</div>
                    </div>
                    <div>&copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.</div>
                </div>
                <div style={{flex: "1", display: "grid", alignItems: "center", paddingLeft: "1%", borderLeft: "2px solid white"}}>
                    <div>
                    <h4>Contact me at: </h4>
                    <h4 style={{fontStyle: "italic", textDecoration:"underline"}}>
                        <FontAwesomeIcon icon={faGoogle} style={{marginRight: "1%"}}/> 
                        rogerpeke97@gmail.com
                        <FontAwesomeIcon icon={faCopy} 
                            style={{cursor: "pointer", fontSize: "100%", marginLeft: "2%", transition: "all 0.5s ease-out"}}
                            onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                            onMouseLeave={(e)=>e.currentTarget.style.color = "white"}
                            onClick={()=>copied_to_clipboard_function()}
                        />
                    </h4>
                    </div>
                </div>
                <div ref={copied_to_clipboard} style={style.clipboard}>Copied to clipboard</div>
            </div>
        </div>
    )
}
export default ThreeJsScene;