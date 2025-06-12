import React, { useState, useEffect, useRef } from 'react';
import { useMotionValueEvent, useScroll, motion, useAnimation } from 'framer-motion';
import  LOGOTEMPLATE from  "../assets/LOGOTEMPLATE.webp"
function Navbar() {
    const { scrollY } = useScroll();
    const controls = useAnimation();

    useMotionValueEvent(scrollY, 'change', async (latest) => {
        if (scrollY.current === 0 ){
           await controls.start('visible');
        }  else if (scrollY?.prev > latest ){
          await  controls.start('visible');
        }
        else {
          await  controls.start('hidden');
        }

    });

    const variants = {
        hidden: {
            y: -100,
            opacity: 0,
            transition: { type: 'tween', duration: 0.3, ease: 'easeOut' },
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'tween', duration: 0.3, ease: 'easeOut' },
        },
    };



    useEffect(() => {
        const handleMouseMove = (event) => {
            console.log(event.clientY)
          if (event.clientY < 20){
              controls.start('visible');
              console.log("acceess")
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <motion.div
            variants={variants}
            initial="visible"
            animate={controls}
            className="bg-white/2 backdrop-blur-sm  fixed    z-[11111] w-full px-2 lg:px-[20rem] "
        >
            <div className="flex justify-between h-full py py-2">
                <div className="">
                   <a href={"#"}> <img src={LOGOTEMPLATE} className={"w-[50px]"} alt={"Bani"}/></a>
                </div>
               <ul className="flex place-items-center lg:text-sm text-[14px] gap-4">
                   <li className="text-foreground-light-description hover:text-[#00e673]"><a href={"#projects"}>Projects</a></li>
                   <li className="text-foreground-light-description hover:text-[#00e673]"><a href={"#aboutme"}>About</a></li>
                   <li className="text-foreground-light-description hover:text-[#00e673]"><a href={"#contact"}>Contact</a></li>

               </ul>
            </div>
        </motion.div>
    );
}

export default Navbar;
