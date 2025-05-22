import React from 'react';
import {AcademicCapIcon, Cog6ToothIcon} from "@heroicons/react/16/solid/index.js";
import {motion} from "motion/react";

function EducationalTimeLine({data}) {
    return (
        <section className=" p-5 lg:px-[8rem] lg:pb-[3rem]">

            <h1 className="Kerif text-white lg:text-center  text-xl lg:text-3xl lg:mb-2 ">Educational Attainment</h1>
            <p className="text-gray-200  lg:text-center opacity-70 leading-5  lg:text-lg ">
                I’m someone who enjoys turning ideas into real projects and constantly learning along the way.
            </p>
            <div className="flex flex-col  pt-5 lg:pt-10  justify-center  w-full place-items-center ">
            {data?.map((info, index) => {
                const opacity = 1 - index * 0.35 ; // 1, 0.75, 0.5
                return (
                    <motion.div initial={{opacity:0, y:-10,}}
                                viewport={{ once: true }}
                                whileInView={{opacity:1, y:0,transition:{delay : index * 0.3, type: "spring",
                                        visualDuration: 0.5, bounce: 0.25}}} key={index} className="w-full lg:w-[700px] h-auto text-white">
                        <div style={{ opacity }} className="w-auto  flex lg:gap-2">
                            <div className="w-[30px] flex flex-col   h-auto">
                                <div className="w-[30px] flex ">
                                    <div className="p-2 bg-[#00311D] rounded-full">
                                        <AcademicCapIcon className="w-5 text-brand-600" />
                                    </div>
                                </div>

                                {index !== 2 && (
                                    <motion.div initial={{opacity:0, height:0,}}
                                                viewport={{ once: true }}
                                                whileInView={{opacity:1, height:"100%",transition:{delay : index * 0.3, type: "spring",
                                                        visualDuration: 0.5, bounce: 0.25}}} className=" flex   justify-center w-full ">
                                      <div className="w-[2px] h-full   lg:flex   bg-blue-200" />
                                  </motion.div>
                                )}
                            </div>
                          <div className="w-full  p h-full pb-2 ">
                              <div className="p-5 pt-0 ml-2 h-full flex flex-col w-full  rounded-lg ">
                                  <p className="w-full text-foreground-light font-bold lg:text-lg  text-white">
                                      {info.major}
                                  </p>
                                  <p className="w-full italic text-foreground-light-description font-bold lg:text-md  text-white">
                                      {info.name}<span className="text-foreground-light "> ({info.year})</span>
                                  </p>
                                  <p className="w-full  text-foreground-light-description h-full text-sm lg:text-lg text-white">
                                      {info.description}

                                   </p>
                              </div>

                          </div>
                        </div>
                    </motion.div>
                );
            })}

            </div>
        </section>
    );
}

export default EducationalTimeLine;