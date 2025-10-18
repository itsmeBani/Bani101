
import {Technology} from "../ProjectData.js"
import Header from "../Component/Header.jsx";
import {Laptop} from "lucide-react"
import CertificateAwards from "../Component/CertificateAwards.jsx";
import PhotoCollage from "../Component/PhotoCollage.jsx";

function AboutMe() {



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
            <div className="grid grid-cols-1 z-50 md:grid-cols-2 w-full place-items-start gap-3 lg:gap-3 ">



                {Technology.map((category) => (
                    <div
                        key={category.id}
                        className="w-full p-5 lg:p-8 flex flex-col border-[1px] bg-background border-[#2D2D2D] gap-3 rounded-lg "
                    >

                        <header className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#00311D] rounded-md">
                                    <Laptop className="w-6 text-brand-600" />
                                </div>
                                <h1 className="text-foreground-light w-full text-lg lg:text-[25px] font-semibold">
                                    {category.title}
                                </h1>
                            </div>
                            <p className="lg:text-[16px] text-sm text-foreground-light-description">
                                {category.description}
                            </p>
                        </header>


                        <main className="grid gap-2 justify-start grid-flow-row auto-rows-max grid-cols-[repeat(auto-fill,minmax(70px,auto))]">
                            {category.items.map((tool) => (
                                <div className="group relative" key={tool.name}>
                                    <div className="h-16 flex w-15 rounded-md border-[1px] border-[#2D2D2D] bg-[#1F1F1F]">
                                        <img
                                            draggable={false}
                                            alt={tool.name}
                                            src={tool.logo}
                                            className="w-full h-full p-3.5"
                                        />
                                    </div>
                                    <div className="text-white border border-[#00e673] left-1/2 -translate-x-1/2 bg-[#006239] absolute text-xs px-2 rounded-[4px] group-hover:block hidden -top-6">
                                        <p className="font-normal text-foreground-light text-[10px] whitespace-nowrap">{tool.name}</p>
                                    </div>
                                </div>
                            ))}
                        </main>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default AboutMe;
