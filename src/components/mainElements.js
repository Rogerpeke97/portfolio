import React, {useState, useRef, useEffect} from 'react';
import TicTacToe from './tictactoe';
function ContainerGrids() {
    function TicTacDemo() {
        let tictactoe = document.getElementById('TicTacToe');
        tictactoe.style.display = 'grid'
        tictactoe.style.animation = 'popTic 1s normal forwards ease-out'
        // REMEMBER WHEN DIV DISSAPEARS AFTER ANIMATION IT'S BECAUSE YOU NEED TO DISPLAY
        // GRID AFTER THE ANIMATION!!!
        tictactoe.onanimationend = () => {
            tictactoe.style.display = 'grid'
        }
    }

    const [gridShowing, setgridShowing] = useState(0);
    const firstMenu0 = useRef(0);
    const firstMenu1 = useRef(0);
    const firstMenu2 = useRef(0);
    const firstMenu3 = useRef(0);
    const contain = useRef(0);
    const buttonProjects = useRef(0);
    const grid2 = useRef(0);
    const fillBar = useRef(0);
    const projectsText = useRef(0);
    const houseIcon = useRef(0);
    const buttonHideShow = useRef(0);
    const [buttonText,
        setButtonText] = useState("Show background")

    useEffect(()=>{
        if(gridShowing === 2){
            console.log(gridShowing)
            grid2.current.style.animation = 'popGrid2reverse 1s normal forwards ease-out'
            projectsText.current.style.filter = "drop-shadow(0 0 0px whitesmoke)";
            projectsText.current.style.opacity = "0.4";
            fillBar.current.style.animation = "oppositefilling 1.5s ease-out"
            grid2.current.onanimationend = () => {
                grid2.current.style.display = 'none'
                console.log(gridShowing)
                firstMenu0.current.style.display = "grid"
                firstMenu1.current.style.display = "grid"
                firstMenu2.current.style.display = "grid"
                firstMenu3.current.style.display = "grid"
                firstMenu0.current.style.animation = "popUp 2s normal forwards ease-out"
                firstMenu1.current.style.animation = "popUp 2s normal forwards ease-out"
                firstMenu2.current.style.animation = "popUp 2s normal forwards ease-out"
                firstMenu3.current.style.animation = "popUp 2s normal forwards ease-out"
                firstMenu0.current.onanimationend = ()=> {
                    setgridShowing(0);
                    houseIcon.current.style.filter = "drop-shadow(0 0 3px whitesmoke)";
                    houseIcon.current.style.opacity = "1";
                }
            } 
        }
    },[gridShowing])    
    function grid2Transition() {
        if(gridShowing === 0){ 
        firstMenu0.current.style.animation = "nextDiv 2s normal forwards ease-out"
        firstMenu1.current.style.animation = "nextDiv 2s normal forwards ease-out"
        firstMenu2.current.style.animation = "nextDiv 2s normal forwards ease-out"
        firstMenu3.current.style.animation = "nextDiv 2s normal forwards ease-out"
        houseIcon.current.style.filter = "drop-shadow(0 0 0px whitesmoke)";
        houseIcon.current.style.opacity = "0.4"
        fillBar.current.style.animation = "filling 2s ease-out"
        firstMenu0.current.onanimationend = ()=>{
            firstMenu0.current.style.display = "none"
            firstMenu1.current.style.display = "none"
            firstMenu2.current.style.display = "none"
            firstMenu3.current.style.display = "none"
            grid2.current.style.transform = 'scale(0, 0)';
            grid2.current.style.display = 'grid';
            grid2.current.style.animation = 'popGrid2 2s normal forwards ease-out';
        };
        grid2.current.onanimationend = () => {
            setgridShowing(1)
            projectsText.current.style.filter = "drop-shadow(0 0 3px whitesmoke)";
            projectsText.current.style.opacity = "1";
        };
    }
    }
    function grid1Transition() {
        console.log(gridShowing)
        if (gridShowing === 1) {
            setgridShowing(2)
        }
    }
    function ShowDivs() {
        if (contain.current.style.opacity === "0") {
            contain.current.style.opacity = '1';
            contain.current.style.visibility = 'visible';
            setButtonText("Show background")
        } else {
            contain.current.style.opacity = '0';
            contain.current.style.visibility = 'hidden';
            setButtonText("Show homescreen")
        }
    }

    return (
        <div>

            <div className="navwrapper">
                <h4 style={{
                    justifyContent: "center"
                }}>
                    <a href="LatestResume.pdf" download>
                        <i className="fi-swsuxl-download-wide"></i>
                        Resume</a>
                </h4>
                <div
                    className="websitemap"
                    style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "grid",
                    gridTemplateColumns: "5% 20% 10%"
                }}>
                    <i
                        className="fi-xnsuxl-house-solid"
                        onClick={() => {
                        if(gridShowing === 1){
                            grid1Transition()
                        }
                    }}
                        ref={houseIcon}
                        style={{
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.5s ease-out",
                        cursor: "pointer",
                        filter: "drop-shadow(0 0 3px whitesmoke)"
                    }}
                        onMouseEnter={() => {
                        if(gridShowing === 1 || gridShowing === 2){
                        houseIcon.current.style.filter = "drop-shadow(0 0 3px whitesmoke)";
                        houseIcon.current.style.opacity = "1"
                        }
                    }}
                        onMouseLeave={() => {
                        if (gridShowing === 1 || gridShowing === 2) {
                            houseIcon.current.style.filter = "drop-shadow(0 0 0px whitesmoke)";
                            houseIcon.current.style.opacity = "0.4"
                        }
                    }}></i>
                    <div
                        style={{
                        width: "100%",
                        height: "0.5rem",
                        backgroundColor: "black",
                        borderRadius: "9%"
                    }}>
                        <div
                            id="fillingBar"
                            style={{
                            height: "100%",
                            backgroundColor: "white",
                            position: "relative",
                            width: "50%",
                            left: "-100%",
                            borderRadius: "9%",
                            filter: "drop-shadow(0 0 3px whitesmoke)",
                            opacity: "0%",
                            animation: ""
                        }}
                            ref={fillBar}
                            ></div>
                    </div>
                    <h4
                        style={{
                        cursor: "default",
                        opacity: "0.4",
                        transition: "all 0.5s ease-out"
                    }}
                        ref={projectsText}>Projects</h4>
                </div>
                <div className="buttonwrapper">
                    <button
                        onClick={() => {
                        ShowDivs()
                    }}
                        ref={buttonHideShow}>{buttonText}</button>
                </div>
            </div>
        <div className="contain" id="contain" ref={contain}>
            <div
                className="grid1_intro"
                ref={firstMenu0}
                onAnimationEnd={()=>{
                    firstMenu0.current.style.animation = 'none'
                }}
                id="grid1_intro">
                <h4>My name is Ignacio Diaz, i'm from Buenos Aires my main programming language
                    is Javascript followed by Java. I am very passionate about web development thing
                    which has led me to learn a variety of Javascript libraries and the React.js
                    framework. Here are the frameworks, libraries and technologies i learned and
                    used in my projects:
                </h4>
                <div className="links">
                    <div className="img_container">
                        <img src="./Reactjslogo.png" alt="reactlogo"></img>
                    </div>
                    <div className="img_container">
                        <img src="./nodejslogo.png" alt="nodejs"></img>
                    </div>
                    <div className="img_container">
                        <img src="./postgresqllogo.png" alt="postgresql"></img>
                    </div>
                    <div className="img_container">
                        <img src="./javalogo.png" alt="java"></img>
                    </div>
                    <div className="img_container">
                        <img src="./gitlogo.png" alt="git"></img>
                    </div>
                    <div className="img_container">
                        <img src="./herokulogo.png" alt="heroku"></img>
                    </div>
                </div>
                <div className="links">
                    <div className="img_container">
                        <img src="./chartjslogo.png" alt="chartjs"></img>
                    </div>
                    <div className="img_container">
                        <img src="./threejslogo.png" alt="threejs"></img>
                    </div>
                    <div className="img_container">
                        <img src="./html5logo.png" alt="html"></img>
                    </div>
                    <div className="img_container">
                        <img src="./csslogo.svg" alt="css"></img>
                    </div>
                    <div className="img_container">
                        <img src="./googlecloudlogo.png" alt="googlecloud"></img>
                    </div>
                    <div className="img_container">
                        <img src="./multerlogo.png" alt="multer"></img>
                    </div>
                </div>
                <button ref={buttonProjects} onClick={()=>{if(gridShowing === 0){grid2Transition()}}} style={{pointerEvents: 'all'}}>Projects</button>
            </div>
            <div className="grid1_name_img" id="grid1_name_img" ref={firstMenu1} onAnimationEnd={()=>{
                    firstMenu1.current.style.animation = 'none'
                }}>
                <img src="./profile.jpg" alt="Profile pic"></img>
            </div>
            <div className="transparentOverlay" id="overlay" ref={firstMenu2} onAnimationEnd={()=>{
                    firstMenu2.current.style.animation = 'none'
                }}></div>
            <div className="transparentOverlay2" id="overlay2" ref={firstMenu3} onAnimationEnd={()=>{
                    firstMenu3.current.style.animation = 'none'
                }}></div>
            <div className="grid2" id="grid2" ref={grid2}>
                <div
                    className="portfolioTitle"
                    style={{
                    color: "white",
                    alignItems: "center",
                    display: "grid",
                    borderBottom: "2px solid white",
                    padding: "2%",
                    cursor: "default"
                }}>
                    <h2 style={{
                        margin: "2%"
                    }}>Projects</h2>
                    <h4
                        style={{
                        textAlign: "left",
                        margin: "0%"
                    }}>Portfolio website:
                    </h4>
                    <h5
                        style={{
                        textAlign: "left",
                        margin: "0%"
                    }}>This portfolio project was made using:
                        <br/>
                        Three.js for the 3d modeling and the background scene.<br/>
                        Tween.js for the camera animation and color switching of the particles and
                        React.<br/>
                        The code for this portfolio can be found on my Github account linked here:
                    </h5>
                    <a
                        href="https://github.com/Rogerpeke97"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                        justifyContent: "center",
                        display: "grid",
                        textDecoration: "none",
                        color: "white",
                        cursor: "default",
                        margin: "2%"
                    }}>
                        <i
                            class="fi-xnsuxl-github"
                            style={{
                            cursor: "pointer"
                        }}></i>
                    </a>
                </div>
                <div
                    className="portfolioTitle"
                    style={{
                    color: "white",
                    alignItems: "center",
                    display: "grid",
                    borderBottom: "2px solid white",
                    padding: "2%",
                    cursor: "default"
                }}>
                    <h4
                        style={{
                        textAlign: "left",
                        margin: "0%"
                    }}>Project in progress:
                    </h4>
                    <h5
                        style={{
                        textAlign: "left",
                        margin: "0%"
                    }}>This
                        is a project that is currently in development, it's a React website that
                        communicates with the Spring Boot REST API using JSON and in return receives
                        user data from the PostgreSQL database.
                    </h5>
                    <a
                        href="https://github.com/Rogerpeke97/APISpring"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                        justifyContent: "center",
                        display: "grid",
                        textDecoration: "none",
                        color: "white",
                        cursor: "default",
                        margin: "2%"
                    }}>
                        <i
                            class="fi-xnsuxl-github"
                            style={{
                            cursor: "pointer"
                        }}></i>
                    </a>
                </div>
                <div className="grid2_project" id="grid2_project1">
                    <div className="project_img">
                        <img src="project1.gif" alt="project1"></img>
                    </div>
                    <div className="textAndGit">
                        <h4>This is my first project, it converts csv files and displays them in a
                            canvas using chartjs. It has a lot of backend functionalities that allowed me to
                            learn about backend and frontend requests, remote storage using googlecloud api,
                            file storage using multer, downloading files from googlecloud and turning them
                            from buffers into readable data to display on the frontend. Also, deploying the
                            website using the heroku cli, creating a database for the login user data,
                            setting up the remote database, hashing the password when you sign up and
                            storing cookies for the specific user session. You can sign up, create a user
                            and login.
                        </h4>
                        <div className="project_wrapper_links">
                            <button>
                                <a
                                    href="https://csv-convrt.herokuapp.com"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    Visit Site
                                </a>
                            </button>
                            <a
                                href="https://github.com/Rogerpeke97/Csv-converter-server-config"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i class="fi-xnsuxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid2_project" id="grid2_project2">
                    <div className="project_img">
                        <img src="tictactoe.gif" alt="project1"></img>
                    </div>
                    <div className="textAndGit">
                        <h4>This is my second project which i included as a react component in this
                            portfolio website. This project wasn't difficult, however, what made it
                            difficult was not using the min-max algorithm. This project mainly helped me to
                            understand react more and implement classes. Later on i found out about Hooks
                            and made them a staple when it comes to writing components.
                        </h4>
                        <div className="project_wrapper_links">
                            <button>
                                <a
                                    href="#"
                                    id="btn"
                                    onClick={() => {
                                    TicTacDemo()
                                }}>
                                    Play!
                                </a>
                            </button>
                            <a
                                href="https://github.com/Rogerpeke97/tictactoe"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i class="fi-xnsuxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid2_project" id="grid2_project3">
                    <div className="project_img">
                        <img src="portfolio.gif" alt="project1"></img>
                    </div>
                    <div className="textAndGit">
                        <h4>
                            This project is a vector visualizer in which you can add your own input and it
                            will calculate the resultant between the 2 vectors. It's interactive and you can
                            modify the scene using the control panel. The link to the site is down below!
                        </h4>
                        <div className="project_wrapper_links">
                            <button>
                                <a
                                    href="https://rogerpeke97.github.io/EduwebReact/"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    Visit Site
                                </a>
                            </button>
                            <a
                                href="https://github.com/Rogerpeke97/EduwebReact"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i class="fi-xnsuxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <TicTacToe/>
            </div>
            </div>
        </div>
    )
}
export default ContainerGrids;