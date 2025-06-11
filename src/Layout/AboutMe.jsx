
import {EducationalAttainment, Technology} from "../ProjectData.js"
import {Cog6ToothIcon} from "@heroicons/react/16/solid/index.js";
import Header from "../Component/Header.jsx";
import {motion} from "motion/react";
import EducationalTimeLine from "../Component/EducationalTimeLine.jsx";
import PhotoCollage from "../Component/PhotoCollage.jsx";
import CertificateAwards from "../Component/CertificateAwards.jsx";
function AboutMe(props) {



    return (
        <section id="aboutme" className=" h-full w-full  flex flex-col">
            <div className="">
                <Header title={"About Me"}
                        description={"I’m someone who enjoys turning ideas into real projects and constantly learning along the way."}/>

            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 w-full gap-3 lg:gap-5 px-5    lg:px-[8rem] pb-[3rem]">

                <div className="w-full h-auto bg-background border-[#2D2D2D] border-[1px] p-6 lg:p-8 rounded-lg shadow-md  ">
                    <h2 className="text-xl lg:text-3xl  font-bold  text-foreground-light  mb-4">Hi, I'm Jiovani Fabro 👋</h2>
                    <p className="text-sm lg:text-[16px] text-foreground-light-description leading-relaxed">
                        I’m a passionate developer who loves building real-world solutions with code. I’m always willing to learn, grow, and take on new challenges. My journey in tech is driven by curiosity, creativity, and the desire to turn ideas into impactful projects — whether through web development, mobile apps, or experimenting with new tools and frameworks.
                    </p>

                </div>

                <div  className="w-full  p-5 lg:p-8 flex flex-col  gap-3 rounded-lg border-[1px] bg-background border-[#2D2D2D]">
                    <header className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-[#00311D] rounded-md">
                                <Cog6ToothIcon className="w-5 text-brand-600" />
                            </div>
                            <h1 className="text-foreground-light text-lg lg:text-[25px] font-semibold">
                                Tech Stack & Tools
                            </h1>
                        </div>

                        <p className="lg:text-[16px] text-sm text-foreground-light-description">
                            A collection of the programming languages, tools, and frameworks I’ve used to develop my projects.
                        </p>

                    </header>

                    <main className="grid gap-2 grid-cols-4 lg:grid-cols-7 ">
                        {Technology?.map((url,index)=>{

                            return <motion.div initial={{opacity:0, y:-10,}}
                                               viewport={{ once: true }}
                                               whileHover={{ scale: 1.4, transition: {type:"spring",duration:0.2 ,delay:0.1}}}
                                               whileInView={{opacity:1, y:0,transition:{delay : index * 0.3, type: "spring",
                                                       visualDuration: 0.5, bounce: 0.25}}}>
                                <div className=" h-16 flex w-15 rounded-md border-[1px] border-[#2D2D2D] bg-[#1F1F1F]">
                                    <img draggable={false} alt={"icon"} src={url} className="w-full h-full p-3.5 " />

                                </div>
                            </motion.div>
                        })}

                    </main>



                </div>
            </div>
              <div className="flex flex-col gap-5">
                  <EducationalTimeLine data={EducationalAttainment}/>
                  <CertificateAwards/>
                  <PhotoCollage/>
              </div>
        </section>
    );
}

export default AboutMe;
