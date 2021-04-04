import React from 'react';
import * as THREE from "three";
import {useEffect, useRef, useState} from "react";
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import TWEEN from '@tweenjs/tween.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faWindowClose, faQuestionCircle, faMapMarked, faCopy } from '@fortawesome/free-solid-svg-icons'

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
    },
    box: {
        margin: "2%",
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
    box_explanation_title: {
        fontWeight: "bold",
        fontSize: "300%",
        textShadow: "2px 2px 2px black",
        textDecoration: "underline"
    },
    box_explanation_description: {
        fontWeight: "normal",
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
        textAlign: "center",
        display: "grid",
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
    canvas_2d: {
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "black",
//        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
//        backgroundSize: "400% 400%",
        animation: "transition 45s infinite"
    },
    canvas_2d_page_3: {
        position: "absolute",
        height: "1080px",
        width: "100%",
        background: "black",
//        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
//        backgroundSize: "400% 400%",
        animation: "transition 45s infinite"
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
        textAlign: "center",
        zIndex: "1",
        position: "relative",
        left: "15%",
        width: "70%",
        paddingTop: "5%",
        fontSize: "150%"
    },
    page_3:{
        height: "1080px",
        width: "100%", 
        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
        backgroundSize: "400% 400%", 
        animation: "transition 45s infinite",
        display: "grid",
        gridTemplateRows: "25% 25% 25% 25%"
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
    title_letter:{
        transition: 'all 0.5s ease-out',
        cursor: 'default',
        fontSize: '1000%',
        fontFamily: 'Teko, sans-serif'
    },
    title_letter_small:{
        transition: 'all 0.5s ease-out',
        cursor: 'default',
        color: 'white',
        fontFamily: 'Teko, sans-serif'
    },
    letter_container: {
        display: "flex", 
        justifyContent: "center"
    },
    a_link_holder: {
        display: "grid",
        textDecoration: "none",
        color: "white",
        cursor: "default",
        flex: "1", 
        justifyContent: "center",
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
        width: "30%",
        height: "15%",
        marginLeft: "-15%",
        marginTop: "-1%",
        transition: "0.5s ease-out",
        opacity: "0",
        background: "black",
        borderRadius: "5px"
    }
}



function ThreeJsScene() {
    const [componentLoaded,
        setComponentLoaded] = useState(false);
    let loadingScreenMessages = useRef(0);
    let loading = useRef(0);
    const [message, setMessage] = useState("Show background");
    let moving_div_1 = useRef(0);
    let moving_div_2 = useRef(0);
    let transparent_overlay = useRef(0);
    let canvasContainer = useRef(0);
    let portfolio_grid = useRef(0);
    let underline_login = useRef(0);
    let login_font = useRef(0);
    let canvas_2d = useRef(0);
    let website_1_image = useRef(0);
    let explanation_website_1_image = useRef(0);
    let website_2_image = useRef(0);
    let explanation_website_2_image = useRef(0);
    let website_3_image = useRef(0);
    let explanation_website_3_image = useRef(0);
    let page_3 = useRef(0);
    let nav_bar = useRef(0);
    let canvas_2d_page_3 = useRef(0);
    let camera = useRef(0); 
    let copied_to_clipboard = useRef(0);
    useEffect(() => {
        if (componentLoaded === false) {
            let scene = new THREE.Scene();
            let manager = new THREE.LoadingManager();
            camera.current = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
            let renderer = new THREE.WebGLRenderer();
            let height = canvasContainer.current.clientHeight;
            let width =  window.innerWidth;
            const loader = new THREE.TextureLoader();


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
                    height = document.documentElement.clientHeight;
                    const renderTarget = groundMirror.getRenderTarget();
                    renderTarget.setSize(width, height);
                    renderer.setSize(width, height);
                    canvasContainer.current.style.width = width;
                    camera.current.aspect = width / height;
                    camera
                        .current
                        .updateProjectionMatrix();
                    scroll_value = window.scrollY;
                    //CANVAS_2d
                    canvas_2d.current.width = window.innerWidth;
                    canvas_2d.current.height = portfolio_grid.current.clientHeight;

                    canvas_2d_page_3.current.width = window.innerWidth;
                    canvas_2d_page_3.current.height = page_3.current.clientHeight;
                    
                    let particle_width = canvas_2d.current.width / 25;
                    let particle_position = -particle_width;

                    let particle_width_page_3 = canvas_2d_page_3.current.width / 25;
                    let particle_position_page_3 = -particle_width_page_3;

                    array_particles.forEach((part)=>{
                        part.x = particle_position;
                        part.positive_amount_to_move = particle_position + particle_width;
                        part.negative_amount_to_move = particle_position - particle_width;
                        particle_position = particle_position + particle_width;
                    });
                    array_particles_page_3.forEach((part)=>{
                        part.x = particle_position_page_3;
                        part.positive_amount_to_move = particle_position_page_3 + particle_width_page_3;
                        part.negative_amount_to_move = particle_position_page_3 - particle_width_page_3;
                        particle_position_page_3 = particle_position_page_3 + particle_width_page_3;
                    });
                }
            });

            renderer.setSize(width, height);
            canvasContainer
                .current
                .appendChild(renderer.domElement);

            

            //PARTICLES
            let particleCount = 2600; // Hay una mas porque el float da apenas por encima de 0 
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
            renderer.setAnimationLoop(() => {
                for(let i = 1; i < particleCount * 3; i+=3){
                    particle_max_position_wave = 0.5 * Math.sin(((2 * Math.PI) / 2.5) * star[i+1] - ((2 * Math.PI) / period * time));

                    star[i] += (particle_max_position_wave / 100);
                    /*if(i < 1020){
                        shadows[i-1].material.opacity -= particle_max_position_wave / 1000;
                    }*/
                    particleSys.geometry.attributes.position.needsUpdate = true;
                    time+=0.001;
                }
                renderer.render(scene, camera.current)
            })

            scene.add(particleSys)
            
            let tween = new TWEEN
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
                renderer.render(scene, camera.current);
            };
            animate();



            //canvas_2d

            class particle_generator{
                constructor(x_pos, y_pos, positive_amount, negative_amount, radius_circle){
                    this.x = x_pos;
                    this.y = y_pos;
                    this.positive_amount_to_move = positive_amount;
                    this.negative_amount_to_move = negative_amount;
                    this.r = radius_circle;
                    this.arc = function(position_x, position_y, radius, start, end, canvas_ctx, div_number){
                        canvas_ctx.beginPath();
                        let grd = canvas_ctx.createLinearGradient(position_x - this.r, position_y + this.r, position_x + this.r / 2, position_y - this.r);
                        if(div_number === 0){
                            grd.addColorStop(0.30, "rgba(69,40,189,1)");
                            grd.addColorStop(0.70, "rgba(43,22,55,1)");
                        }
                        else{
                            grd.addColorStop(0.30, "rgba(255,255,255,1)");
                            grd.addColorStop(0.70, "rgba(32,31,31,1)");                            
                        }
                        canvas_ctx.fillStyle = grd;
                        canvas_ctx.arc(position_x, position_y, radius, start, end);
                        canvas_ctx.closePath();
                        canvas_ctx.fill();
                    }
                }
            }

            const canvas_2d_ctx = canvas_2d.current.getContext("2d");
            canvas_2d.current.width = window.innerWidth;
            canvas_2d.current.height = portfolio_grid.current.clientHeight;
            let array_particles = [];
            let particle_width = canvas_2d.current.width / 25;
            let particle_position = -particle_width;

            for(let i = 0; i < 27; i++){
                //let particle_height = window.innerHeight / 10;
                let particle = new particle_generator(particle_position, Math.floor(Math.random() * portfolio_grid.current.clientHeight),
                particle_position + particle_width, particle_position - particle_width, 8);
                particle_position = particle_position + particle_width;
                array_particles.push(particle);
            }


            console.log(portfolio_grid.current);

            const move_particles = (canvas_to_mod, canvas_to_mod_ctx, div_ctx, array_with_particles, div_number)=>{
                canvas_to_mod_ctx.fillStyle = "black";
                canvas_to_mod_ctx.fillRect(0, 0, canvas_to_mod.width, canvas_to_mod.height);
                array_with_particles.forEach((part)=>{
                    if(part.y < 0){
                        part.y = div_ctx.clientHeight;
                    }
                    part.y = part.y - 0.5;
                    part.arc(part.x, part.y, part.r, 0, 2 * Math.PI, canvas_to_mod_ctx, div_number);
                })
                //particle.x = particle.x - 0.001;
                //particle.arc(window.innerWidth / particle.x, window.innerHeight / particle.y, particle.r, 0, 2 * Math.PI);
            }

            const update_x_position = (array_with_particles)=>{
                array_with_particles.forEach((part)=>{
                    if(part.x + amount_to_move < part.positive_amount_to_move && part.x + amount_to_move > part.negative_amount_to_move){
                        part.x = part.x + amount_to_move;                    
                    }
                });
            }

            let mouse_movement_amount = 0;
            let mousex;
            let x;
            let amount_to_move;
            document.addEventListener('mousemove', (e)=>{
                mousex = (e.clientX   - ( canvas_2d.current.getBoundingClientRect().left / 2)) ;
                let mousey = (e.clientY  - ( canvas_2d.current.getBoundingClientRect().top / 2)) ;
                x = mousex - canvas_2d.current.getBoundingClientRect().width / 2 ;
                amount_to_move = (x - mouse_movement_amount) / 100;
                mouse_movement_amount = x;
                //let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
            })


            //SECOND CANVAS PARTICLES   
            const canvas_2d_page_3_ctx = canvas_2d_page_3.current.getContext("2d");
            canvas_2d_page_3.current.width = window.innerWidth;
            canvas_2d_page_3.current.height = page_3.current.clientHeight;
            let array_particles_page_3 = [];
            let particle_width_page_3 = canvas_2d_page_3.current.width / 25;
            let particle_position_page_3 = -particle_width_page_3;

            for(let i = 0; i < 27; i++){
                //let particle_height = window.innerHeight / 10;
                let particle = new particle_generator(particle_position_page_3, Math.floor(Math.random() * page_3.current.clientHeight),
                particle_position_page_3 + particle_width_page_3, particle_position_page_3 - particle_width_page_3, 8);
                particle_position_page_3 = particle_position_page_3 + particle_width_page_3;
                array_particles_page_3.push(particle);
            }
            

            setInterval(()=>{
                move_particles(canvas_2d.current, canvas_2d_ctx, portfolio_grid.current, array_particles, 0);
                update_x_position(array_particles);
                move_particles(canvas_2d_page_3.current, canvas_2d_page_3_ctx, page_3.current, array_particles_page_3, 1);
                update_x_position(array_particles_page_3);
            },5);


            //CHECK IF MODELS ARE LOADED
            manager.onProgress = () => {
                let array = [
                    "Loading Existential Buffer",
                    "Setting Universal Physical Constants",
                    "Modeling Object Components",
                    "Gathering Particle Sources",
                    "I'm testing your patience",
                    "Reconfoobling energymotron...",
                    "I'm sorry for being so slow",
                    "Too fair to worship, too divine to love",
                    "An idea is always a generalization, and generalization is a property of thinking" +
                            ". To generalize means to think",
                ]
                loadingScreenMessages.current.innerText = array[Math.floor(Math.random() * array.length)];
            }

            //MOVE DIVS LEFT TO RIGHT
            let current_scroll_value;
            let scroll_value;
            const move_divs = (div_to_be_moved, amount)=>{
                if(scroll_value < portfolio_grid.current.clientHeight && scroll_value > window.innerHeight / 3){
                        let page_size = portfolio_grid.current.clientHeight;
                        let value_scrolled;
                        let percentage_to_move_div;
                        let parse_div_position;
                        let div_position = div_to_be_moved.current.style.left;
                        if(current_scroll_value > scroll_value && parseInt(div_position.slice(0, -1)) < 0){
                            value_scrolled = current_scroll_value - scroll_value;
                            percentage_to_move_div = (value_scrolled * 100) / page_size;
                            parse_div_position = parseInt(div_position.slice(0, -1)) + percentage_to_move_div;
                            if(parse_div_position > 0){
                                parse_div_position = 0;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(1) + '%';
                        }
                    else if(current_scroll_value < scroll_value && parseInt(div_position.slice(0, -1)) > amount){
                            value_scrolled = scroll_value - current_scroll_value;
                            percentage_to_move_div = (value_scrolled * 100) / page_size;
                            parse_div_position = (parseInt(div_position.slice(0, -1)) - percentage_to_move_div) * 1.03;
                            if(parse_div_position < amount){
                                parse_div_position = amount;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(1) + '%';
                    }
                }
            }

            //MOVE DIVS RIGHT TO LEFT
            const move_divs_backwards = (div_to_be_moved, amount)=>{
                    if(scroll_value < window.innerHeight + page_3.current.clientHeight + portfolio_grid.current.clientHeight && scroll_value > window.innerHeight){
                        let page_size = page_3.current.clientHeight;
                        let value_scrolled;
                        let percentage_to_move_div;
                        let parse_div_position;
                        let div_position = div_to_be_moved.current.style.left;
                        if(current_scroll_value > scroll_value && parseInt(div_position.slice(0, -1)) > 0){
                            value_scrolled = current_scroll_value - scroll_value;
                            percentage_to_move_div = (value_scrolled * 100) / page_size;
                            //value_scrolled = (value_scrolled /100) * window_total_to_get_div_to_100; // AMOUNT OF TIMES YOU NEED TO SCROLL TO GET TO THE BOTTOM OF THE PAGE
                            parse_div_position = parseInt(div_position.slice(0, -1)) - percentage_to_move_div;
                            if(parse_div_position < 0){
                                parse_div_position = 0;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';
                        }
                        else if(current_scroll_value < scroll_value && parseInt(div_position.slice(0, -1)) < amount){
                            value_scrolled = scroll_value - current_scroll_value;
                            percentage_to_move_div = (value_scrolled * 100) / page_size;
                            //value_scrolled = (value_scrolled /100) * window_total_to_get_div_to_100; // AMOUNT OF TIMES YOU NEED TO SCROLL TO GET TO THE BOTTOM OF THE PAGE
                            parse_div_position = parseInt(div_position.slice(0, -1)) + percentage_to_move_div;
                            if(parse_div_position > amount){
                                parse_div_position = amount;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';    
                        }
                }
            }

            manager.onLoad = () => {
                loading.current.style.animation = 'loadingDone 2s normal ease-out';
                setTimeout(()=>{setComponentLoaded(true)}, 2000);
                scroll_value = window.scrollY;
                //SCROLL EVENT TO MOVE DIV COLOR AGREGAR WINDOW ON RESIZE Y CREAR OBJETO
                window.addEventListener('scroll', function scrolling(){
                    current_scroll_value = window.scrollY;
                    requestAnimationFrame(()=>{
                        move_divs(moving_div_1, -100);
                        move_divs_backwards(moving_div_2, 100);
                        scroll_value = current_scroll_value;                 
                    });
                });
            }
            
        }
    })



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






    let mouseMove = (e)=>{
        let mousex = (e.clientX   - ( canvasContainer.current.getBoundingClientRect().left / 2)) ;
        let mousey = (e.clientY  - ( canvasContainer.current.getBoundingClientRect().top / 2)) ;
        let x = mousex - canvasContainer.current.getBoundingClientRect().width / 2 ;
        let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
        transparent_overlay.current.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        camera.current.rotation.y = (x / 100) * (Math.PI / 180);
        camera.current.rotation.x = -(y / 100) * (Math.PI / 180) - 0.8;
    }


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
        copied_to_clipboard.current.style.opacity = "1";
        setTimeout(()=>copied_to_clipboard.current.style.opacity = "0", 500)
    }


    return (
        <div style={{maxWidth: "100%", height: "100%", position: "relative"}}>
            <div ref={nav_bar} style={{display: "flex", maxWidth: "100%", minWidth: "100%", height: "5rem", background: "black", position: "fixed",
            color: "white", top: "0", zIndex: "3"
            }}>
                <div style={{justifyContent: "center", alignContent: "center", display: "flex", flex: "1"}}>
                    <div style={style.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', true)}</div>
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
                <div style={{justifyContent: "center", alignContent: "center", display: "flex", flex: "1", alignItems: "center"}}>
                    <i className="fi-xnsuxl-house-solid" style={{fontSize: "100%"}} />
                    <div style={{width: "100%", height: "10px", background: "white"}}>
                    </div>
                    <div style={{display: "grid", borderRadius: "50%", background: "gray", width: "5%"}}>1</div>
                </div>
                <div style={{justifyContent: "center", alignContent: "center", display: "grid", flex: "1"}}>
                    <div>{message}</div> 
                </div>
            </div>
            <div
                style={{position: "relative", height: "100vh", maxWidth: "100%", minWidth: "100%", top: "0", marginTop: "5rem", marginBottom: "0"}}
                ref={canvasContainer}
                onMouseMove={(event) => {
                mouseMove(event);
            }}>
                <div ref={transparent_overlay} style={style.transparent_overlay} onMouseMove={(e)=>mouseMove(e)}>
                    <div style={style.letter_container}>{title_letter('IGNACIO.MARTIN.DIAZ', false)}</div>
                    <h1 style={{fontSize: "200%", margin: "0", fontWeight: "lighter", textAlign: "justify"}}>
                        My name is Ignacio Diaz, i mainly focus on the creation of 3d websites
                        and i am currently offering my services as a freelancer to design and 
                        create the website you desire utilizing technologies that will guarantee
                        its scalability and functionality across all platforms. 
                    </h1>
                </div>
            </div>

            <div className= "THEFREAKINGPAGE" style={{display: "grid", maxWidth: "100%", minHeight: "1620px", maxHeight: "1620px", position: "relative",
             zIndex: "2"
             }}>
                <canvas ref={canvas_2d} style={style.canvas_2d}>

                </canvas>
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
                                <div style={{border: "3px solid rgba(24,8,100,1)", borderRadius: "6px"}} ref={login_font}>My work:</div>
                                <div style={{height: "2px", width: "100%", background:"white",
                                transform: "scaleX(0)", transition: "all 0.3s ease-out"}} ref={underline_login}></div>
                            </div>  
                        </div> 
                        <div style={style.websites}>
                            <div style={style.grid}>
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
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
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
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={style.box_explanation}>
                                    <div style={style.box_explanation_title}>Xenta's website:</div>
                                    <div style={style.box_explanation_description}>
                                        This website is basically an "infinite" game where you are given the sensation that you are actually moving forward
                                        but in reality the character is just orbiting around the surface of the sphere. <br/>
                                        You have a score, which is saved if your performance was better than your previous best score and
                                        a set amount of lives that decrease as you hit the trees.<br/>
                                        My wish was to fill the entire sphere full of trees and grass but performance was being heavily affected. This will
                                        be improved in the future <br/>
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
                                            onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                            onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>                          
                            </div>
                            <div style={style.grid}>
                                <div style={style.box}>
                                    <div style={style.explanation_website} ref={explanation_website_2_image}>
                                        <div style={style.website_button_backwards} onClick={()=>{
                                                website_2_image.current.style.transform = "rotateY(0deg)";
                                                explanation_website_2_image.current.style.transform = "rotateY(0deg)";
                                                website_2_image.current.style.zIndex = "2";
                                                explanation_website_2_image.current.style.zIndex = "1";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>                                    
                                    </div>
                                    <div style={style.website_image_container} ref={website_2_image}>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black"}}>
                                                <img src="project1.gif" alt="xenta game" style={style.grid_images}></img>
                                        </div>
                                        <div style={{height: "100%", width: "100%", position: "absolute", transition: "all 0.5s ease-out",
                                        display: "grid", justifyItems: "center", background: "black", opacity: "1"}} 
                                        onMouseEnter={(e)=>e.currentTarget.style.opacity = "0"}
                                        onMouseLeave={(e)=>e.currentTarget.style.opacity = "1"}
                                        >
                                            <img src="project1_front.png" alt="xenta game" style={style.grid_images}></img>
                                        </div>
                                        <div style={style.website_button} onClick={()=>{
                                            website_2_image.current.style.transform = "rotateY(180deg)";
                                            explanation_website_2_image.current.style.transform = "rotateY(180deg)";
                                            website_2_image.current.style.zIndex = "1";
                                            explanation_website_2_image.current.style.zIndex = "2";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={style.box_explanation}>
                                    <div style={style.box_explanation_title}>Csv-converter:</div>
                                    <div style={style.box_explanation_description}>
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
                                            onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                            onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>   
                            </div>
                            <div style={style.grid}>
                                <div style={style.box}>
                                    <div style={style.explanation_website} ref={explanation_website_3_image}>
                                        <div style={style.website_button_backwards} onClick={()=>{
                                                website_3_image.current.style.transform = "rotateY(0deg)";
                                                explanation_website_3_image.current.style.transform = "rotateY(0deg)";
                                                website_3_image.current.style.zIndex = "2";
                                                explanation_website_3_image.current.style.zIndex = "1";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Click this button to flip-back!</div>                                    
                                    </div>
                                    <div style={style.website_image_container} ref={website_3_image}>
                                        <img src="xenta_front_page.jpg" alt="xenta game" style={style.grid_images}></img>
                                        <div style={style.website_button} onClick={()=>{
                                            website_3_image.current.style.transform = "rotateY(180deg)";
                                            explanation_website_3_image.current.style.transform = "rotateY(180deg)";
                                            website_3_image.current.style.zIndex = "1";
                                            explanation_website_3_image.current.style.zIndex = "2";
                                        }} onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                        onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>See details</div>
                                    </div>
                                </div>
                                <div style={style.box_explanation}>
                                <div style={style.box_explanation_title}>Portfolio website:</div>
                                    <div>
                                        This website is my old portfolio, contains other minor projects.<br/>
                                    </div>
                                    <div style={style.website_links}>
                                        <a href="https://rogerpeke97.github.io/portfolio/" rel="noopener noreferrer" target="_blank"
                                            style={{textDecoration: "none",color: "white",cursor: "default",flex: "1", fontSize: "100%",
                                            height: "100%", width: "100%"}}>
                                                <div style={style.website_button_links}
                                                onMouseEnter={(e)=>e.currentTarget.style.boxShadow = "inset 0px -80px 0px rgba(24,8,100,1)"}
                                                onMouseLeave={(e)=>e.currentTarget.style.boxShadow = ""}>Visit site</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <div ref={moving_div_1} style={style.moving_div_1}></div>
                </div>
            </div>
            <div className= "page3" style={style.page_3} ref={page_3}>
                <div style={style.selling_description}>
                    I will create the website you desire, make it interactive, applying specific 3d models for it in case you want it or 2d animations 
                    that will make your website look modern, aesthetic and most importantly scalable with the help of these technologies:
                    <div style={style.technologies_holder}>
                        <img src="/testimages/Reactjslogo.svg" alt="reactlogo" style={style.technologies_images_normal} onMouseEnter={(e)=>console.log(e.currentTarget)}></img>
                        <img src="/testimages/nodejslogo.svg" alt="nodejs" style={style.technologies_images_normal}></img>
                        <img src="/testimages/postgresqllogo.svg" alt="postgresql" style={style.technologies_images_normal}></img>
                        <img src="/testimages/spring_boot.svg" alt="spring boot" style={style.technologies_images_normal}></img>
                        <img src="/testimages/threejslogo.svg" alt="threejs" style={style.technologies_images_normal}></img>
                    </div>
                </div>
                <canvas ref={canvas_2d_page_3} style={style.canvas_2d_page_3}>
                </canvas>
                <div ref={moving_div_2} style={style.moving_div_2}></div>
            </div>
            <div style={style.footer}>
                <div style={{flex: "1", display: "grid", alignItems: "center", margin: "2%"}}>
                    <div>Ignacio Martin Diaz</div>     
                    <div style={{display: "flex"}}>
                    <FontAwesomeIcon icon={faMapMarked} style={{marginRight: "1%"}}/> 
                    <div>Buenos Aires, Argentina</div>
                    </div>
                    <div>&copy; Copyright 2021, Ignacio Martin Diaz. All rights reserved.</div>
                </div>
                <div style={{flex: "1", display: "grid", alignItems: "center", paddingLeft: "1%", borderLeft: "2px solid white"}}>
                    <div>
                    <h4>Contact me at: </h4>
                    <h4 style={{fontStyle: "italic", textDecoration:"underline"}}>
                        rogerpeke97@gmail.com
                        <FontAwesomeIcon icon={faCopy} 
                            style={{cursor: "pointer", fontSize: "100%", transition: "all 0.5s ease-out"}}
                            onMouseEnter={(e)=>e.currentTarget.style.color = "rgba(44,12,175,1)"}
                            onMouseLeave={(e)=>e.currentTarget.style.color = "white"}
                            onClick={()=>copied_to_clipboard_function()}
                        />
                    </h4>
                    </div>
                    <div style={{display: "flex"}}>
                    <a href="https://www.linkedin.com/in/ignacio-martin-diaz-2a30251b7/" rel="noopener noreferrer" target="_blank"
                        style={{justifyContent: "center", display: "grid", textDecoration: "none", alignContent: "center", cursor: "default", color: "white", marginRight: "1%"}}>
                        <FontAwesomeIcon icon={faLinkedin} style={{cursor: "pointer", fontSize: "100%", transition: "all 0.5s ease-out"}} />
                    </a>
                    <div>LinkedIn</div> 
                    </div>
                </div>
                <div ref={copied_to_clipboard} style={style.clipboard}>Copied to clipboard</div>
            </div>
            <div
                className="loadingScreen"
                style={componentLoaded
                ? {
                    display: "none"
                }
                : {
                    display: "grid"
                }}>
                <div className="LOADING" ref={loading}>
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
                    <div className="messages" ref={loadingScreenMessages}></div>
                </div>
            </div>
        </div>
    )
}
export default ThreeJsScene;