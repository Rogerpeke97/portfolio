import React, { useEffect, useRef, useContext } from 'react';
import { MediaContext } from '../../context/MediaContext';

const Particles = ({ colorParticles }) => {
	const canvas = useRef(0);
  const parentResizeObserver = useRef(0);
  const { deviceHeightAndWidth } = useContext(MediaContext);
  class Particle {
    constructor(x, y, rightAmount, leftAmount, radiusCircle, color) {
      this.x = x;
      this.y = y;
      this.movementAmountRight = rightAmount;
      this.movementAmountLeft = leftAmount;
      this.radius = radiusCircle;
      this.color = color
      this.arc = function (positionX, positionY, radius, start, end, canvasContext) {
        canvasContext.beginPath();
        const particleGradient = canvasContext.createLinearGradient(positionX - this.radius, positionY + this.radius, positionX + this.radius / 2, positionY - this.radius)
        if(this.color === 'blue'){
          particleGradient.addColorStop(0.30, this.color)
          particleGradient.addColorStop(0.70, "rgba(43,22,55,1)")
        }
        if(this.color === 'white'){
          particleGradient.addColorStop(0.30, this.color)
          particleGradient.addColorStop(0.70, "rgba(32,31,31,1)")
        }
        canvasContext.fillStyle = particleGradient;
        canvasContext.arc(positionX, positionY, radius, start, end);
        canvasContext.closePath();
        canvasContext.fill();
      }
    }
  }

	useEffect(() => {
    if(!deviceHeightAndWidth) return
    const arrayOfParticles = [];
		let halfMovementAvailable = window.innerWidth / 25;
		let particlePosition = -halfMovementAvailable;
		let mouseMovementAmount = 0;
		let amountToMove; 

    const setupCanvas = () => {
      const parentContainer = canvas.current.parentElement;
      const height = parentContainer.clientHeight;
      const width = parentContainer.clientWidth;
      canvas.current.width = width;
      canvas.current.height = height;
    }

    const resizeCanvasAndSetParticlesPosition = () => {
      const parentContainer = canvas.current.parentElement;
      const height = parentContainer.clientHeight
      const width = parentContainer.clientWidth;
      canvas.current.width = width;
      canvas.current.height = height;
      halfMovementAvailable = width / 25;
      particlePosition = -halfMovementAvailable;
      arrayOfParticles.forEach((part) => {
        part.x = particlePosition;
        part.movementAmountRight = particlePosition + halfMovementAvailable;
        part.movementAmountLeft = particlePosition - halfMovementAvailable;
        particlePosition = particlePosition + halfMovementAvailable;
      });
    }

    const setupListeners = () => {
      const parentContainer = canvas.current.parentElement
      parentResizeObserver.current = new ResizeObserver(resizeCanvasAndSetParticlesPosition).observe(parentContainer)
      document.addEventListener('mousemove', (e) => {
        const mousex = (e.clientX - (canvas.current.getBoundingClientRect().left / 2));
        const x = mousex - window.innerWidth / 2;
        amountToMove = (x - mouseMovementAmount) / 100;
        mouseMovementAmount = x;
      });
    }

    const createParticles = () => {
      const PARTICLES_AMOUNT = 27
      const PARTICLE_RADIUS = 8
      const parentContainer = canvas.current.parentElement
      const separationBetweenParticles = parentContainer.clientWidth / PARTICLES_AMOUNT
      const canvasHeight = parentContainer.clientHeight
      let currentParticlePositionX = 0
			for (let i = 0; i < PARTICLES_AMOUNT; i++) {
        const particlePositionY = Math.floor(Math.random() * canvasHeight)
        const particleAmountToMoveLeft = currentParticlePositionX - separationBetweenParticles
        const particleAmountToMoveRight = currentParticlePositionX + separationBetweenParticles
				const particle = new Particle(currentParticlePositionX, particlePositionY, particleAmountToMoveRight, particleAmountToMoveLeft, PARTICLE_RADIUS, colorParticles)
				currentParticlePositionX += separationBetweenParticles
				arrayOfParticles.push(particle);
			}
    }

		const moveParticlesY = (canvas, array_with_particles) => {
      const canvasContext = canvas.getContext("2d")
			canvasContext.fillStyle = "#020c1b";
			canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
			array_with_particles.forEach((part) => {
				if (part.y < 0) {
					part.y = canvas.clientHeight;
				}
				part.y = part.y - 0.5;
				part.arc(part.x, part.y, part.radius, 0, 2 * Math.PI, canvasContext);
			})
		}

		const updateXPosition = (array_with_particles) => {
			array_with_particles.forEach((part) => {
				if (part.x + amountToMove < part.movementAmountRight && part.x + amountToMove > part.movementAmountLeft) {
					part.x = part.x + amountToMove;
				}
			});
		}

		const animationLoop = () => {
			moveParticlesY(canvas.current, arrayOfParticles);
			updateXPosition(arrayOfParticles);
			requestAnimationFrame(animationLoop);
		}

    setupCanvas()
    setupListeners()
    createParticles()
    animationLoop();

    return () => {
      parentResizeObserver.current.disconnect()
      document.removeEventListener('mousemove', (e) => {})
    }

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deviceHeightAndWidth]);
	return (
		<>
			<canvas className="absolute" ref={canvas}></canvas>
		</>
	);
}

export default Particles;