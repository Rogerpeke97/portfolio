import React from 'react';
import * as THREE from "three";
import {useEffect, useRef, useState} from "react";
import TWEEN from '@tweenjs/tween.js'
function ThreeJsScene() {

    const [componentLoaded,
        setComponentLoaded] = useState(false);
    let loadingScreenMessages = useRef(0);
    let loading = useRef(0);

    useEffect(() => {
        if (componentLoaded === false) {
            let canvasContainer = document.getElementById('canvas')
            let scene = new THREE.Scene();
            let manager = new THREE.LoadingManager(); // WHEN MODELS ARE LOADED .onLoad will be called
            let camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
            let renderer = new THREE.WebGLRenderer();
            camera
                .position
                .set(-2, 0, 10);
            const color = 'white';
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light
                .position
                .set(5, 0, 3);
            scene.add(light);

            const mouse = new THREE.Vector2();

            const windowHalf = new THREE.Vector2(window.innerWidth / window.innerHeight);

            const target = new THREE.Vector2();

            document.addEventListener('mousemove', onMouseMove);

            function onMouseMove(event) {
                mouse.x = (event.clientX / 8 - windowHalf.x);
                mouse.y = (event.clientY / 4 - windowHalf.y);
            }
            window.addEventListener('resize', onWindowResize, false);

            function onWindowResize() {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

            }

            //SETTING SPHERE BACKGROUND

            scene.background = new THREE
                .CubeTextureLoader()
                .setPath('textures/')
                .load([
                    'px.jpg',
                    'nx.jpg',
                    'py.jpg',
                    'ny.jpg',
                    'pz.jpg',
                    'nz.jpg'
                ]);

            renderer.setSize(window.innerWidth, window.innerHeight);
            document
                .getElementById('canvas')
                .appendChild(renderer.domElement);

            let sunBump = new THREE
                .TextureLoader(manager)
                .load('sunbump.png');

            let sunTexture = new THREE
                .TextureLoader(manager)
                .load('sun.jpg');
            let geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshPhongMaterial({map: sunTexture, alphaTest: 0.1, bumpMap: sunBump, bumpScale: 0.005});
            let cube = new THREE.Mesh(geometry, material);

            //PARTICLES
            let particleCount = 2000
            let particleDistance = 53;
            let particles = new THREE.Geometry();
            let texture = new THREE
                .TextureLoader()
                .load('flare.png');
            let pMaterial = new THREE.PointsMaterial({
                color: 'white', size: 0.3, map: texture, alphaTest: 0.1, // removes black squares
                blending: THREE.AdditiveBlending,
                transparent: false
            });
            for (let i = 0; i < particleCount; i++) {
                let posX = (Math.random() - 0.5) * particleDistance;
                let posY = (Math.random() - 0.5) * particleDistance;
                let posZ = (Math.random() - 0.5) * particleDistance;
                let particle = new THREE.Vector3(posX, posY, posZ);
                particles
                    .vertices
                    .push(particle);
            }

            // create the particle system
            let particleSys = new THREE.Points(particles, pMaterial);
            particleSys.name = 'particleSys';
            renderer.setAnimationLoop(() => {
                let particleSys = scene.getObjectByName('particleSys');
                particleSys
                    .geometry
                    .vertices
                    .forEach(particle => {
                        particle.z += 0.1;
                        if (particle.z > 10) {
                            particle.z = -20
                        }
                        particleSys.geometry.verticesNeedUpdate = true;
                    })
                renderer.render(scene, camera)
            })
            // add it to the scene
            scene.add(cube)

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
                .start()

            function animateTween(time) {
                TWEEN.update(time)
                requestAnimationFrame(animateTween)
            }
            setTimeout(() => {
                return tween = new TWEEN
                    .Tween(camera.position)
                    .to({
                        x: 2,
                        y: 0,
                        z: 3
                    }, 5000)
                    .start()
            }, 20000)

            let animate = () => {
                target.x = (0.5 - mouse.x) * 0.002;
                target.y = (0.5 - mouse.y) * 0.002;
                camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
                camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };
            animate();
            requestAnimationFrame(animateTween);
            //CHECK IF MODELS ARE LOADED
            manager.onProgress = () => {
                let array = [
                    "Loading Existential Buffer",
                    "Setting Universal Physical Constants",
                    "Modeling Object Components",
                    "Installing ransomware: Complete >:)",
                    "Gathering Particle Sources",
                    "I'm testing your patience",
                    "Reconfoobling energymotron...",
                    "Your left thumb points to the right and your right thumb points to the left.",
                    "I'm sorry for being so slow",
                    "Too fair to worship, too divine to love",
                    "An idea is always a generalization, and generalization is a property of thinking" +
                            ". To generalize means to think",
                ]
                loadingScreenMessages.current.innerText = array[Math.floor(Math.random() * array.length)];
            }
            manager.onLoad = () => {
                loading.current.style.animation = 'loadingDone 2s normal forwards ease-in-out'
                setTimeout(()=>{setComponentLoaded(true)}, 2000)
            }
        }
    })



    function MouseMoveE(event) {
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
    }

    return (
        <div>
            <div
                id="canvas"
                onMouseMove={(event) => {
                MouseMoveE(event)
            }}></div>
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