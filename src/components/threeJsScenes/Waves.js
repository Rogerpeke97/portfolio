import * as THREE from "three";
import React, { useEffect, useRef, useState } from 'react';
import Welcome from '../general/Welcome.js'

const Waves = ({ mediaQuery }) => {
  const camera = useRef(0);
  const canvasContainer = useRef(0);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const loading = useRef(0);
  const transparentOverlay = useRef(0);
  const overlayMessage = 'LOADING...'.split("")

  useEffect(() => {
    const wavesCanvas = document.getElementById('wavesCanvas')
    if(!canvasContainer.current || !wavesCanvas) return
    let scene = new THREE.Scene();
    const manager = new THREE.LoadingManager();
    camera.current = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: wavesCanvas });
    let height = window.innerHeight;
    let width = window.innerWidth;

    camera.current.position.set(0, 1, 5);
    camera.current.rotation.y = 0;
    camera.current.rotation.x = -0.8;
    camera.current.rotation.z = 0;

    camera.current.aspect = width / height;
    camera.current.updateProjectionMatrix();


    for (let i = -15; i < 15; i += 5) {
      const light = new THREE.PointLight(0xffffff, 0.8, 500);
      light.position.set(i, 8, -20);
      light.castShadow = true;
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      scene.add(light);
    }

    scene.background = new THREE.Color(0x020c1b);



    let mouse = new THREE.Vector2();

    const windowHalf = new THREE.Vector2(window.innerWidth / window.innerHeight);

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
      mouse.x = (event.clientX / 8 - windowHalf.x);
      mouse.y = (event.clientY / 4 - windowHalf.y);
    }
    window.addEventListener('resize', () => {
      height = window.innerHeight
      width = window.innerWidth;
      renderer.setSize(width, height);
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
    });

    renderer.setSize(width, height);



    //PARTICLES
    let particles = new THREE.BufferGeometry();
    const texture = new THREE.TextureLoader(manager).load('flare.png');

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4528BD, size: 0.04, map: texture, alphaTest: 0.1, // removes black squares
      blending: THREE.CustomBlending,
      transparent: false
    });

    let positions = [];
    for (let i = 5; i > 1; i -= 0.1) {
      let count = -5;
      for (let j = 0; j < 10; j += 0.1) {
        const posX = count;
        const posY = 0;
        const posZ = i;
        positions.push(posX, posY, posZ);
        count += 0.1;
      }
    }
    const particleCount = positions.length / 3

    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    // create the particle system
    let particleSys = new THREE.Points(particles, particleMaterial);
    particleSys.receiveShadow = true;
    particleSys.castShadow = true;
    particleSys.name = 'particleSys';
    const period = 1000;
    let time = 0;
    let particleMaxPositionWave;
    let star = particleSys.geometry.attributes.position.array;
    let particleColor = particleSys.material.color;
    let switchColorOperator = true
    const rgbProperties = {
      r: {
        max: 1,
        min: 0.27
      },
      g: {
        max: 1,
        min: 0.15
      },
      b: {
        max: 1,
        min: 0.74
      }
    }

    const render = () => {
      Object.keys(particleColor).forEach(rgbColor => {
        const substract = Object.values(particleColor).every((currentRgb, index) =>
          [rgbProperties.r.max, rgbProperties.g.max, rgbProperties.b.max].filter((rgbMax, indexFilter) => {
            return rgbMax === currentRgb && index === indexFilter
          }).length)

        const add = Object.values(particleColor).every((currentRgb, index) =>
          [rgbProperties.r.min, rgbProperties.g.min, rgbProperties.b.min].filter((rgbMin, indexFilter) => {
            return rgbMin === currentRgb && index === indexFilter
          }).length)

        if (substract && switchColorOperator) {
          switchColorOperator = false
        }
        if (add && !switchColorOperator) {
          switchColorOperator = true
        }

        particleColor[rgbColor] = parseFloat((switchColorOperator
          ?
          particleColor[rgbColor] + 0.001 <= rgbProperties[rgbColor].max
            ? particleColor[rgbColor] += 0.001 : particleColor[rgbColor]
          :
          particleColor[rgbColor] - 0.001 >= rgbProperties[rgbColor].min
            ? particleColor[rgbColor] -= 0.001 : particleColor[rgbColor]).toFixed(3))
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

    manager.onLoad = () => {
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
      camera.current.rotation.y = (x / 100) * (Math.PI / 180);
      camera.current.rotation.x = -(y / 100) * (Math.PI / 180) - 0.8;
    }
  }
  return (
    <div className="flex h-full w-full" ref={canvasContainer} onMouseMove={(e) => mouseMove(e)}>
      <canvas id="wavesCanvas" className="max-w-full h-full"></canvas>
      <Welcome className="inset-0" mouseMove={(e) => mouseMove(e)} mediaQuery={mediaQuery} transparentOverlay={transparentOverlay} />
      <div className={componentLoaded ? "hidden" : "loading-container"} ref={loading}>
        <div className="letters-container grid">
          {overlayMessage.map((letter, index) => {
            return <div key={index}
              className="flex align-items-center justify-center text-align-center mx-2 bold">
              <h1 style={{ '--i': index, fontSize: "50px" }} className="animate-text pl-1 Teko">{letter}</h1>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Waves;