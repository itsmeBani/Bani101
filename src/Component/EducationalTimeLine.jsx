import React from 'react';
import {AcademicCapIcon, Cog6ToothIcon} from "@heroicons/react/16/solid/index.js";
import {motion} from "motion/react";

function    EducationalTimeLine({data}) {
    return (
        <section className="pt-5 lg:pb-[3rem]">

            <h1 className="Kerif text-white   text-xl lg:text-xl lg:mb-2 ">Educational Attainment</h1>
            <p className="text-gray-200   opacity-70 leading-5  lg:text-sm ">
                I’m someone who enjoys turning ideas into real projects and constantly learning along the way.
            </p>
            <div className="flex flex-col  pt-5   justify-center  w-full place-items-center ">
            {data?.map((info, index) => {
                const opacity = 1 - index * 0.35 ; // 1, 0.75, 0.5
                return (
                    <div key={index} className="w-full  h-auto text-white">
                        <div style={{ opacity }} className="w-auto  flex ">
                            <div className="w-[30px] flex flex-col   h-auto">
                                <div className="w-[30px] flex ">
                                    <div className="p-2 bg-[#00311D] rounded-full">
                                        <AcademicCapIcon className="w-5 text-brand-600" />
                                    </div>
                                </div>

                                {index !== data?.length -1  && (
                                    <div  className=" flex   justify-center h-full w-full ">
                                      <div className="w-[2px] h-full   lg:flex   bg-blue-200" />
                                  </div>
                                )}
                            </div>
                          <div className="w-full  p h-full pb-2 ">
                              <div className="p-5 pt-0 ml-2 h-full flex flex-col w-full  rounded-lg ">
                                  <p className="w-full text-foreground-light  lg:text-md  text-white">
                                      {info.major}
                                  </p>
                                  <p className="w-full italic text-foreground-light-description font-bold lg:text-sm text-white">
                                      {info.name}<span className="text-foreground-light "> ({info.year})</span>
                                  </p>
                                  <p className="w-full   text-foreground-light-description h-full text-sm lg:text-sm text-white font-thin">
                                      {info.description}

                                   </p>
                              </div>

                          </div>
                        </div>
                    </div>
                );
            })}

            </div>
        </section>
    );
}

export default EducationalTimeLine;