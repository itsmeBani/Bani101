import React from 'react';
import Me from "../../public/me.jpg"
import SocialMedia from "./SocialMedia.jsx";
import {CircleCheck, MapPin} from "lucide-react";
import verified from "../assets/veriofied.svg"
import EducationalTimeLine from "./EducationalTimeLine.jsx";
import {EducationalAttainment} from "../ProjectData.js";
function Profile() {
    return (
        <aside className="lg:w-[300px] flex flex-col p-2 gap-4 lg:gap-5  place-items-center justify-center ">

            <img alt="" className="rounded-full w-[170px] lg:w-auto ring-8     ring-[#006239] rounded-full p-2" src={Me}/>
            <div>
                <div className="flex  place-items-center justify-center ">

                    <h1 className={"text-white text-xl lg:text-3xl lg:text-2xl text-foreground-light font-bold flex place-item h-full  drop-shadow-sm"}>
                        Jiovani Fabro
                    </h1>

                    <img src={verified} className="w-6 "/>
                </div>
                <div className="flex  place-items-center gap-1 ">
                    <MapPin size={18}     className="text-white leaidng-2"/>
                    <p className="text-white/70 font semibold flex text-sm lg:text-lg">Tagudin, Ilocos Sur, Philippines</p>


                </div>

            </div>
            <SocialMedia/>

            <EducationalTimeLine data={EducationalAttainment}/>

        </aside>
    );
}

export default Profile;