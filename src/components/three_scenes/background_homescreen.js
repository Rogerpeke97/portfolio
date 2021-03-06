import * as THREE from "three";
import React, {useEffect, useRef, useState} from 'react';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import TWEEN from '@tweenjs/tween.js'

const style = {
    canvas: {
        position: "relative",
        height: "100vh",
        maxWidth: "100%", 
        minWidth: "100%", 
        top: "0", 
        marginBottom: "0"
    },
    transparent_overlay: {
        display: "grid",
        position: "absolute",
        minWidth: "90%",
        maxWidth: "90%",
        maxHeight: "90%",
        minHeight: "90%",
        left: "5%",
        transition: "all 0.1s ease-out",
        gridTemplateRows: "50% 50%",
        top: "5%",
        zIndex: "2",
        backgroundColor: "transparent",
    },
    transparent_overlay_small: {
        display: "grid",
        position: "absolute",
        minWidth: "100%",
        maxWidth: "100%",
        maxHeight: "90%",
        minHeight: "90%",
        left: "0%",
        transition: "all 0.1s ease-out",
        gridTemplateRows: "20% 20%",
        top: "5%",
        zIndex: "2",
        backgroundColor: "transparent",
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
    title_description: {
        fontSize: "200%",
        margin: "0",
        fontWeight: "lighter", 
        textAlign: "justify"
    },
    title_description_small: {
        fontSize: "115%",
        margin: "0",
        fontWeight: "lighter", 
        textAlign: "justify"
    },
    loading: {
        display: "grid",
        width: "100%",
        height:"100vh",
        position: "fixed",
        backgroundColor: "black",
        top: "0%",
        transition: "all 0.5s ease-out",
        justifyContent: "center",
        alignContent: "center",
        left: "0%",
        zIndex: "3"
    },
    loading_complete: {
        display: "none",
        width: "100%",
        height:"100vh",
        position: "fixed",
        top: "0%",
        left: "0%",
        zIndex: "3"
    },
    loading_bar : {
        width: "300px",
        marginTop: "5%",
        zIndex: "2",
        height: "60px",
        backgroundColor: "black",
        boxShadow: "5px 5px 15px 5px black"
    },
    progress_bar: {
        display: "grid",
        position: "relative",
        transition: "all 0.5s ease-out",
        width: "0%",
        top: "-80%",
        height: "60px",
        background: "rgba(24,8,100,1)"
    },
    percentage: {
        position: "relative",
        fontFamily: 'Teko, sans-serif',
        top: "10%",
        fontSize: "200%",
        zIndex: "5",
        display: "grid",
        textAlign: "center",
        alignContent: "center"
    }
}

const BackgroundHome = ({smartphoneView, setSmartphoneView, title_letter})=>{
    const camera = useRef(0);
    const canvasContainer = useRef(0);    
    const progress_bar = useRef(0);
    const [componentLoaded,
        setComponentLoaded] = useState(false);
    const loading = useRef(0);
    const transparent_overlay = useRef(0);
    const percentage = useRef(0);

    useEffect(() => {
        let scene = new THREE.Scene();
        let manager = new THREE.LoadingManager();
        camera.current = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer({antialias: true});
        let height = canvasContainer.current.clientHeight;
        let width =  window.innerWidth;


        for(let i = -15; i < 15; i+=5){
            const light = new THREE.PointLight( 0xffffff, 0.8, 500 );
            light.position.set( i, 8, -20 );
            light.castShadow = true;
            light.shadow.mapSize.width = 512; 
            light.shadow.mapSize.height = 512;
            scene.add( light);
        }
        
        /*const plane_geometry = new THREE.PlaneGeometry( 40, 10, 32 );

        const plane_material = new THREE.MeshPhongMaterial({opacity: 0.5, color: 'black', transparent: true});

        const plane = new THREE.Mesh(plane_geometry, plane_material);

        plane.rotateX( - Math.PI / 2 );

        plane.position.y = -0.3;

        plane.position.z = 0;


        scene.add(plane);*/


        const geometry = new THREE.PlaneGeometry( 40, 10, 32 );

        let groundMirror = new Reflector( geometry, {
            clipBias: 0.003,
            textureWidth: width,
            textureHeight: height,
            color: 0x000000,
            opacity: 0.1
        } );
        groundMirror.position.y = -0.35;
        groundMirror.position.z = 0;
        groundMirror.rotateX( - Math.PI / 2 );
        scene.add( groundMirror );



        camera
        .current.position
        .set(0, 1, 5);
        camera
        .current.rotation.y = 0;
        camera
        .current.rotation.x = -0.8;
        camera
        .current.rotation.z = 0;

        const mouse = new THREE.Vector2();

        const windowHalf = new THREE.Vector2(window.innerWidth / window.innerHeight);

        document.addEventListener('mousemove', onMouseMove);

        function onMouseMove(event) {
            mouse.x = (event.clientX / 8 - windowHalf.x);
            mouse.y = (event.clientY / 4 - windowHalf.y);
        }
        window.addEventListener('resize', () => {
            if (canvasContainer.current !== null) {
                width = window.innerWidth;
                const renderTarget = groundMirror.getRenderTarget();
                renderTarget.setSize(width, height);
                renderer.setSize(width, height);
                canvasContainer.current.style.width = width;
                camera.current.aspect = width / height;
                // nav_bar.current.style.width = width;
                camera
                    .current
                    .updateProjectionMatrix();
            }
        });

        renderer.setSize(width, height);
        canvasContainer
            .current
            .appendChild(renderer.domElement);

        

        //PARTICLES
        let particleCount = 2600; // There is one more due to the float being slightly above 0 
        let particles = new THREE.BufferGeometry();
        let texture = new THREE
            .TextureLoader(manager)
            .load('flare.png');
        let pMaterial = new THREE.PointsMaterial({
            color: 'white', size: 0.1, map: texture, alphaTest: 0.1, // removes black squares
            blending: THREE.CustomBlending,
            transparent: false
        });

        /*const planeSize = 0.05;

        const shadowTexture = loader.load('roundshadow.png');

        const shadowGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        const shadowMat = new THREE.MeshPhongMaterial({
            map: shadowTexture, opacity: 4, alphaTest: 0.1,
            blending: THREE.CustomBlending, color: 'black',
            transparent: true,
        });*/
        let positions = [];
        //let shadows = [];
        for (let i = 5; i > 1; i-= 0.2) {
            let count = -5;
            for(let j = 0; j < 10; j+=0.2){
                let posX = count;
                let posY = 0;
                let posZ = i;
                positions.push(posX, posY, posZ);

               /* let shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);

                shadowMesh.position.x = count;
                shadowMesh.position.y = -0.2;
                shadowMesh.position.z = i;  
                shadowMesh.rotation.x = Math.PI * -.5;
                shadows.push(shadowMesh);
                scene.add(shadowMesh);REMOVING SHADOWS BUT LEAVING THEM COMMENTED AS THEY CAN BE USEFUL FOR ANOTHER PROJECT*/
                count+=0.2;   
            }
        }
        particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        // create the particle system
        let particleSys = new THREE.Points(particles, pMaterial);
        particleSys.receiveShadow = true;
        particleSys.castShadow = true;
        particleSys.name = 'particleSys';
        let period = 200;
        let time = 0;
        let particle_max_position_wave;
        let star = particleSys.geometry.attributes.position.array;
        const render = () => {
            for(let i = 1; i < particleCount * 3; i+=3){
                particle_max_position_wave = 0.5 * Math.sin(((2 * Math.PI) / 2.5) * star[i+1] - ((2 * Math.PI) / period * time));

                star[i] += (particle_max_position_wave / 100);
                /*if(i < 1020){
                    shadows[i-1].material.opacity -= particle_max_position_wave / 1000;
                }*/
                particleSys.geometry.attributes.position.needsUpdate = true;
                time+=0.001;
            }
            renderer.render(scene, camera.current);
        };

        scene.add(particleSys)
        
        new TWEEN
            .Tween(pMaterial.color)
            .to({
                r: 0.2,
                g: 0,
                b: 1
            }, 5000)
            .yoyo(true)
            .repeat(99999)
            .start();
        function animateTween(time) {
            TWEEN.update(time)
            requestAnimationFrame(animateTween)
        }

        requestAnimationFrame(animateTween);


        let animate = () => {
            requestAnimationFrame(animate);
            render();
        };
        animate();

        percentage.current.innerText = "0 %";
        manager.onProgress = ()=>{
            if(parseInt(percentage.current.innerText.slice(0, -2)) < 100){
                percentage.current.innerText = parseInt(percentage.current.innerText.slice(0, -2)) + 1 + " %";
                progress_bar.current.style.width = (percentage.current.innerText).replace(' ', '');
            }
            else{
                percentage.current.innerText = "100%";
                progress_bar.current.style.width = percentage.current.innerText;
            }
        }

        manager.onLoad = () => {
            percentage.current.innerText = "100%";
            progress_bar.current.style.width = percentage.current.innerText;
            loading.current.style.animation = 'loadingDone 2s normal ease-out';
            setTimeout(()=>{setComponentLoaded(true)}, 2000);
        }
            //media queries
    const phoneViewCheck = (e)=>{
        if(e.matches === true){
            setSmartphoneView(true);
        }
        else{
        setSmartphoneView(false);
        }
    }
    phoneViewCheck(window.matchMedia("(max-width: 1100px)"));
    window.matchMedia("(max-width: 1100px)").addEventListener('change', phoneViewCheck);
        
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
const mouseMove = (e)=>{
    if(componentLoaded === true){
        let mousex = (e.clientX   - ( canvasContainer.current.getBoundingClientRect().left / 2)) ;
        let mousey = (e.clientY  - ( canvasContainer.current.getBoundingClientRect().top / 2)) ;
        let x = mousex - canvasContainer.current.getBoundingClientRect().width / 2 ;
        let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
        transparent_overlay.current.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        camera.current.rotation.y = (x / 100) * (Math.PI / 180);
        camera.current.rotation.x = -(y / 100) * (Math.PI / 180) - 0.8;
    }
}
    return(
        <div
            style={{position: "relative", minHeight: "100vh", maxHeight: "100vh", maxWidth: "100%", minWidth: "100%", top: "0", marginBottom: "0"}}
            ref={canvasContainer}
            onMouseMove={(event) => {
            mouseMove(event);
        }}>
            <div ref={transparent_overlay} style={smartphoneView ? style.transparent_overlay_small : style.transparent_overlay} onMouseMove={(e)=>mouseMove(e)}>
                <div style={smartphoneView ? style.letter_container_small : style.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', false)}</div>
                <h1 style={smartphoneView ? style.title_description_small : style.title_description}>
                    My name is Ignacio Diaz, I mainly focus on the creation of 3d websites
                    and I am currently offering my services as a freelancer to design and 
                    create the website you desire utilizing technologies that will guarantee
                    its scalability and functionality across all platforms. 
                </h1>
            </div>
            <div
                style={
                componentLoaded
                ?
                style.loading_complete
                :
                style.loading
                }
                ref={loading}>
                <div>
                    <div className="LOADINGCONTAINER">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    </div>
                </div>
                <div style={style.loading_bar} >
                    <div style={style.percentage} ref={percentage}></div>
                    <div style={style.progress_bar} ref={progress_bar}></div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundHome;