import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useRef} from "react";

const styles = {
    nav_bar_container: {
        display: "flex", 
        width: "100%", 
        height: "5rem", 
        background: "black", 
        position: "sticky",
        color: "white", 
        top: "0", 
        zIndex: "3"
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
    a_link_holder: {
        display: "grid",
        textDecoration: "none",
        color: "white",
        cursor: "default",
        flex: "1", 
        justifyContent: "right",
        alignItems: "center"
    },
}

const NavBar = ({title_letter})=>{

    const nav_bar = useRef(0);

    return(
        <div ref={nav_bar} style={styles.nav_bar_container}>
            <div style={{justifyContent: "left", alignContent: "center", display: "flex", flex: "1", marginLeft: "2%"}}>
                <div style={styles.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', true)}</div>
            </div>
            <div style={{flex:"1", display: "flex", alignContent: "center", marginRight: "2%"}}>
                <div style={styles.a_link_holder}>
                        <a href="https://github.com/Rogerpeke97" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{cursor: "pointer", transition: "all 0.5s ease-out", color:"white", fontSize: "200%"}}
                            onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                            onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>
                        </a>
                    </div>
                    <div style={styles.a_link_holder}>
                        <a href="https://www.linkedin.com/in/ignacio-martin-diaz-2a30251b7/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{cursor: "pointer", transition: "all 0.5s ease-out", color:"white", fontSize: "200%"}}
                            onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                            onMouseLeave={(e)=>e.currentTarget.style.color = "white"}/>                    
                        </a>
                </div>
            </div>
        </div>
    )
}


export default NavBar;