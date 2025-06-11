import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import {X} from "lucide-react";

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: {   opacity: 0 ,},
    visible: {

        opacity: 1,
        transition: { delay: 0.1 }
    },
};

const Modal = ({ showModal, closeModal, children }) => {
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div
                    className="modal-backdrop flex justify-center place-items-center"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',

                        zIndex: 999,
                    }}
                >
                    <motion.div
                        className="modal-content  w-[100%] relative  place-items-center justify-center"
                        variants={modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                       <div className="relative place-items-center justify-center flex rounded-lg  ">
                           {children}
                           <button className="absolute -top-10 right-5 lg:-top-10 lg:-right-10" onClick={closeModal} ><X color={"white"}/></button>
                       </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
