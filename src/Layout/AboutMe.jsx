
import {EducationalAttainment, Technology} from "../ProjectData.js"
import {Cog6ToothIcon} from "@heroicons/react/16/solid/index.js";
import Header from "../Component/Header.jsx";
import {motion} from "motion/react";
import EducationalTimeLine from "../Component/EducationalTimeLine.jsx";
import PhotoCollage from "../Component/PhotoCollage.jsx";
import CertificateAwards from "../Component/CertificateAwards.jsx";
import {Database, FlaskConical, Laptop} from "lucide-react";
import Profile from "../Component/Profile.jsx";
import ProfileOverview from "../Component/ProfileOverview.jsx";
function AboutMe(props) {



    return (
        <section id="aboutme" className=" h-full w-full   flex flex-col">
            <div className="">
                <Header
                    title={"My Tech Stack"}
                    description={
                        "These are the tools I use to create modern and responsive web experiences that provide seamless interaction and great user experience."
                    }
                />

            </div>
            <div className="grid grid-cols-1 z-50 md:grid-cols-2 w-full place-items-start gap-3 lg:gap-3 pb-[3rem]">



                <div className="w-full p-5 lg:p-8 flex flex-col border-[1px] bg-background border-[#2D2D2D] gap-3 rounded-lg">
                    <header className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#00311D] rounded-md">
                                <Laptop className="w-6 text-brand-600" />
                            </div>
                            <h1 className="text-foreground-light w-full text-lg lg:text-[25px] font-semibold">
                                Frontend
                            </h1>
                        </div>
                        <p className="lg:text-[16px] text-sm text-foreground-light-description">
                            Technologies and frameworks I use to build user interfaces, interactive layouts, and responsive web experiences.
                        </p>
                    </header>

                    <main className="grid gap-2 grid-cols-4 lg:grid-cols-7">
                        {Technology?.frontend?.map((tool) => (
                            <div className="group" key={tool.name}>
                                <div className="h-16 flex w-15 rounded-md border-[1px] border-[#2D2D2D] bg-[#1F1F1F]">
                                    <img draggable={false} alt={tool.name} src={tool.logo} className="w-full h-full p-3.5" />
                                </div>
                                <div className="text-white border border-[#00e673] left-1/2 -translate-x-1/2 bg-[#006239] absolute text-xs px-2 rounded-[4px] group-hover:block hidden -top-6">
                                    <p className="font-normal text-[9px] text-nowrap">{tool.name}</p>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>

                <div className="w-full p-5 lg:p-8 flex flex-col border-[1px] bg-background border-[#2D2D2D] gap-3 rounded-lg">
                    <header className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#00311D] rounded-md">
                                <Database className="w-6 text-brand-600" />
                            </div>
                            <h1 className="text-foreground-light w-full text-lg lg:text-[25px] font-semibold">
                                Backend
                            </h1>
                        </div>
                        <p className="lg:text-[16px] text-sm text-foreground-light-description">
                            Tools, frameworks, and databases I use to build server-side logic, manage data, and create robust APIs.
                        </p>
                    </header>

                    <main className="grid gap-2 grid-cols-4 lg:grid-cols-7">
                        {Technology?.backend?.map((tool) => (
                            <div className="group" key={tool.name}>
                                <div className="h-16 flex w-15 rounded-md border-[1px] border-[#2D2D2D] bg-[#1F1F1F]">
                                    <img draggable={false} alt={tool.name} src={tool.logo} className="w-full h-full p-3.5" />
                                </div>
                                <div className="text-white border border-[#00e673] left-1/2 -translate-x-1/2 bg-[#006239] absolute text-xs px-2 rounded-[4px] group-hover:block hidden -top-6">
                                    <p className="font-normal text-[9px] text-nowrap">{tool.name}</p>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>

                <div className="w-full p-5 lg:p-8 flex flex-col border-[1px] bg-background border-[#2D2D2D] gap-3 rounded-lg">
                    <header className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#00311D] rounded-md">
                                <FlaskConical className="w-6 text-brand-600" />
                            </div>
                            <h1 className="text-foreground-light w-full text-lg lg:text-[25px] font-semibold">
                                Developer Tools
                            </h1>
                        </div>
                        <p className="lg:text-[16px] text-sm text-foreground-light-description">
                            Utilities and software that help me streamline development, testing, and deployment of my projects.
                        </p>
                    </header>

                    <main className="grid gap-2 grid-cols-4 lg:grid-cols-7">
                        {Technology?.tools?.map((tool) => (
                            <div className="group" key={tool.name}>
                                <div className="h-16 flex w-15 rounded-md border-[1px] border-[#2D2D2D] bg-[#1F1F1F]">
                                    <img draggable={false} alt={tool.name} src={tool.logo} className="w-full h-full p-3.5" />
                                </div>
                                <div className="text-white border border-[#00e673] left-1/2 -translate-x-1/2 bg-[#006239] absolute text-xs px-2 rounded-[4px] group-hover:block hidden -top-6">
                                    <p className="font-normal text-[9px] text-nowrap">{tool.name}</p>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>

            </div>
              <div className="flex z-50 flex-col gap-5">
                  {/*<CertificateAwards/>*/}
                  {/*<PhotoCollage/>*/}
              </div>
        </section>
    );
}

export default AboutMe;
