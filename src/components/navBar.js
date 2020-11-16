import React, { useRef, useState } from 'react';
function NaviGation(){
    function HomeFunction(){
        let grid1_intro = document.getElementById('grid1_intro');
        if(grid1_intro.style.display === 'none'){
        let canvas = document.getElementById('canvas')
        canvas.style.pointerEvents = 'none'
        let grid2 = document.getElementById('grid2');
        grid2.style.animation = 'none'
        grid2.style.animation = null;
        grid2.style.animation = 'popGrid2reverse 1s normal forwards ease-out'
        grid2.onanimationend = () => {
            grid2.style.display = 'none'
        }
        setTimeout(()=>{
            grid1_intro.style.display = 'grid'
            let fillingBarOpposite = document.getElementById('fillingBar');
            let overlay2 = document.getElementById('overlay2');
            overlay2.style.display = 'grid'
            let grid1_name_img = document.getElementById('grid1_name_img');
            grid1_name_img.style.display = 'grid'
            let overlay = document.getElementById('overlay');
            overlay.style.display = 'grid'
            grid1_intro.style.animation = 'nextDiv 2s reverse ease-out'
            overlay2.style.animation = 'nextDiv 2s reverse ease-out'
            grid1_name_img.style.animation = 'nextDiv 2s reverse ease-out'
            overlay.style.animation = 'nextDiv 2s reverse ease-out'
            fillingBarOpposite.style.animation = "";
            fillingBarOpposite.style.animation = "oppositefilling 1.5s ease-out"
            grid1_intro.onanimationend = () => {
                grid1_intro.style.display = 'grid'
            }
            overlay2.onanimationend = () => {
                overlay2.style.display = 'grid'
            }
            grid1_name_img.onanimationend = () => {
                grid1_name_img.style.display = 'grid'
            }
            overlay.onanimationend = () => {
                overlay.style.display = 'grid'
                canvas.style.pointerEvents = 'auto' // to allow mousewheel event get triggered
            }
        }, 1000)
    }
    }

    function ShowDivs(){
        let contain = document.getElementById('contain');
        if(contain.style.opacity === "0"){
        contain.style.opacity = '1';
        contain.style.visibility = 'visible';
        setButtonText("Show background")
        }
        else{
            contain.style.opacity = '0';
            contain.style.visibility = 'hidden';
            setButtonText("Show menu")
        }
    }
    function fillingBar(){
        let grid1_intro = document.getElementById('grid1_intro');
        if(grid1_intro.style.display === 'none'){
            fillBar.current.style.width = "100%"
            projectsText.current.style.opacity = "1"
            projectsText.current.style.filter = "drop-shadow(0 0 3px whitesmoke)"
            fillBar.current.style.left = "50%"
        }
        else{
        //SHOW HOUSE
        houseIcon.current.style.animation = "none"
        houseIcon.current.style.animation = "illuminateHouse 1s ease-out"
        houseIcon.current.style.filter = "drop-shadow(0 0 3px whitesmoke)"
        houseIcon.current.style.opacity = "1"

        }
    }
    function fadeHouse(){
        let grid1_intro = document.getElementById('grid1_intro');
        houseIcon.current.style.animation = "fadeHouse 1s ease-out"
        houseIcon.current.style.filter = "drop-shadow(0 0 0px whitesmoke)"
        houseIcon.current.style.opacity = "0.4"
        if(grid1_intro.style.display !== 'none'){
        projectsText.current.style.opacity = "0.4"
        projectsText.current.style.filter = "drop-shadow(0 0 0px whitesmoke)"
        }

    }
    const fillBar = useRef(0);
    const projectsText = useRef(0);
    const houseIcon = useRef(0);
    const buttonHideShow = useRef(0);
    const[buttonText, setButtonText] = useState("Show background")
    return(
        <div className="navwrapper">
            <h4 style={{justifyContent: "center"}}>
                <a href="MyResume.docx" download> <i className="fi-swsuxl-download-wide"></i> Resume</a>
            </h4>
            <div className="websitemap" style={{
                justifyContent:"center", alignItems: "center", display: "grid", gridTemplateColumns: "5% 20% 10%"
                }}>
            <i className="fi-xnsuxl-house-solid" onClick={()=>{HomeFunction()}} ref={houseIcon} style={{
                display: "grid", alignItems: "center", justifyContent: "center",
                transition: "all 0.5s ease-out", cursor: "pointer", filter: "drop-shadow(0 0 3px whitesmoke)"
            }} onMouseEnter={()=>{
                houseIcon.current.style.filter = "drop-shadow(0 0 3px whitesmoke)"
                houseIcon.current.style.opacity = "1"
                }} onMouseLeave={()=>{
                    let grid1_intro = document.getElementById('grid1_intro');
                    if(grid1_intro.style.display === 'none'){
                        houseIcon.current.style.filter = "drop-shadow(0 0 0px whitesmoke)"
                        houseIcon.current.style.opacity = "0.4"
                    }
                }}>

            </i>
            <div style={{width: "100%", height: "0.5rem", backgroundColor:"black", borderRadius: "9%"}}>
                <div id="fillingBar" style={{
                    height: "100%", backgroundColor: "white", position: "relative", width: "50%", left: "-100%",
                     borderRadius: "9%", filter: "drop-shadow(0 0 3px whitesmoke)", opacity: "0%",
                    animation: ""
                    }} onAnimationEnd={fillingBar} ref={fillBar} onAnimationStart={fadeHouse}></div>
            </div>
            <h4 style={{cursor: "default", opacity: "0.4", transition: "all 0.5s ease-out"}} ref={projectsText}>Projects</h4>
            </div>
            <div className="buttonwrapper">
                <button onClick={()=>{ShowDivs()}} ref={buttonHideShow}>{buttonText}</button>
            </div>
        </div>
    )
}

export default NaviGation