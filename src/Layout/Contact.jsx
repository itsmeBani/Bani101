import React from 'react';
import Header from "../Component/Header.jsx";
import SocialMedia from "../Component/SocialMedia.jsx";
import CODING from "../assets/CODINGPIC.jpeg"
import {
    HomeModernIcon, PhoneIcon
} from "@heroicons/react/16/solid/index.js";
import {Mail, MessageCircle, MessageSquare, MessageSquareMoreIcon} from "lucide-react";
import ContactForm from "../Component/ContactForm.jsx";

function Contact() {
    return (
        <section id="contact" className=" h-full w-full flex flex-col">
            <div>
                <Header
                    title={"Contact Me"}
                    description={"Get in touch with me for any inquiries or collaborations."}
                />
                <div className="  lg:pb-[3rem] w-full ">

                    <SocialMedia/>

                    <div className="flex mt-10 flex-col  h-full   lg:flex-row gap-3 lg:gap-5 ">
                        <>

                            <div className="w-full h-auto rounded-lg relative flex  overflow-hidden ">
                                <div
                                    className="absolute inset-0 bg-gradient-to-l from-black via-black/100 to-black/90 opacity-90 z-10"></div>

                                <img src={CODING} alt={""} className="object-cover w-full lg:h-[500px] "/>
                                <div className="absolute top-0 z-[11] ">
                                    <div className="w-full p-5 lg:p-10 ">
                                        <h2 className="text-lg text-foreground-light font-bold text-white lg:text-3xl  mb-2 lg:mb-4">Get
                                            in Touch</h2>
                                        <p className="mb-8  text-sm  lg:text-[16px]  text-white text-foreground-light-description  leading-relaxed">
                                            Feel free to reach out for collaborations, questions, or just to say hello.
                                            I'm always open to connecting with new people and exciting opportunities.
                                        </p>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex place-items-center gap-3">

                                                <div className="p-2 bg-[#00311D] rounded-md">
                                                    <HomeModernIcon className="w-5 text-brand-600 "/>
                                                </div>

                                                <p className=" text-xs lg:text-[16px]  text-foreground-light-description">Tagudin,
                                                    Ilocos Sur, Philippines</p>
                                            </div>
                                            <div className="flex place-items-center gap-3">
                                                <div className="p-2 bg-[#00311D] rounded-md">
                                                    <PhoneIcon className="w-5 text-brand-600 "/>
                                                </div>
                                                <p className="text-xs lg:text-[16px]  text-foreground-light-description">+639107645918</p>

                                            </div>
                                            <div className="flex place-items-center gap-3">
                                                <div className="p-2 bg-[#00311D] rounded-md">
                                                    <Mail className="w-5 text-brand-600 "/>
                                                </div>
                                                <p className="text-xs lg:text-[16px] text-foreground-light-description">fabrojiovani1@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>


                        <div
                            className="w-full  px-0  bg-pink lg:px-10 py-0 lg:py-5 lg:pb-0 pb-5  h-full">

                            <div
                                className=" border-[1px] flex rounded-lg gap-4  flex-col bg-background border-[#2D2D2D] p-5 lg:p-7 h-full ">
                                <div className="flex relative justify-center">
                                    <div className="p-2 absolute left-0 bg-[#00311D] rounded-md">
                                        <MessageSquareMoreIcon className="w-5 text-brand-600 "/>
                                    </div>
                                    <h1 className="Kerif  text-center text-white text-3xl">Message me</h1>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Contact;