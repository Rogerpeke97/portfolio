import React from 'react';
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
    function ButtonClick() {
        let canvas = document.getElementById('canvas')
        canvas.style.pointerEvents = 'none'
        let grid1_intro = document.getElementById('grid1_intro');
        let overlay2 = document.getElementById('overlay2');
        let grid1_name_img = document.getElementById('grid1_name_img');
        let overlay = document.getElementById('overlay');
        let scrolldown = document.getElementById('scrolldown');
        let fillingBar = document.getElementById('fillingBar')
        scrolldown.style.animation = 'popUpScroll 1s reverse ease-out'
        grid1_intro.style.animation = 'nextDiv 2s normal forwards ease-out'
        overlay2.style.animation = 'nextDiv 2s normal forwards ease-out'
        grid1_name_img.style.animation = 'nextDiv 2s normal forwards ease-out'
        overlay.style.animation = 'nextDiv 2s normal forwards ease-out'
        scrolldown.onanimationend = () => {
            scrolldown.style.display = 'none'
        }
        grid1_intro.onanimationend = () => {
            grid1_intro.style.display = 'none'
        }
        overlay2.onanimationend = () => {
            overlay2.style.display = 'none'
        }
        grid1_name_img.onanimationend = () => {
            grid1_name_img.style.display = 'none'
        }
        overlay.onanimationend = () => {
            overlay.style.display = 'none'
            fillingBar.style.animation = "filling 2s ease-out"
        }
        let grid2 = document.getElementById('grid2');
        setTimeout(() => {
            grid2.style.transform = 'scale(0, 0)'
            grid2.style.display = 'grid'
            grid2.style.animation = 'popGrid2 2s normal forwards ease-out'
            grid2.onanimationend = () => {
                grid2.style.display = 'grid'
                canvas.style.pointerEvents = 'auto'
            }
        }, 1800)
    }
    function popUp() {
   
        let grid1_intro = document.getElementById('grid1_intro');
        let overlay2 = document.getElementById('overlay2');
        let grid1_name_img = document.getElementById('grid1_name_img');
        let overlay = document.getElementById('overlay');
        let scrolldown = document.getElementById('scrolldown');
        grid1_intro.style.animation = 'none'
        overlay2.style.animation = 'none'
        grid1_name_img.style.animation = 'none'
        overlay.style.animation = 'none'
        scrolldown.style.animation = 'heartlikeAnim 2.5s forwards infinite ease-out'
    }





    return (
        <div className="contain" id="contain">
       
            <div
                className="grid1_intro"
                onAnimationEnd={() => {
                popUp()
            }}
                id="grid1_intro">
                <h4>My name is Ignacio Diaz, i'm from Buenos Aires my main
                    programming language is Javascript followed by Java. I am very passionate about
                    web development thing which has led me to learn a variety of Javascript
                    libraries and the React.js framework. Here are the frameworks, libraries and
                    technologies i learned and used in my projects:
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
                <button onClick={() => {
                    ButtonClick()
                }}>Projects</button>
            </div>
            <div className="grid1_name_img" id="grid1_name_img">
                <img src="./profile.jpg" alt="Profile pic"></img>
            </div>
            <div className="scrolldown" id="scrolldown">
                <h3>Scroll Down!</h3>
            </div>
            <div className="transparentOverlay" id="overlay"></div>
            <div className="transparentOverlay2" id="overlay2"></div>
            <div className="grid2" id="grid2">
                <div className="portfolioTitle" style={{color: "white", alignItems: "center", display: "grid", borderBottom: "2px solid white", padding: "2%"}}>
                    <h2 style={{margin: "2%"}}>Projects</h2>
                    <h4 style={{textAlign: "left", margin: "0%"}}>Portfolio website: </h4>
                    <h5 style={{textAlign: "left", margin: "0%"}}>This portfolio project was made using: <br/>
                            Three.js for the 3d modeling and the background scene.<br/>
                            Tween.js for the camera animation and color switching of the particles and React.<br/>
                            The code for this portfolio can be found on my Github account, linked here, along with my LinkedIn: 
                            </h5>
                            <a
                                href="https://github.com/Rogerpeke97"
                                rel="noopener noreferrer"
                                target="_blank" style={{justifyContent:"center", display: "grid", textDecoration: "none", color: "white", cursor: "default", margin: "2%"}}>
                                <i class="fi-xnsuxl-github" style={{cursor:"pointer"}}></i>
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
                            storing cookies for the specific user session. My css skills as can be seen by
                            this portfolio improved a lot since but it was a good and a fun project to
                            build.
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
                            difficult was not using the min-max algorithm. This
                            project mainly helped me to understand react more and implement classes. Later
                            on i found out about Hooks and made them a staple when it comes to writing components.
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
                            This project is a vector visualizer in which you can add your own input and it will calculate the resultant between the 2 vectors. It's interactive and you can
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
    )
}
export default ContainerGrids;