import React, { useEffect, useRef } from 'react';

const Particles = ({ div, colorParticles }) => {

	const canvas = useRef(0);

	useEffect(() => {

		function main() {

			createParticles()

			window.addEventListener('resize', () => {
				canvas.current.width = window.innerWidth;
				canvas.current.width = div.current.clientHeight;
				halfMovementAvailable = window.innerWidth / 25;
				particlePosition = -halfMovementAvailable;
				arrayOfParticles.forEach((part) => {
					part.x = particlePosition;
					part.movementAmountRight = particlePosition + halfMovementAvailable;
					part.movementAmountLeft = particlePosition - halfMovementAvailable;
					particlePosition = particlePosition + halfMovementAvailable;
				});
			})

			document.addEventListener('mousemove', (e) => {
				mousex = (e.clientX - (canvas.current.getBoundingClientRect().left / 2));
				x = mousex - canvas.current.getBoundingClientRect().width / 2;
				amountToMove = (x - mouseMovementAmount) / 100;
				mouseMovementAmount = x;
			});

			animationLoop();

		}

		function createParticles() {
			for (let i = 0; i < 27; i++) {
				const particle = new Particle(
					particlePosition, Math.floor(Math.random() * div.current.clientHeight),
					particlePosition + halfMovementAvailable, particlePosition - halfMovementAvailable, 8
				);
				particlePosition = particlePosition + halfMovementAvailable;
				arrayOfParticles.push(particle);
			}
		}

		const moveParticlesY = (canvas_to_mod, canvas_to_mod_ctx, div_ctx, array_with_particles, color) => {
			canvas_to_mod_ctx.fillStyle = "black";
			canvas_to_mod_ctx.fillRect(0, 0, canvas_to_mod.width, canvas_to_mod.height);
			array_with_particles.forEach((part) => {
				if (part.y < 0) {
					part.y = div_ctx.clientHeight;
				}
				part.y = part.y - 0.5;
				part.arc(part.x, part.y, part.radius, 0, 2 * Math.PI, canvas_to_mod_ctx, color);
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
			moveParticlesY(canvas.current, canvasContext, div.current, arrayOfParticles);
			updateXPosition(arrayOfParticles);
			requestAnimationFrame(animationLoop);
		}


		class Particle {
			constructor(x, y, rightAmount, leftAmount, radiusCircle) {
				this.x = x;
				this.y = y;
				this.movementAmountRight = rightAmount;
				this.movementAmountLeft = leftAmount;
				this.radius = radiusCircle;
				this.arc = function (positionX, positionY, radius, start, end, canvasContext) {
					canvasContext.beginPath();
					let grd = canvasContext.createLinearGradient(positionX - this.radius, positionY + this.radius, positionX + this.radius / 2, positionY - this.radius);
					switch (colorParticles) {
						case "blue":
							grd.addColorStop(0.30, "rgba(69,40,189,1)");
							grd.addColorStop(0.70, "rgba(43,22,55,1)");
							break;
						case "white":
							grd.addColorStop(0.30, "rgba(255,255,255,1)");
							grd.addColorStop(0.70, "rgba(32,31,31,1)");
							break;
						default:
							throw new Error("No color provided")
					}
					canvasContext.fillStyle = grd;
					canvasContext.arc(positionX, positionY, radius, start, end);
					canvasContext.closePath();
					canvasContext.fill();
				}
			}
		}

		const canvasContext = canvas.current.getContext("2d");
		canvas.current.width = window.innerWidth;
		canvas.current.height = div.current.clientHeight;
		let arrayOfParticles = [];
		let halfMovementAvailable = window.innerWidth / 25;
		let particlePosition = -halfMovementAvailable;
		let mouseMovementAmount = 0;
		let mousex, x, amountToMove;

		main()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="particles-2d-canvas">
			<canvas ref={canvas}></canvas>
		</div>
	);
}

export default Particles;