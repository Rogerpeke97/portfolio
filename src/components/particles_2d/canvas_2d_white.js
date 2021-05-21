import React, {useEffect, useRef} from 'react';



const style = {
    canvas_2d_page_3: {
        position: "absolute",
        height: "1080px",
        width: "100vw",
        background: "black",
//        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
//        backgroundSize: "400% 400%",
        animation: "transition 45s infinite"
    }
}


const CanvasWhite = ({page_3})=>{

    const canvas_2d_page_3 = useRef(0);
    
    useEffect(()=>{
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

        const canvas_2d_page_3_ctx = canvas_2d_page_3.current.getContext("2d");
        canvas_2d_page_3.current.width = page_3.current.clientWidth;
        canvas_2d_page_3.current.height = page_3.current.clientHeight;
        let array_particles_page_3 = [];
        let particle_width_page_3 = page_3.current.clientWidth / 25;
        let particle_position_page_3 = -particle_width_page_3;

        for(let i = 0; i < 27; i++){
            //let particle_height = window.innerHeight / 10;
            let particle = new particle_generator(particle_position_page_3, Math.floor(Math.random() * page_3.current.clientHeight),
            particle_position_page_3 + particle_width_page_3, particle_position_page_3 - particle_width_page_3, 8);
            particle_position_page_3 = particle_position_page_3 + particle_width_page_3;
            array_particles_page_3.push(particle);
        }
        let mouse_movement_amount = 0;
        let mousex, x, amount_to_move;   
        document.addEventListener('mousemove', (e)=>{
            mousex = (e.clientX   - ( canvas_2d_page_3.current.getBoundingClientRect().left / 2)) ;
            x = mousex - canvas_2d_page_3.current.getBoundingClientRect().width / 2 ;
            amount_to_move = (x - mouse_movement_amount) / 100;
            mouse_movement_amount = x;
            //let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
        });

        const animation_loop = ()=>{
            move_particles(canvas_2d_page_3.current, canvas_2d_page_3_ctx, page_3.current, array_particles_page_3, 1);
            update_x_position(array_particles_page_3);
            requestAnimationFrame(animation_loop);
        }

        animation_loop();

        window.addEventListener('resize', ()=>{
            //CANVAS_2d
            canvas_2d_page_3.current.width = window.innerWidth;

            particle_width_page_3 = window.innerWidth / 25;
            particle_position_page_3 = -particle_width_page_3;

            array_particles_page_3.forEach((part)=>{
                part.x = particle_position_page_3;
                part.positive_amount_to_move = particle_position_page_3 + particle_width_page_3;
                part.negative_amount_to_move = particle_position_page_3 - particle_width_page_3;
                particle_position_page_3 = particle_position_page_3 + particle_width_page_3;
            });
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div style={style.canvas_2d_page_3}>
            <canvas ref={canvas_2d_page_3} style={style.canvas_2d_page_3}></canvas>
        </div>
    );
}

export default CanvasWhite;