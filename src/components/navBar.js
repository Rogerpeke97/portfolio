import React from 'react';
function NaviGation(){
    function BackgroundScene(){
        let contain = document.getElementById('contain');
        contain.style.opacity = '0';
        contain.style.visibility = 'hidden';
    }
    function ShowDivs(){
        let contain = document.getElementById('contain');
        contain.style.opacity = '1';
        contain.style.visibility = 'visible';
    }
    return(
        <div className="navwrapper">
            <h4>Ignacio Martin Diaz</h4>
            <div className="buttonwrapper">
                <button onClick={()=>{BackgroundScene()}}>Hide Elements!</button>
                <button onClick={()=>{ShowDivs()}}>Show Elements!</button>
            </div>
            <h4>What is this?</h4>
        </div>
    )
}

export default NaviGation