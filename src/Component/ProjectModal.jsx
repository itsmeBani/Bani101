import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ show, onClose, project }) {
    return (
        <AnimatePresence>
            {show && (
                <>

                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />


                    <motion.div
                        className="fixed z-50 overflow-y-auto top-1/2 left-1/2 w-[90%] h-[90%] bg-[#1F1F1F] text-white rounded-2xl shadow-2xl p-2 lg:p-8"
                        initial={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 100, damping: 12 }}
                    >
                        <main className="flex flex-col justify-between h-full gap-5">
                            <div className="flex flex-col gap-5">
                                {/* Header */}
                                <div className="flex place-items-center gap-5">
                                    <img src={project?.Logo} alt={project?.Project_Name} className="w-16 h-16" />
                                    <div>
                                        <h1 className="Kerif text-4xl leading-8">{project?.Project_Name}</h1>
                                        <p>{project?.Description}</p>
                                    </div>
                                </div>


                                <div>
                                    <h3 className="text-xl text-foreground-light">Key Features</h3>
                                    <ul className="list-disc list-inside font-thin">
                                        {project?.details?.keyFeatures?.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex w-full gap-2 justify-end relative">
                                <button
                                    onClick={onClose}
                                    className="text-white flex text-2xl btn-font px-5 rounded-md py-1"
                                >
                                    Close
                                </button>
                                <a
                                    href={project?.Project_URL ? project?.Project_URL : "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-white text-2xl flex btn-font px-3 rounded-md py-1 ${
                                        project?.Project_URL
                                            ? "bg-[#006239] hover:bg-[#00522a] cursor-pointer"
                                            : "bg-[#006239]/50 cursor-not-allowed opacity-50"
                                    }`}
                                    onClick={(e) => {
                                        if (!project?.Project_URL) e.preventDefault();
                                    }}
                                >
                                    Take a look
                                </a>
                            </div>
                        </main>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default ProjectModal;
