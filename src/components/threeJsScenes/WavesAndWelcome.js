import * as THREE from "three";
import React, { useEffect, useRef, useState } from 'react';
import Welcome from '../index/Welcome.js'

const WavesAndWelcome = () => {
  const camera = useRef(0);
  const canvasContainer = useRef(0);
  const [wavesSceneLoaded, setWavesSceneLoaded] = useState(false);
  const transparentOverlay = useRef(0);
  const overlayMessage = 'LOADING...'.split("")
  const particleCount = useRef(0)
  const particleWaveTime = useRef(0)

  const cameraSetup = (camera, width, height) => {
    camera.position.set(0, 1, 5)
    camera.rotation.set(-0.8, 0, 0)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  const lightSetup = (scene) => {
    const X_RANGE_FROM = -15
    const X_RANGE_TO = 15
    for (let i = X_RANGE_FROM; i < X_RANGE_TO; i += 5) {
      const light = new THREE.PointLight(0xffffff, 0.8, 500)
      light.position.set(i, 8, -20)
      light.castShadow = true
      light.shadow.mapSize.width = 512
      light.shadow.mapSize.height = 512
      scene.add(light)
    }
  } 

  const mouseMove = (e) => {
    if (wavesSceneLoaded) {
      const mousex = (e.clientX - (canvasContainer.current.getBoundingClientRect().left / 2));
      const mousey = (e.clientY - (canvasContainer.current.getBoundingClientRect().top / 2));
      const x = mousex - canvasContainer.current.getBoundingClientRect().width / 2;
      const y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey;
      camera.current.rotation.y = (x / 100) * (Math.PI / 180);
      camera.current.rotation.x = -(y / 100) * (Math.PI / 180) - 0.8;
    }
  }

  const setupParticleSystem = (scene, manager) => {
    const particles = new THREE.BufferGeometry()
    const texture = new THREE.TextureLoader(manager).load('textures/flare.png')
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4528BD, size: 0.04, map: texture, alphaTest: 0.1, // removes black squares
      blending: THREE.CustomBlending,
      transparent: false
    })
    const positions = [];
    for (let row = 5; row > 1; row -= 0.1) {
      let rowParticleCount = -5;
      for (let j = 0; j < 10; j += 0.1) {
        const posX = rowParticleCount;
        const posY = 0;
        const posZ = row;
        positions.push(posX, posY, posZ);
        rowParticleCount += 0.1;
      }
    }
    particleCount.current = positions.length / 3
    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystem.receiveShadow = true;
    particleSystem.castShadow = true;
    particleSystem.name = 'particleSystem';
    scene.add(particleSystem)
  }

  const initWave = (scene, renderer) => {
    const particleSystem = scene.getObjectByName('particleSystem')
    if(!particleSystem) return
    const RGB_PARTICLES_PROPERTIES = {
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
    const PARTICLE_WAVE_PERIOD = 1000;
    let particleMaxPositionWave;
    let star = particleSystem.geometry.attributes.position.array;
    let particleColor = particleSystem.material.color;
    let increasingRGB = true

    Object.keys(particleColor).forEach(rgbColor => {
      const particleColorAtMaxRGBValue = Object.values(particleColor).every((currentRgb, index) =>
        [RGB_PARTICLES_PROPERTIES.r.max, RGB_PARTICLES_PROPERTIES.g.max, RGB_PARTICLES_PROPERTIES.b.max].filter((rgbMax, indexFilter) => {
          return rgbMax === currentRgb && index === indexFilter
        }).length)

      const particleColorAtMinRGBValue = Object.values(particleColor).every((currentRgb, index) =>
        [RGB_PARTICLES_PROPERTIES.r.min, RGB_PARTICLES_PROPERTIES.g.min, RGB_PARTICLES_PROPERTIES.b.min].filter((rgbMin, indexFilter) => {
          return rgbMin === currentRgb && index === indexFilter
        }).length)

      if (particleColorAtMaxRGBValue && increasingRGB) {
        increasingRGB = false
      }
      if (particleColorAtMinRGBValue && !increasingRGB) {
        increasingRGB = true
      }

      const particleColorBelowMaxRGB = particleColor[rgbColor] + 0.001 <= RGB_PARTICLES_PROPERTIES[rgbColor].max
      const particleColorAboveMinRGB = particleColor[rgbColor] - 0.001 >= RGB_PARTICLES_PROPERTIES[rgbColor].min

      if(increasingRGB){
        particleColor[rgbColor] = parseFloat((particleColorBelowMaxRGB ? particleColor[rgbColor] += 0.001 : particleColor[rgbColor]).toFixed(3))
        return
      }
      particleColor[rgbColor] = parseFloat((particleColorAboveMinRGB ? particleColor[rgbColor] -= 0.001 : particleColor[rgbColor]).toFixed(3))
    })
    for (let i = 1; i < particleCount.current * 3; i += 3) {
      particleMaxPositionWave = 0.5 * Math.sin(((2 * Math.PI) / 2.5) * star[i + 1] - ((2 * Math.PI) / PARTICLE_WAVE_PERIOD * particleWaveTime.current));
      star[i] += (particleMaxPositionWave / 100);
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleWaveTime.current += 0.001;
    }
    renderer.render(scene, camera.current);
  }

  useEffect(() => {
    const wavesCanvas = document.getElementById('wavesCanvas')
    if(!canvasContainer.current || !wavesCanvas) return
    const scene = new THREE.Scene();
    const manager = new THREE.LoadingManager();
    camera.current = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: wavesCanvas });
    const height = window.innerHeight;
    const width = window.innerWidth;
    cameraSetup(camera.current, width, height)
    lightSetup(scene)
    scene.background = new THREE.Color(0x020c1b);
    renderer.setSize(width, height);
    setupParticleSystem(scene, manager)

    window.addEventListener('resize', () => {
      const height = document.getElementById('wavesCanvas').clientHeight;
      const width = window.innerWidth;
      renderer.setSize(width, height);
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
    });

    const animate = () => {
      requestAnimationFrame(animate);
      initWave(scene, renderer)
    };
    animate();

    manager.onLoad = () => {
      setTimeout(() => {
        setWavesSceneLoaded(true)
      }, 2000);
    }

  }, []);

  return (
    <div className={`h-full w-full relative ${wavesSceneLoaded ? '' : 'bg-background'}`} 
      ref={canvasContainer} onMouseMove={(e) => mouseMove(e)}>
      <canvas id="wavesCanvas" className="max-w-full h-full"></canvas>
      {wavesSceneLoaded &&
        <Welcome className="inset-0" mouseMove={(e) => mouseMove(e)} transparentOverlay={transparentOverlay} />
      }
      <div className={`${wavesSceneLoaded ? 'fade-out' : ''} flex items-center bg-primary justify-center top-0 fixed z-50 h-100 w-full`}>
        {overlayMessage.map((letter, index) => {
          return <div key={index}
            className="flex align-items-center justify-center text-align-center mx-2 bold">
            <h1 style={{ '--i': index, fontSize: "50px" }} className="animate-text pl-1 font-teko font-bold text-secondary">{letter}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default WavesAndWelcome;