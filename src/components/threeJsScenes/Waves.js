import * as THREE from "three";
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import Welcome from '../general/Welcome.js'

const Waves = ({titleLetter, mediaQuery}) => {
  const camera = useRef(0);
  const canvasContainer = useRef(0);
  const progressBar = useRef(0);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const loading = useRef(0);
  const transparentOverlay = useRef(0);
  const percentage = useRef(0);
  const overlayMessage = 'LOADING...'.split("")



  useEffect(() => {

    let scene = new THREE.Scene();
    const manager = new THREE.LoadingManager();
    camera.current = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let height = window.innerHeight;
    let width = window.innerWidth;

    camera.current.position.set(0, 1, 5);
    camera.current.rotation.y = 0;
    camera.current.rotation.x = -0.8;
    camera.current.rotation.z = 0;


    for(let i = -15; i < 15; i += 5) {
      const light = new THREE.PointLight(0xffffff, 0.8, 500);
      light.position.set(i, 8, -20);
      light.castShadow = true;
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      scene.add(light);
    }

    const geometry = new THREE.PlaneGeometry(40, 10, 32);

    let groundMirror = new Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: width,
      textureHeight: height,
      color: 0x000000,
      opacity: 0.1
    });
    groundMirror.position.y = -0.35;
    groundMirror.position.z = 0;
    groundMirror.rotateX(- Math.PI / 2);
    scene.add(groundMirror);




    let mouse = new THREE.Vector2();

    const windowHalf = new THREE.Vector2(window.innerWidth / window.innerHeight);

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
      mouse.x = (event.clientX / 8 - windowHalf.x);
      mouse.y = (event.clientY / 4 - windowHalf.y);
    }
    window.addEventListener('resize', (e) => {
      height = e.currentTarget.innerHeight
      width = e.currentTarget.innerWidth;
      renderer.setSize(width, height);
      groundMirror.getRenderTarget().setSize(width, height);
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
    });

    renderer.setSize(width, height);
    canvasContainer.current.appendChild(renderer.domElement);



    //PARTICLES
    const particleCount = 2600; // There is one more due to the float being slightly above 0 
    let particles = new THREE.BufferGeometry();
    const texture = new THREE.TextureLoader(manager).load('flare.png');

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x2d0caf, size: 0.1, map: texture, alphaTest: 0.1, // removes black squares
      blending: THREE.CustomBlending,
      transparent: false
    });

    let positions = [];
    for (let i = 5; i > 1; i -= 0.2) {
      let count = -5;
      for (let j = 0; j < 10; j += 0.2) {
        const posX = count;
        const posY = 0;
        const posZ = i;
        positions.push(posX, posY, posZ);
        count += 0.2;
      }
    }
    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    // create the particle system
    let particleSys = new THREE.Points(particles, particleMaterial);
    particleSys.receiveShadow = true;
    particleSys.castShadow = true;
    particleSys.name = 'particleSys';
    const period = 200;
    let time = 0;
    let particleMaxPositionWave;
    let star = particleSys.geometry.attributes.position.array;
    console.log(particleSys)
    let particleColor = particleSys.material.color;
    let switchColorOperator = true
    const rgbProperties = {
      r: {
        max: 1,
        min: 0.17
      },
      g: {
        max: 1,
        min: 0.04
      },
      b: {
        max: 1,
        min: 0.68
      }
    }

    const render = () => {
      Object.keys(particleColor).forEach(key => {

          particleColor[key] = particleColor[key] > rgbProperties[key].min && particleColor[key] < rgbProperties[key].max 
          ? parseFloat((switchColorOperator ? particleColor[key] += 0.01 : particleColor[key] -= 0.01).toFixed(2)) : particleColor[key]
          
          console.log(particleColor[key])

          
          const substract = Object.values(particleColor).every((val, index) => [rgbProperties.r.max, rgbProperties.g.max, rgbProperties.b.max].filter((value, indexFilter)=>{
            return value === val && index === indexFilter
          })) 
          const add = Object.values(particleColor).every((val, index) => [rgbProperties.r.min, rgbProperties.g.min, rgbProperties.b.min].filter((value, indexFilter)=>{
            return value === val && index === indexFilter
          }))

          if(substract === Object.values(particleColor).length && switchColorOperator){
            console.log("IM MINUS", Object.values(particleColor), [rgbProperties.r.max, rgbProperties.g.max, rgbProperties.b.max].every(val => Object.values(particleColor).includes(val)))
            switchColorOperator = false
          }  
          if(add === Object.values(particleColor).length && !switchColorOperator){
            console.log("IM PLUS", Object.values(particleColor))
            switchColorOperator = true
          }  
      });
    
      for (let i = 1; i < particleCount * 3; i += 3) {
        particleMaxPositionWave = 0.5 * Math.sin(((2 * Math.PI) / 2.5) * star[i + 1] - ((2 * Math.PI) / period * time));

        star[i] += (particleMaxPositionWave / 100);

        particleSys.geometry.attributes.position.needsUpdate = true;

        time += 0.001;
      }
      renderer.render(scene, camera.current);
    };

    scene.add(particleSys)


    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    animate();

    percentage.current.innerText = "0 %";
    manager.onProgress = () => {
      if (parseInt(percentage.current.innerText.slice(0, -2)) < 100) {
        percentage.current.innerText = parseInt(percentage.current.innerText.slice(0, -2)) + 1 + " %";
        progressBar.current.style.width = (percentage.current.innerText).replace(' ', '');
      }
      else {
        percentage.current.innerText = "100%";
        progressBar.current.style.width = percentage.current.innerText;
      }
    }

    manager.onLoad = () => {
      percentage.current.innerText = "100%";
      progressBar.current.style.width = percentage.current.innerText;
      loading.current.style.animation = 'loadingDone 2s normal ease-out';
      setTimeout(() => { setComponentLoaded(true) }, 2000);
    }

  }, []);
  const mouseMove = (e) => {
    if (componentLoaded) {
      const mousex = (e.clientX - (canvasContainer.current.getBoundingClientRect().left / 2));
      const mousey = (e.clientY - (canvasContainer.current.getBoundingClientRect().top / 2));
      const x = mousex - canvasContainer.current.getBoundingClientRect().width / 2;
      const y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey;
      transparentOverlay.current.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${y / 100}deg)`;
      camera.current.rotation.y = (x / 100) * (Math.PI / 180);
      camera.current.rotation.x = -(y / 100) * (Math.PI / 180) - 0.8;
    }
  }
  return (
    <div className="window-size-container grid" ref={canvasContainer} onMouseMove={(e) => mouseMove(e)}>
      <Welcome mouseMove={(e) => mouseMove(e)} mediaQuery={mediaQuery} titleLetter={titleLetter} transparentOverlay={transparentOverlay} />
      <div className={ componentLoaded ? "display-none" : "loading-container" }
        ref={loading}>
        <div>
          <div className="LOADINGCONTAINER">
            {overlayMessage.map((letter, index)=>{
              return <span key={index}>{letter}</span>
            })}
          </div>
        </div>
        <div className="loading-bar">
          <div className="percentage" ref={percentage}></div>
          <div className="progress-bar grid" ref={progressBar}></div>
        </div>
      </div>
    </div>
  )
}

export default Waves;