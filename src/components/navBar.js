import React from 'react';
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
            <h4><a href="/public/MyResume.docx" download>Resume</a></h4>
            <div className="buttonwrapper">
                <button onClick={()=>{BackgroundScene()}}>Space!</button>
                <button onClick={()=>{ShowDivs()}}>Menu!</button>
            </div>
            <i class="fi-xnsuxl-house-solid" onClick={()=>{HomeFunction()}}></i>
        </div>
    )
}

export default NaviGation