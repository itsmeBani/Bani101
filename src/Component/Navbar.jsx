import React, { useState, useEffect, useRef } from 'react';
import { useMotionValueEvent, useScroll, motion, useAnimation } from 'framer-motion';

function Navbar() {
    const { scrollY } = useScroll();
    const controls = useAnimation();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (scrollY.current === 0 ){
            controls.start('visible');
        }  else if (scrollY.prev > latest ){
            controls.start('visible');
        }
        else {
            controls.start('hidden');
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
          if (event.clientY < 75){
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
            className="bg-white/2 backdrop-blur-sm  fixed    z-[1111] w-full  px-[20rem] "
        >
            <div className="flex justify-between h-full py-4">
                <div className="text-foreground-light-description">
                    logo
                </div>
               <ul className="flex gap-4">
                   <li className="text-foreground-light-description"><a href={"#projects"}>Projects</a></li>
                   <li className="text-foreground-light-description"><a href={"#aboutme"}>About</a></li>
                   <li className="text-foreground-light-description">Contact</li>

               </ul>
            </div>
        </motion.div>
    );
}

export default Navbar;
