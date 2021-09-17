import React, { useEffect, useRef } from 'react';

const ParticlesBlue = ({ portfolioGrid }) => {

	const canvas = useRef(0);

	useEffect(() => {

		function main() {
			createParticles()
		}

		function createParticles() {
			for (let i = 0; i < 27; i++) {
				const particle = new Particle(
					particlePosition, Math.floor(Math.random() * portfolioGrid.current.clientHeight),
					particlePosition + particleWidth, particlePosition - particleWidth, 8
				);
				particlePosition = particlePosition + particleWidth;
				array_particles.push(particle);
			}
		}


		class Particle {
			constructor(x, y, positive_amount, negative_amount, radiusCircle) {
				this.x = x;
				this.y = y;
				this.movementAmountRight = positive_amount;
				this.movementAmountLeft = negative_amount;
				this.radius = radiusCircle;
				this.arc = function (position_x, position_y, radius, start, end, canvas_ctx, color) {
					canvas_ctx.beginPath();
					let grd = canvas_ctx.createLinearGradient(position_x - this.radius, position_y + this.radius, position_x + this.radius / 2, position_y - this.radius);
					switch (color) {
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
					canvas_ctx.fillStyle = grd;
					canvas_ctx.arc(position_x, position_y, radius, start, end);
					canvas_ctx.closePath();
					canvas_ctx.fill();
				}
			}
		}

		const canvas_ctx = canvas.current.getContext("2d");
		canvas.current.width = portfolioGrid.current.clientWidth;
		canvas.current.height = portfolioGrid.current.clientHeight;
		let array_particles = [];
		let particleWidth = canvas.current.width / 25;
		let particlePosition = -particleWidth;







		const move_particles = (canvas_to_mod, canvas_to_mod_ctx, div_ctx, array_with_particles, color) => {
			canvas_to_mod_ctx.fillStyle = "black";
			canvas_to_mod_ctx.fillRect(0, 0, canvas_to_mod.width, canvas_to_mod.height);
			array_with_particles.forEach((part) => {
				if (part.y < 0) {
					part.y = div_ctx.clientHeight;
				}
				part.y = part.y - 0.5;
				part.arc(part.x, part.y, part.r, 0, 2 * Math.PI, canvas_to_mod_ctx, color);
			})
			//particle.x = particle.x - 0.001;
			//particle.arc(window.innerWidth / particle.x, window.innerHeight / particle.y, particle.r, 0, 2 * Math.PI);
		}

		const update_x_position = (array_with_particles) => {
			array_with_particles.forEach((part) => {
				if (part.x + amount_to_move < part.movementAmountRight && part.x + amount_to_move > part.movementAmountLeft) {
					part.x = part.x + amount_to_move;
				}
			});
		}

		let mouse_movement_amount = 0;
		let mousex, x, amount_to_move;
		document.addEventListener('mousemove', (e) => {
			mousex = (e.clientX - (canvas.current.getBoundingClientRect().left / 2));
			x = mousex - canvas.current.getBoundingClientRect().width / 2;
			amount_to_move = (x - mouse_movement_amount) / 100;
			mouse_movement_amount = x;
			//let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
		});
		const animation_loop = () => {
			move_particles(canvas.current, canvas_ctx, portfolioGrid.current, array_particles, "blue");
			update_x_position(array_particles);
			requestAnimationFrame(animation_loop);
		}

		animation_loop();

		window.addEventListener('resize', () => {
			//canvas
			canvas.current.width = window.innerWidth;

			particleWidth = window.innerWidth / 25;
			particlePosition = -particleWidth;

			array_particles.forEach((part) => {
				part.x = particlePosition;
				part.movementAmountRight = particlePosition + particleWidth;
				part.movementAmountLeft = particlePosition - particleWidth;
				particlePosition = particlePosition + particleWidth;
			});
		})


		main()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="particles-2d-canvas">
			<canvas ref={canvas}></canvas>
		</div>
	);
}

export default ParticlesBlue;