import React from 'react';
import * as THREE from "three";
import {useEffect} from "react";
import TWEEN from '@tweenjs/tween.js'
function ThreeJsScene() {
    useEffect(() => {
        let canvasContainer = document.getElementById('canvas')
        let scene = new THREE.Scene();
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
        .TextureLoader()
        .load('sunbump.png');
        
        let sunTexture = new THREE
        .TextureLoader()
        .load('sun.jpg');
        let geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            map: sunTexture,
            size: 3, alphaTest: 0.1,
            bumpMap: sunBump, bumpScale: 0.005
        });
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
        requestAnimationFrame(animateTween)
    })

    function MouseMoveE(event) {
        let canvasContainer = document.getElementById('canvas')
        let mousex = (event.clientX / 8 - (canvasContainer.clientWidth / 2));
        let mousey = (event.clientY / 4 - (canvasContainer.clientHeight / 2));
        let targetx = (0.5 - mousex) * 0.001;
        let targety = (0.5 - mousey) * -0.01;
        let overlay = document.getElementById('overlay');
        let overlay2 = document.getElementById('overlay2');
        let grid1_intro = document.getElementById('grid1_intro');
        let grid1_name_img = document.getElementById('grid1_name_img');
        overlay.style.transform = 'rotate3d(' + targetx + ',' + targety + ', 0, 35deg)'
        overlay2.style.transform = 'rotate3d(' + targetx + ',' + targety + ', 0, 35deg)'
        grid1_intro.style.transform = 'rotate3d(' + targetx + ',' + targety + ', 0, 35deg)'
        grid1_name_img.style.transform = 'rotate3d(' + targetx + ',' + targety + ', 0, 35deg)'
    }
    function WheelDownUp(event) {
        let mouseUp = event.deltaY;
        let m = document.getElementById('grid1_intro')
        let canvas = document.getElementById('canvas')
        console.log(m.style.display)
        console.log(mouseUp)
        function grid1Fade() {
            let grid1_intro = document.getElementById('grid1_intro');
            let overlay2 = document.getElementById('overlay2');
            let grid1_name_img = document.getElementById('grid1_name_img');
            let overlay = document.getElementById('overlay');
            let scrolldown = document.getElementById('scrolldown');
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
            }
        }
        if (mouseUp > 0 && (m.style.display === '' || m.style.display === 'grid')) {
            canvas.style.pointerEvents = 'none'
            grid1Fade()
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
        function grid1Display() {
            let grid1_intro = document.getElementById('grid1_intro');
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
                grid1_intro.style.left = '40%'
            }
            overlay2.onanimationend = () => {
                overlay2.style.display = 'grid'
                overlay2.style.left = '40%'
            }
            grid1_name_img.onanimationend = () => {
                grid1_name_img.style.display = 'grid'
                grid1_name_img.style.left = '0'
            }
            overlay.onanimationend = () => {
                overlay.style.display = 'grid'
                overlay.style.left = '0'
                canvas.style.pointerEvents = 'auto' // to allow mousewheel event get triggered
            }
        }
        if (mouseUp < 0 && m.style.display === 'none') {
            canvas.style.pointerEvents = 'none'
            let grid2 = document.getElementById('grid2');
            grid2.style.animation = 'none'
            grid2.style.animation = null;
            grid2.style.animation = 'popGrid2reverse 1s normal forwards ease-out'
            grid2.onanimationend = () => {
                grid2.style.display = 'none'
            }
            setTimeout(grid1Display(), 1000);
        }
    }
    return (
        <div
            id="canvas"
            onWheel={(event) => {
            WheelDownUp(event);
        }}
            onMouseMove={(event) => {
            MouseMoveE(event)
        }}></div>
    )
}
export default ThreeJsScene;